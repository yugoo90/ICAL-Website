import { cn } from "../lib/utils";

export function SectionBackground({ children, className, fullHeight = true }) {
  return (
    <section
      className={cn(
        "relative py-12 lg:py-16",
        fullHeight && "min-h-screen",
        className
      )}
    >
      <div
        className="ical-page-flow absolute inset-0"
        aria-hidden="true"
      />
      <div className="ical-texture absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 mb-4">
        {title}
      </h1>
      <div className="ical-accent-bar mx-auto" />
      {subtitle ? (
        <p className="text-lg text-emerald-900/75 mt-6 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
