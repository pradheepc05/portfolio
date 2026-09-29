import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ title, description, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/90">Portfolio</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
      {description ? <p className="mt-5 text-base text-slate-300">{description}</p> : null}
      {children}
    </div>
  );
}
