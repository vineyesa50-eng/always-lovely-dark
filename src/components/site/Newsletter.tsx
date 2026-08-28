import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "Email is required" })
  .email({ message: "Enter a valid email address" })
  .max(255, { message: "Email must be under 255 characters" });

export function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    toast.success("You're subscribed — watch your inbox for build updates.");
    setEmail("");
  };

  return (
    <section className="band-red relative overflow-hidden">
      <div className="container-page relative grid gap-8 py-24 md:grid-cols-2 md:items-center md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">Our Newsletter</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15] text-primary-foreground">
            Subscribe for Updates
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/85">
            Get the latest builds, maintenance tips and special workshop offers straight to your
            inbox.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              maxLength={255}
              className="h-12 border-transparent bg-background/95 text-foreground"
            />
            <Button type="submit" size="lg" variant="secondary" className="h-12 shrink-0">
              Subscribe
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
