import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const COMPANIES = [
  {
    name: "Naia",
    tag: "Agencia de automatización",
    description:
      "Ayudamos a empresas a ahorrar tiempo y dinero automatizando sus procesos internos.",
    href: "#",
  },
  {
    name: "Naia Code",
    tag: "Agencia de desarrollo de software",
    description:
      "Construimos software a la medida para empresas en LATAM y USA.",
    href: "#",
  },
  {
    name: "@luismonteromolina",
    tag: "Marca personal · TikTok",
    description:
      "Comparto lo que aprendo construyendo empresas y software.",
    href: "#",
  },
];

export default function Companies() {
  return (
    <section
      id="empresas"
      className="container-x border-t border-line py-24 md:py-32"
    >
      <SectionHeader eyebrow="02 · Empresas" title="Lo que construyo" />

      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
        {COMPANIES.map((company, i) => (
          <Reveal
            as="li"
            key={company.name}
            delay={i * 0.08}
            className="group bg-paper"
          >
            <a
              href={company.href}
              className="flex h-full flex-col justify-between gap-10 p-8 transition-colors md:p-10"
              aria-label={`${company.name} — ${company.tag}`}
            >
              <div className="space-y-3">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  {company.tag}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {company.name}
                </h3>
                <p className="text-base font-light leading-relaxed text-muted">
                  {company.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink">
                Ver más
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
