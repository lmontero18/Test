"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const FULL_NAME = "Luis Montero\nMolina";
const TYPE_SPEED_MS = 60;
const TYPE_START_DELAY_MS = 350;

function useTypewriter(text: string, enabled: boolean) {
  const [out, setOut] = useState(enabled ? "" : text);

  useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    setOut("");
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, TYPE_SPEED_MS);
    }, TYPE_START_DELAY_MS);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, enabled]);

  return out;
}

export default function Hero() {
  const reduced = useReducedMotion();
  const typed = useTypewriter(FULL_NAME, !reduced);
  const isDone = typed.length === FULL_NAME.length;

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
        };

  return (
    <section
      id="top"
      className="container-x flex min-h-[calc(100vh-4rem)] flex-col justify-center pb-24 pt-20 md:pt-28"
    >
      <motion.p
        {...fade(0)}
        className="mb-6 text-[13px] font-medium uppercase tracking-[0.14em] text-muted"
      >
        Desarrollador · Emprendedor · Costa Rica
      </motion.p>

      <motion.h1
        {...fade(0.05)}
        aria-label="Luis Montero Molina"
        className="relative font-black tracking-tightest text-ink text-6xl leading-[0.95] md:text-8xl"
      >
        <span aria-hidden className="invisible whitespace-pre-line">
          {FULL_NAME}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 whitespace-pre-line"
        >
          {typed}
          <span
            className={`ml-[0.05em] inline-block h-[0.82em] w-[0.06em] translate-y-[0.08em] bg-ink ${
              isDone ? "animate-caret-blink" : ""
            }`}
          />
        </span>
      </motion.h1>

      <motion.p
        {...fade(0.15)}
        className="mt-8 max-w-2xl text-xl font-medium text-ink md:text-2xl"
      >
        Desarrollador de software y emprendedor. Automatizo procesos para que
        empresas ahorren tiempo y dinero.
      </motion.p>

      <motion.p
        {...fade(0.25)}
        className="mt-5 max-w-xl text-base font-light text-muted md:text-lg"
      >
        5 años construyendo software para clientes internacionales. Fundador
        de Naia y Naia Code.
      </motion.p>

      <motion.div
        {...fade(0.35)}
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-[15px] font-medium text-paper transition-opacity hover:opacity-90"
        >
          Agendar llamada
        </a>
        <a
          href="#proyectos"
          className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink"
        >
          Ver proyectos
        </a>
      </motion.div>

      <motion.div
        {...fade(0.5)}
        className="mt-20 hidden items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-muted md:flex"
      >
        <ArrowDown size={14} className="animate-bounce" aria-hidden />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
