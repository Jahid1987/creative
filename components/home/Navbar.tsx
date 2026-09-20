"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/teachers", label: "Teachers" },
];

function CccLogo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <span
        aria-hidden="true"
        className="grid h-7 w-7 grid-cols-2 gap-0.5 rounded-md bg-white p-1 shadow-sm"
      >
        <span className="rounded-sm bg-blue-500" />
        <span className="rounded-sm bg-orange-400" />
        <span className="rounded-sm bg-emerald-500" />
        <span className="rounded-sm bg-sky-300" />
      </span>

      <span className="text-lg font-bold tracking-tight text-[#145b86]">
        CCC
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <CccLogo />

        <div className="hidden items-center gap-5 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold text-slate-600 transition-colors hover:text-[#145b86]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-md bg-[#145b86] px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-[#0f4668]"
          >
            Contact Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[#145b86] transition-colors hover:bg-slate-100 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-slate-100 px-2 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-[#145b86]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 rounded-md bg-[#145b86] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0f4668]"
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
