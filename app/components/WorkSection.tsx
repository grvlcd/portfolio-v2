import Image from "next/image";

const PROJECTS = [
  {
    title: "Protocols (Forum Application)",
    tag: "Web",
    link: "https://protocols-sandy.vercel.app/",
    color: "var(--accent)",
    imagePath: "/assets/protocols.png",
    stack: "Nextjs, Typescript, HTML, CSS, Tailwind, Shadcn, Laravel & API",
  },
  {
    title: "Zopop Virtual Hiring",
    tag: "Web",
    link: "https://www.zopop.com/",
    color: "var(--electric)",
    imagePath: "/assets/zopop.png",
    stack: "Nextjs, Typescript, Supabase, HTML, CSS, Tailwind, Shadcn",
  },
  {
    title: "MagphAI",
    tag: "Web",
    link: "https://magphai.tech/",
    color: "var(--electric)",
    imagePath: "/assets/magphai.png",
    stack: "Nextjs, Typescript, Supabase, HTML, CSS, Tailwind, Shadcn, N8N",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-24 px-6 sm:px-12 lg:px-20 border-t border-[var(--foreground)]/10"
    >
      <p className="font-bold text-[var(--accent)] tracking-[0.2em] uppercase text-sm mb-6">
        Selected work
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-colors"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block absolute inset-0">
              {item.imagePath ? (
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : null}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, ${item.color}15 100%)`,
                }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: item.color }}
                >
                  {item.tag}
                </span>
                <h2 className="font-bold text-xl sm:text-2xl text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[var(--foreground)]/85">
                  {item.stack}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
