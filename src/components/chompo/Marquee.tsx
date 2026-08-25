import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  durationSeconds?: number;
};

/**
 * Duplicates its children once and slides the track by -50% so the loop is
 * seamless. Children should be a single row of inline items.
 */
export function Marquee({
  children,
  reverse = false,
  className = "",
  durationSeconds = 28,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
