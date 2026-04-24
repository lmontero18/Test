import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      {eyebrow && (
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg font-light text-muted">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
