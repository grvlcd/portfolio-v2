"use client";

const EXPERIENCES = [
  {
    company: "MagphAI",
    role: "Software Engineer",
    dateRange: "February 2026 – Present",
    tech: ["Next.js", "TypeScript", "Supabase", "HTML", "CSS", "Tailwind", "Shadcn", "N8N"],
    bullets: [
      "Developed and maintained the MagphAI platform using Next.js, TypeScript, Supabase, Tailwind, and Shadcn UI.",
      "Designed reusable UI components and responsive layouts to ensure a smooth experience across desktop and mobile devices.",
      "Integrated Supabase services for authentication, data management, and real-time workflows.",
      "Built and connected N8N automations to streamline internal processes and reduce manual operational tasks.",
      "Collaborated on feature planning, iterative releases, and production support to continuously improve reliability and performance.",
    ],
  },
  {
    company: "TristynTech",
    role: "Senior Software Engineer",
    dateRange: "Apr 2025 – December 2025",
    tech: ["React", "Open AI", "Laravel", "Google Cloud", "Firebase", "Git"],
    bullets: [
      "Integrate AI capabilities using OpenAI APIs for natural language processing and automated content generation",
      "Architect cloud-native solutions on GCP (Compute Engine, Cloud Storage, Firebase) for enterprise applications",
      "Build responsive, component-driven interfaces with React (hooks, context API, state management)",
      "Establish CI/CD with Git, automated testing, and Firebase deployment",
      "Develop serverless functions (Firebase & Google Cloud Functions) for backend logic and API integrations",
      "Configure Firebase Auth with role-based access control and secure user management",
    ],
  },
  {
    company: "OnlySub",
    role: "Full Stack Developer",
    dateRange: "Apr 2024 – February 2025",
    tech: ["NestJS", "Next.js", "TypeScript", "MongoDB", "Jest", "Git"],
    bullets: [
      "Led development of scalable web applications using NestJS and Next.js",
      "Implemented comprehensive testing strategies using Jest",
      "Designed and maintained MongoDB database architecture",
      "Developed and documented REST APIs following industry best practices",
    ],
  },
  {
    company: "Umbra Digital Company",
    role: "Full Stack Developer – MERN Stack",
    dateRange: "May 2024 – Apr 2025",
    tech: ["Next.js", "Node.js", "TypeScript", "TypeORM", "MySQL", "MongoDB", "Git"],
    bullets: [
      "Architected and led development of enterprise-scale applications using Next.js, Node.js, and TypeScript",
      "Implemented robust database solutions with TypeORM (MySQL and MongoDB)",
      "Designed reusable component libraries and maintainable APIs",
      "Established security protocols (authentication, authorization, data encryption)",
      "Led performance optimization initiatives improving application response times",
      "Implemented automated testing and CI/CD pipelines using Docker",
    ],
  },
  {
    company: "iPhiTech IT and Digital Solutions",
    role: "Full Stack Developer | Mobile Developer",
    dateRange: "Jan 2024 – May 2024",
    tech: ["React", "Laravel", "Dart", "Flutter", "Flutter Flow", "ClickUp", "Git", "TypeScript"],
    bullets: [
      "Developed cross-platform mobile applications using Flutter and Flutter Flow",
      "Created responsive web applications using React.js and Laravel",
      "Managed project timelines and deliverables using ClickUp",
      "Implemented TypeScript for enhanced code reliability and maintainability",
    ],
  },
  {
    company: "Volenday",
    role: "Web Developer | Mobile Developer",
    dateRange: "Oct 2021 – Dec 2023",
    tech: ["React", "Next.js", "Node.js", "Flutter", "Dart", "Agile", "Jira", "Git"],
    bullets: [
      "Spearheaded development of Single Page Applications using React.js and Next.js",
      "Developed cross-platform mobile applications using Flutter",
      "Managed client relationships and requirement gathering",
      "Led code reviews and implemented coding standards",
      "Utilized Agile methodologies and JIRA for project management",
    ],
  },
] as const;

const SKILLS = [
  "Node / Express",
  "PHP / Laravel",
  "NestJS",
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "HTML",
  "CSS",
  "Tailwind",
  "Shadcn",
  "Mantine UI",
  "Material UI",
  "Ant Design",
  "Bootstrap",
  "Livewire / Alpine.js",
  "Git",
  "Google Cloud",
  "Vercel",
  "Render",
  "Railway",
  "Cloudflare Pages",
  "Docker",
  "REST API",
  "Firebase",
  "Supabase",
  "N8N",
  "OpenAI API",
  "ElevenLabs",
  "Google Cloud Functions",
  "Firebase Functions",
  "Firebase Storage",
  "Firebase Auth",
];

