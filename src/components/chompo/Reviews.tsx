interface Review {
  text: string;
  author: string;
  role: string;
  tone: "signal" | "ink";
  rotation: number;
  offsetX: number;
  offsetY: number;
}

const REVIEWS: Review[] = [
  {
    text: "I LOVE HOW CHOMPO KEEPS THINGS SIMPLE BUT SO FLAVORFUL. THE FRIES ARE CRISPY AND THE BURGERS — ABSOLUTE PERFECTION!",
    author: "SARAH CHEN",
    role: "🍔 BURGER LOVER",
    tone: "signal",
    rotation: -9,
    offsetX: -180,
    offsetY: 10,
  },
  {
    text: "THIS IS NOT JUST FOOD. IT'S AN EXPERIENCE. EVERY BITE IS CRISPY, JUICY, AND FULL OF FLAVOR. CHOMPO IS MY GO-TO!",
    author: "JAMES TUCKER",
    role: "FOOD CRITIC",
    tone: "ink",
    rotation: -3,
    offsetX: -55,
    offsetY: -8,
  },
  {
    text: "ORDERING FROM CHOMPO IS ALWAYS EASY AND THE DELIVERY IS FAST! THE TASTE IS UNMATCHED AND THE VIBE FEELS REALLY GENUINE.",
    author: "BURGER PRINCESS",
    role: "🍟 SNACK QUEEN",
    tone: "signal",
    rotation: 4,
    offsetX: 65,
    offsetY: 6,
  },
  {
    text: "CHOMPO BURGERS HIT THE SPOT EVERY TIME. BOLD FLAVORS, FRESH INGREDIENTS, AND FRIENDLY SERVICE. MY GO-TO FOR A QUICK MEAL!",
    author: "DANIEL TUCKER",
    role: "🍟 REGULAR CUSTOMER",
    tone: "ink",
    rotation: 10,
    offsetX: 185,
    offsetY: 14,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream px-6 pt-[90px] pb-[100px]">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-body text-[clamp(9px,1.1vw,11px)] tracking-[0.42em] text-ink/55">
          TESTIMONIALS
        </p>

        <h2 className="mt-2.5 mb-[90px] text-center font-display text-[clamp(28px,5.5vw,70px)] leading-[1.02] tracking-[0.03em] text-ink">
          REAL TALK FROM
          <br />
          REAL FOODIES
        </h2>

        {/* fanned stack — large screens */}
        <div className="relative hidden h-[320px] items-center justify-center lg:flex">
          {REVIEWS.map((review, index) => (
            <article
              key={index}
              className={`absolute w-[clamp(170px,14vw,210px)] min-h-[260px] p-5 shadow-[8px_8px_28px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:z-20 ${
                review.tone === "signal" ? "bg-signal" : "bg-ink"
              }`}
              style={{
                zIndex: index + 1,
                transform: `rotate(${review.rotation}deg) translate(${review.offsetX}px, ${review.offsetY}px)`,
              }}
            >
              <Card review={review} />
            </article>
          ))}
        </div>

        {/* stacked grid — small screens */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {REVIEWS.map((review, index) => (
            <article
              key={index}
              className={`p-5 shadow-[6px_6px_20px_rgba(0,0,0,0.25)] ${
                review.tone === "signal" ? "bg-signal" : "bg-ink"
              }`}
            >
              <Card review={review} />
            </article>
          ))}
        </div>

        <div className="mt-[60px] text-center">
          <button
            type="button"
            className="border-[1.5px] border-ink px-8 py-2.5 font-display text-[clamp(9px,1.1vw,12px)] tracking-[0.28em] text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
          >
            READ MORE REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ review }: { review: Review }) {
  return (
    <>
      <Stars />
      <p className="mt-3 font-body text-[0.55rem] leading-[1.75] tracking-[0.04em] text-cream lg:text-[8.5px]">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 mb-2.5 h-px w-6 bg-cream/40" />
      <p className="font-display text-[0.55rem] tracking-[0.14em] text-cream">— {review.author}</p>
      <p className="mt-[3px] font-body text-[0.5rem] tracking-[0.1em] text-cream/55">
        {review.role}
      </p>
    </>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-cream" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 12 12" className="w-2.5" fill="currentColor">
          <path d="M6 0l1.6 3.9L12 4.4 8.7 7.2l1 4.3L6 9.2l-3.7 2.3 1-4.3L0 4.4l4.4-.5z" />
        </svg>
      ))}
    </div>
  );
}
