import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X / Twitter", href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="container-x border-t border-line py-24 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            05 · Contacto
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            ¿Construimos algo juntos?
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light text-muted md:text-xl">
            Si tienes un proyecto, una idea o solo quieres conversar,
            escríbeme.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-[15px] font-medium text-paper transition-opacity hover:opacity-90"
          >
            Agendar llamada
          </a>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            También por aquí
          </p>
          <ul className="divide-y divide-line border-y border-line">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group flex items-center justify-between py-4 text-[17px] font-medium text-ink"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
