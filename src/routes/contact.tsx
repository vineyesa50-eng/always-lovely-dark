import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MOTOcare — Book a Service or Get a Quote" },
      {
        name: "description",
        content:
          "Talk to the MOTOcare team about tuning, repair or a custom build. Same-day diagnostics on most vehicles.",
      },
      { property: "og:title", content: "Contact MOTOcare" },
      { property: "og:description", content: "Book a service, request a quote or plan your next build." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be under 1000 characters"),
});

const details = [
  { Icon: Mail, label: "info@motocare.com" },
  { Icon: Phone, label: "+1 234 567 890" },
  { Icon: MapPin, label: "London Eye, London, UK" },
  { Icon: Clock, label: "Mon – Sat, 9 AM – 10 PM" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    toast.success("Thanks — our service desk will reply within one working day.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Need Help?"
        description="Contact our experts for fast and reliable service. Tell us about the car and what you want from it."
      />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={submit} className="card-surface space-y-5 p-8">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight">Visit the workshop</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Drop in for a walk-around, or book ahead and we'll have a bay free when you arrive.
            </p>
            <ul className="mt-8 space-y-4">
              {details.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-4 text-muted-foreground">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
