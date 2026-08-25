import burgerBite from "@/assets/collage-sunglasses-burger.jpg";
import chickenHand from "@/assets/collage-chicken-hand.jpg";
import fries from "@/assets/featured-fries.jpg";
import pizza from "@/assets/featured-pizza.jpg";

const TILE = "relative aspect-square overflow-hidden";
const PHOTO_TILE = `${TILE} group`;
const TEXT_TILE = `${TILE} flex flex-col items-center justify-center p-[clamp(1.25rem,4vw,2.75rem)] text-center`;
const HEADLINE =
  "font-display text-[clamp(1rem,2.6vw,2rem)] leading-[1.08] tracking-[0.02em] text-cream";
const LABEL =
  "font-oswald text-[clamp(0.44rem,0.9vw,0.625rem)] font-light tracking-[0.38em] uppercase";
const PILL = `font-oswald text-[clamp(0.44rem,0.9vw,0.625rem)] font-light tracking-[0.32em] uppercase text-cream border border-cream/50 px-5 py-[5px]`;

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={PHOTO_TILE}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </div>
  );
}

export function FeaturedSection() {
  return (
    <section className="w-full bg-cream">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Photo src={burgerBite} alt="Double cheeseburger with fresh lettuce and melted cheese" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${LABEL} mb-2 text-cream/75`}>Chompo Motto</p>
          <p className={`${HEADLINE} mb-6`}>
            Turn Up The
            <br />
            Flavor, Turn Up
            <br />
            The Fun.
          </p>
          <span className={PILL}>Chompo</span>
        </div>

        <Photo src={chickenHand} alt="Crispy golden fried chicken held in one hand" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${LABEL} mb-2 text-cream/75`}>Chompo Spirit</p>
          <p className={HEADLINE}>
            Snack Like
            <br />
            You Mean It
          </p>
          <span
            aria-hidden="true"
            className="mt-6 font-display text-[clamp(1.125rem,2.5vw,1.75rem)] tracking-[0.1em] text-cream/50"
          >
            →
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className={`${TEXT_TILE} bg-ink`}>
          <p className={`${HEADLINE} mb-4`}>
            Bold Bites,
            <br />
            Big Smiles.
          </p>
          <span aria-hidden="true" className="h-0.5 w-9 bg-signal" />
        </div>

        <Photo src={fries} alt="Golden crispy french fries in a red carton" />
        <Photo src={pizza} alt="Fresh hot pizza with melted cheese and pepperoni" />

        <div className={`${TEXT_TILE} bg-signal`}>
          <p className={`${HEADLINE} mb-4`}>
            Every Bite
            <br />
            Tells A Story
          </p>
          <button type="button" className={`${PILL} transition-colors hover:bg-cream/10`}>
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
