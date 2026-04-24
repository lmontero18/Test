import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Project = {
  name: string;
  description: string;
  stack: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    name: "Proyecto 01",
    description:
      "Plataforma interna de automatización que reduce tareas manuales en operaciones.",
    stack: ["Next.js", "Supabase", "n8n"],
    href: "#",
  },
  {
    name: "Proyecto 02",
    description:
      "Panel de control en tiempo real para métricas comerciales y soporte.",
    stack: ["TypeScript", "Postgres", "Vercel"],
    href: "#",
  },
  {
    name: "Proyecto 03",
    description:
      "Producto web a la medida para un cliente internacional en LATAM.",
    stack: ["React", "Node", "AWS"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="container-x border-t border-line py-24 md:py-32"
    >
      <SectionHeader
        eyebrow="03 · Trabajo"
        title="Proyectos"
        subtitle="Una selección de lo que estoy construyendo."
      />

      <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
        {PROJECTS.map((project, i) => (
          <Reveal
            as="li"
            key={project.name}
            delay={i * 0.08}
            className="group"
          >
            <a
              href={project.href}
              className="flex h-full flex-col justify-between gap-10 rounded-lg border border-line p-8 transition-colors hover:border-ink"
              aria-label={`${project.name} — ver más`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-0.5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden
                  />
                </div>
                <p className="text-[15px] font-light leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
