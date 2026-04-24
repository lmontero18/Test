import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Milestone = {
  year: string;
  title: string;
  description: string;
  accent?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    year: "2021",
    title: "Primera línea de código profesional",
    description: "Inicio como desarrollador freelance.",
  },
  {
    year: "2022",
    title: "Lanzamiento de mis primeras startups",
    description: "Aprendizajes y pivotes.",
  },
  {
    year: "2023",
    title: "Oferta de Amazon por $4,000 USD",
    description: "Decidí seguir mi camino.",
  },
  {
    year: "2024",
    title: "Fundación de Naia",
    description: "Agencia de automatización.",
  },
  {
    year: "2025",
    title: "Fundación de Naia Code",
    description:
      "Agencia de desarrollo. Primeros clientes internacionales a escala.",
  },
  {
    year: "Hoy",
    title: "Equipo en Costa Rica, clientes globales",
    description: "Construyendo para empresas en LATAM y USA.",
    accent: true,
  },
];

export default function Timeline() {
  return (
    <section
      id="trayectoria"
      className="container-x border-t border-line py-24 md:py-32"
    >
      <SectionHeader eyebrow="04 · Historia" title="Trayectoria" />

      <ol className="relative ml-3 border-l border-line md:ml-6">
        {MILESTONES.map((m, i) => (
          <Reveal
            as="li"
            key={`${m.year}-${i}`}
            delay={i * 0.05}
            className="relative pb-12 pl-8 last:pb-0 md:pl-12"
          >
            <span
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper ${
                m.accent ? "bg-accent" : "bg-ink"
              }`}
              aria-hidden
            />
            <div className="flex flex-col gap-2">
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
                {m.year}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                {m.title}
              </h3>
              <p className="max-w-2xl text-base font-light text-muted">
                {m.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
