import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STATS = [
  { value: "22", label: "Años" },
  { value: "5+", label: "Años programando" },
  { value: "2", label: "Empresas" },
  { value: "LATAM · USA", label: "Clientes" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="container-x border-t border-line py-24 md:py-32"
    >
      <SectionHeader eyebrow="01 · Contexto" title="Sobre mí" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="space-y-6 text-lg font-light leading-relaxed text-ink md:text-xl">
          <p>
            Tengo 22 años y llevo programando desde los 17. A los 18 empecé a
            construir aplicaciones y lancé varias startups — ninguna funcionó,
            y esa fue la mejor escuela que tuve.
          </p>
          <p>
            En el camino rechacé una oferta de{" "}
            <span className="font-medium text-ink">$4,000 USD en Amazon</span>{" "}
            para seguir construyendo lo mío. Hoy dirijo dos empresas:{" "}
            <span className="font-medium text-ink">Naia</span> (agencia de
            automatización) y{" "}
            <span className="font-medium text-ink">Naia Code</span> (agencia
            de desarrollo de software), además de mi marca personal en TikTok.
          </p>
          <p>
            Llevo más de 5 años desarrollando para clientes extranjeros y
            trabajando con empresas en Costa Rica y LATAM.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:pl-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-paper p-6 md:p-8"
              >
                <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
