export default function SectionHeader({ title, subtitle }) {
  return <div className="mb-12 md:mb-16"><h2 className="mb-3 text-3xl font-medium tracking-tight text-white md:text-4xl">{title}</h2>{subtitle && <p className="max-w-2xl text-lg font-light text-[#c2c2c2]">{subtitle}</p>}<div className="mt-6 h-1 w-12 rounded-full bg-[var(--color-accent)] opacity-70" /></div>;
}