const SKILL_ROWS = [
  SKILLS.slice(0, Math.ceil(SKILLS.length / 2)),
  SKILLS.slice(Math.ceil(SKILLS.length / 2)),
] as const;

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-[var(--foreground)]/10 relative"
    >
      <p className="font-bold text-[var(--accent)] tracking-[0.2em] uppercase text-sm mb-4">
        Career
      </p>
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] tracking-tight mb-16">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 -translate-x-1/2 rounded-full opacity-80 hidden md:block"
          style={{
            background: "linear-gradient(180deg, var(--accent), var(--electric))",
          }}
          aria-hidden
        />
        <ul className="space-y-0">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 1;
            const card = (
              <article className="w-full md:max-w-lg pt-0.5">
                <div className="rounded-2xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] hover:border-[var(--foreground)]/20 hover:bg-[var(--foreground)]/[0.04] transition-colors p-6 sm:p-8 group">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[var(--foreground)] tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="font-semibold text-[var(--foreground)]/60 text-sm whitespace-nowrap">
                      {exp.dateRange}
                    </span>
                  </div>
                  <p
                    className="font-semibold text-[var(--accent)] text-sm sm:text-base mb-4"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium border border-[var(--foreground)]/20 text-[var(--foreground)]/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-[var(--foreground)]/85 text-sm sm:text-base leading-relaxed">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--accent)" }}
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
            return (
              <li
                key={exp.company}
                className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-stretch pb-16 last:pb-0"
              >
                <div className="order-2 md:order-1 flex md:justify-end">
                  {isLeft ? card : <div className="hidden md:block" />}
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div
                    className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center shrink-0"
                    style={{
                      borderColor: "var(--accent)",
                      background: "var(--background)",
                      boxShadow: "0 0 0 4px var(--background), 0 0 20px var(--glow)",
                    }}
                  >
                    <span
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="order-3 flex md:justify-start">
                  {!isLeft ? card : <div className="hidden md:block" />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-24 pt-16 border-t border-[var(--foreground)]/10">
        <p className="font-bold text-[var(--electric)] tracking-[0.2em] uppercase text-sm mb-6">
          Skills
        </p>
        <div className="relative rounded-2xl border border-[var(--foreground)]/15 bg-[var(--foreground)]/[0.02] p-4 sm:p-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,194,0.12),transparent_60%)]" />
          <div className="relative space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {SKILL_ROWS.map((row, rowIndex) => (
              <div
                key={`skill-row-${rowIndex}`}
                className="group flex overflow-hidden"
              >
                <div
                  className={`flex min-w-max gap-3 ${rowIndex % 2 === 0 ? "animate-skill-marquee" : "animate-skill-marquee-reverse"
                    } group-hover:[animation-play-state:paused]`}
                >
                  {[...row, ...row].map((skill, skillIndex) => (
                    <span
                      key={`${skill}-${skillIndex}`}
                      className="px-4 py-2 rounded-full font-semibold text-sm border border-[var(--foreground)]/20 text-[var(--foreground)]/90 bg-[var(--background)]/60 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[var(--accent)]/70 hover:text-[var(--accent)] hover:shadow-[0_0_25px_rgba(0,255,194,0.18)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid sm:grid-cols-2 gap-12 sm:gap-16">
        <div>
          <p className="font-bold text-[var(--accent-soft)] tracking-[0.2em] uppercase text-sm mb-4">
            Education
          </p>
          <p className="font-bold text-lg text-[var(--foreground)]">Gordon College – Olongapo City</p>
          <p className="font-semibold text-[var(--accent)]/90 text-sm mt-1">Bachelor&apos;s in Computer Science</p>
        </div>
        <div>
          <p className="font-bold text-[var(--electric)] tracking-[0.2em] uppercase text-sm mb-4">
            Key achievements
          </p>
          <ul className="space-y-2 text-[var(--foreground)]/85 text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--electric)]" aria-hidden />
              Successfully delivered multiple enterprise-level applications using modern tech stacks
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--electric)]" aria-hidden />
              Implemented efficient CI/CD pipelines reducing deployment time by 40%
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--electric)]" aria-hidden />
              Led teams in adopting best practices for code quality and documentation
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--electric)]" aria-hidden />
              Maintained 95% client satisfaction rate through effective project management
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .animate-skill-marquee {
          animation: skill-marquee 30s linear infinite;
        }

        .animate-skill-marquee-reverse {
          animation: skill-marquee-reverse 34s linear infinite;
        }

        @keyframes skill-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes skill-marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
