import { memo, useEffect, useRef } from 'react';

function NeuralNetworkBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !context) return undefined;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0; let width = 0; let height = 0; let points = [];
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(width < 768 ? 38 : 72, Math.round(width * height / 15000));
      points = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, size: Math.random() + .5 }));
      if (motionQuery.matches) draw(false);
    };
    const draw = (animate = true) => {
      context.fillStyle = '#050505'; context.fillRect(0, 0, width, height);
      points.forEach((point, index) => {
        if (animate) { point.x += point.vx; point.y += point.vy; if (point.x < 0 || point.x > width) point.vx *= -1; if (point.y < 0 || point.y > height) point.vy *= -1; }
        context.fillStyle = 'rgba(255,87,34,.55)'; context.beginPath(); context.arc(point.x, point.y, point.size, 0, Math.PI * 2); context.fill();
        for (let next = index + 1; next < points.length; next += 1) { const other = points[next]; const dx = point.x - other.x; const dy = point.y - other.y; const distance = Math.hypot(dx, dy); if (distance < 130) { context.strokeStyle = `rgba(255,87,34,${.12 * (1 - distance / 130)})`; context.lineWidth = .6; context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke(); } }
      });
      if (animate) frame = requestAnimationFrame(() => draw(true));
    };
    const start = () => { cancelAnimationFrame(frame); draw(!motionQuery.matches); };
    resize(); start();
    window.addEventListener('resize', resize, { passive: true }); motionQuery.addEventListener?.('change', start);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); motionQuery.removeEventListener?.('change', start); };
  }, []);
  return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true"><canvas ref={canvasRef} className="neural-canvas absolute inset-0" /><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] opacity-80" /></div>;
}

export default memo(NeuralNetworkBackground);
