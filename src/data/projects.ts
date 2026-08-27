import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export type ProjectCategory = "Backend" | "Frontend" | "Full Stack" | "Platform";

export type Project = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  year: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Marketplace Engine",
    image: work1,
    description:
      "Modular marketplace backend using .NET 8 microservices and the repository pattern. A high-maintainability foundation ideal for multi-vendor booking marketplaces.",
    tags: [".NET 8", "Microservices", "Repository Pattern", "SQL Server"],
    category: "Backend",
    year: 2025,
    featured: true,
  },
  {
    title: "Real-Time Logistics & IoT Dashboard",
    image: work2,
    description:
      "Full-stack dashboard with SignalR real-time visualization. The architecture transfers directly to live availability, booking status, and concurrent reservation flows.",
    tags: ["Angular", ".NET Core", "SignalR", "Redis"],
    category: "Full Stack",
    year: 2025,
    featured: true,
  },
  {
    title: "Multi-Tenant CRM/ERP Sync Platform",
    image: work3,
    description:
      "Secure data isolation and hierarchical RBAC across large-scale multi-tenant environments — the core pattern required by modern SaaS booking platforms.",
    tags: ["Multi-Tenant", "RBAC", "OAuth 2.0", "PostgreSQL"],
    category: "Platform",
    year: 2024,
    featured: true,
  },
  {
    title: "Next.js Portfolio & PWA",
    image: work4,
    description:
      "High-performance frontend with optimized web vitals, demonstrating modern, polished product interfaces built for speed and clarity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    category: "Frontend",
    year: 2024,
    featured: true,
  },
  {
    title: "Distributed Payment Orchestrator",
    image: work1,
    description:
      "Idempotent payment pipeline coordinating multiple providers with outbox events, retries and reconciliation jobs — zero double-charges under load.",
    tags: [".NET 8", "RabbitMQ", "Outbox Pattern", "Stripe"],
    category: "Backend",
    year: 2025,
  },
  {
    title: "Identity & Access Service",
    image: work3,
    description:
      "Centralised auth service issuing short-lived JWTs with refresh rotation, device sessions and fine-grained permission claims for every downstream API.",
    tags: ["IdentityServer", "JWT", "OAuth 2.0", "Redis"],
    category: "Backend",
    year: 2024,
  },
  {
    title: "Headless CMS Storefront",
    image: work4,
    description:
      "Composable storefront with incremental static regeneration, edge caching and a content model that non-technical editors actually enjoy using.",
    tags: ["Next.js", "GraphQL", "Edge Cache", "Tailwind CSS"],
    category: "Frontend",
    year: 2024,
  },
  {
    title: "Warehouse Inventory Control",
    image: work2,
    description:
      "Barcode-driven stock movements with optimistic concurrency, audit trails and forecasting reports across dozens of physical locations.",
    tags: ["Angular", ".NET Core", "SQL Server", "SignalR"],
    category: "Full Stack",
    year: 2023,
  },
  {
    title: "Booking & Availability Engine",
    image: work1,
    description:
      "Slot-based reservation core handling overlapping resources, timezone-safe calendars and race-free concurrent bookings at scale.",
    tags: ["Domain Events", "PostgreSQL", "CQRS", ".NET 8"],
    category: "Platform",
    year: 2025,
  },
  {
    title: "Analytics & Reporting Suite",
    image: work3,
    description:
      "Streaming ingestion into pre-aggregated projections, powering sub-second dashboards over hundreds of millions of rows.",
    tags: ["ETL", "ClickHouse", "Recharts", "React"],
    category: "Full Stack",
    year: 2023,
  },
  {
    title: "Design System & Component Library",
    image: work4,
    description:
      "Token-driven component library with accessible primitives, dark-first theming and visual regression coverage shared by four product teams.",
    tags: ["React", "Radix UI", "Storybook", "Tokens"],
    category: "Frontend",
    year: 2024,
  },
  {
    title: "Notification & Messaging Hub",
    image: work2,
    description:
      "Fan-out delivery across email, SMS and push with templating, per-user preferences, throttling and delivery analytics.",
    tags: ["Worker Services", "RabbitMQ", "Templating", "Azure"],
    category: "Platform",
    year: 2023,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ProjectCategory[] = [
  "Backend",
  "Frontend",
  "Full Stack",
  "Platform",
];
