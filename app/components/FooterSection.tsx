export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="py-20 px-6 sm:px-12 lg:px-20 text-center border-t border-[var(--foreground)]/10"
    >
      <p className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mb-6">
        Let&apos;s build something.
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-[var(--foreground)]/90">
        <a
          href="mailto:mrcagonzales@gmail.com"
          className="font-semibold text-[var(--accent)] hover:underline underline-offset-4"
        >
          mrcagonzales@gmail.com
        </a>
        <a
          href="tel:09935205618"
          className="font-semibold hover:text-[var(--accent)] transition-colors"
        >
          +63 993 520 5618
        </a>
        <a
          href="https://www.linkedin.com/in/devbychristian/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-[var(--accent)] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
