import { useEffect, useRef, useState } from "react";
import { Cloud } from "./FoodIcons";

/** Builds the scalloped divider that bites into the dark footer below. */
function generateScallopPath(width: number, height: number, scallopWidth: number): string {
  const count = Math.ceil(width / scallopWidth);
  let d = `M0,${height}`;
  for (let i = 0; i < count; i++) {
    const x1 = i * scallopWidth;
    const x2 = x1 + scallopWidth / 2;
    const x3 = x1 + scallopWidth;
    d += ` Q${x2},0 ${x3},${height}`;
  }
  d += ` L${width},${height} Z`;
  return d;
}

const SCALLOP = generateScallopPath(1440, 64, 48);

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

const KHIDA_LINES = ["Khida", "Laglee", "Call De"];

export function KhidaSection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      {/* floating doodle clouds */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 text-ink" aria-hidden="true">
        <Cloud className="animate-float absolute top-6 left-[4%] w-24 opacity-80 sm:w-32" />
        <Cloud className="animate-float-slow absolute top-20 left-[16%] w-16 opacity-60 sm:w-20" />
        <Cloud className="animate-float-slow absolute top-4 right-[6%] w-24 opacity-80 sm:w-32" />
        <Cloud className="animate-float absolute top-24 right-[20%] w-16 opacity-60 sm:w-20" />
      </div>

      {/* Top label area */}
      <div className="relative pt-[72px] pb-6 text-center">
        <p className="font-oswald text-[clamp(9px,1.1vw,11px)] font-light tracking-[0.42em] text-ink/55 uppercase">
          JOIN THE FLAVOR REVOLUTION!
        </p>
        <h2 className="mt-2 font-display text-[clamp(24px,4.2vw,56px)] leading-[1.05] tracking-[0.04em] text-ink">
          FUEL UP WITH
          <br />
          CHOMPO!
        </h2>
      </div>

      {/* Main red box */}
      <div className="relative flex justify-center px-4">
        <div
          ref={ref}
          className={`khida-box relative w-full max-w-[700px] bg-signal px-[clamp(32px,5.5vw,60px)] pt-[clamp(36px,5.5vw,68px)] pb-[clamp(80px,11vw,120px)] ${
            shown ? "is-in" : ""
          }`}
        >
          {/* Big stylized text */}
          <div className="max-w-[60%] font-display text-[clamp(44px,9.5vw,128px)] leading-[0.88] tracking-[-0.01em] text-cream">
            {KHIDA_LINES.map((line, i) => (
              <span
                key={line}
                className="khida-line block"
                style={{ transitionDelay: `${180 + i * 130}ms` }}
              >
                {line}
              </span>
            ))}
          </div>

          {/* Straw decorations */}
          <div
            aria-hidden="true"
            className="khida-straw absolute top-[-60px] right-[clamp(140px,23vw,225px)] h-[160px] w-[10px] rounded-[6px] bg-cream"
          />
          <div
            aria-hidden="true"
            className="khida-straw khida-straw-2 absolute top-[-46px] right-[clamp(122px,21vw,204px)] h-[140px] w-[10px] rounded-[6px] border-[2.5px] border-cream"
          />

          {/* Discount card */}
          <div className="khida-card absolute top-[clamp(20px,3.2vw,40px)] right-[clamp(20px,3.5vw,48px)] w-[clamp(132px,17.5vw,178px)] bg-cream px-5 py-[18px] shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-1.5deg]">
            <div className="mb-2.5 inline-block bg-signal px-2.5 py-1">
              <p className="font-display text-[clamp(9px,1.1vw,11px)] tracking-[0.14em] text-cream">
                LIMITED OFFER
              </p>
            </div>

            <p className="mb-1 font-display text-[clamp(22px,3.4vw,32px)] leading-none text-signal">
              25%
              <br />
              Discount
            </p>
            <p className="mb-3 font-oswald text-[9px] leading-[1.5] font-light tracking-[0.06em] text-ink">
              Download The App Now
            </p>

            {/* ORDER NOW button */}
            <button
              type="button"
              className="mb-2.5 w-full cursor-pointer bg-ink px-3 py-2.5 text-center transition-colors hover:bg-signal-dark"
            >
              <p className="mb-0.5 font-display text-[clamp(13px,2vw,18px)] leading-none tracking-[0.1em] text-cream">
                ORDER
                <br />
                NOW
              </p>
              <span className="animate-nudge-left inline-block text-[13px] text-signal">←</span>
            </button>

            {/* App store buttons */}
            <div className="flex flex-col gap-2">
              <span className="flex cursor-pointer items-center gap-2 rounded bg-ink px-2 py-1.5 transition-transform hover:translate-x-0.5">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                  <path d="M2 1 L9 6 L2 11 Z" fill="var(--cream)" />
                </svg>
                <span className="font-oswald text-[7px] leading-[1.4] font-light tracking-[0.04em] text-cream">
                  GET IT ON
                  <br />
                  <strong className="font-semibold">Google Play</strong>
                </span>
              </span>
              <span className="flex cursor-pointer items-center gap-2 rounded bg-ink px-2 py-1.5 transition-transform hover:translate-x-0.5">
                <svg viewBox="0 0 24 24" width="10" height="12" fill="var(--cream)" aria-hidden="true">
                  <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.8-3.5.8s-1.9-.8-3.1-.8c-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.8ZM14 5.4c.6-.8 1.1-1.9 1-3-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 3 1.1 0 2.3-.6 2.9-1.5Z" />
                </svg>
                <span className="font-oswald text-[7px] leading-[1.4] font-light tracking-[0.04em] text-cream">
                  Download on the
                  <br />
                  <strong className="font-semibold">App Store</strong>
                </span>
              </span>
            </div>
          </div>

          {/* CHOMPO CALL button */}
          <div className="mt-8">
            <button
              type="button"
              className="khida-dashed inline-flex items-center gap-2 rounded-[30px] border-2 border-dashed border-cream/55 bg-transparent px-7 py-[11px] font-display text-[clamp(10px,1.3vw,13px)] tracking-[0.22em] text-cream transition-colors hover:bg-cream/10"
            >
              <span className="animate-[spin_5s_linear_infinite] inline-block">★</span> CHOMPO CALL
            </button>
          </div>
        </div>
      </div>

      {/* Bottom scallop into black */}
      <div className="-mt-0.5 w-full bg-cream">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="block h-16 w-full"
          aria-hidden="true"
        >
          <path d={SCALLOP} fill="var(--ink)" />
        </svg>
      </div>
    </section>
  );
}
