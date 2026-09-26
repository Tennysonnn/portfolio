export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="section flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base text-ink">Hakhong</p>
          <p className="mt-1 text-sm text-ink-soft">
            Business × Technology × Product
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href="#experience" className="hover:text-ink">Experience</a>
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </div>

        <p className="text-sm text-ink-faint">&copy; {year} Hakhong. Built with Next.js.</p>
      </div>
    </footer>
  );
}
