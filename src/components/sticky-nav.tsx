"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

type SocialLink = {
  label: string;
  href: string;
};

type StickyNavProps = {
  socialLinks: SocialLink[];
  resumeHref: string;
};

const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "profiles", label: "Profiles" },
  { id: "contact", label: "Contact" },
];

export default function StickyNav({ socialLinks, resumeHref }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState<string>("projects");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0.01,
    }),
    []
  );

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target?.id) {
        setActiveSection(visible[0].target.id);
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <header className="sticky top-3 z-20 rounded-2xl border border-[#d6deea] bg-[#f8fbff]/90 p-3 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <a href="#" className="text-sm font-black uppercase tracking-[0.16em] text-[#16305a]">
          Damodar Yadav
        </a>

        <button
          type="button"
          className="menu-btn md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-nav"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#31598d] md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a key={link.id} href={`#${link.id}`} className={`nav-link ${isActive ? "is-active" : ""}`}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={resumeHref} target="_blank" rel="noreferrer" className="action-btn primary !py-1.5 !px-3 !text-xs">
            Resume
          </a>
          <ThemeToggle />
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="chip !py-1 !text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-site-nav" className="mt-3 border-t border-[#d6deea] pt-3 md:hidden">
          <nav className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#31598d]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link ${isActive ? "is-active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-3 flex flex-wrap gap-2">
            <a href={resumeHref} target="_blank" rel="noreferrer" className="action-btn primary !py-1.5 !px-3 !text-xs">
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="chip !py-1 !text-[11px]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
