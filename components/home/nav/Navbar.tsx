"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/courses", label: "কোর্সসমূহ" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex min-h-16 items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-primary sm:text-2xl"
        >
          Creative Care
        </Link>

        <div className="hidden gap-6 text-sm font-medium text-foreground/80 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar className="h-9 w-9 border border-primary">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Profile"
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>আমার প্রোফাইল</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="cursor-pointer">
                      ড্যাশবোর্ড
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings" className="cursor-pointer">
                      সেটিংস
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-600 focus:text-red-600"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    লগআউট
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="px-6 font-semibold"
              >
                লগইন
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon-lg"
            className="md:hidden"
            aria-label={isMobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <div className="container mx-auto flex flex-col gap-1 text-sm font-medium">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="rounded-md px-3 py-3 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <Button
                className="mt-2 w-full font-semibold"
                onClick={() => {
                  setIsLoggedIn(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                লগইন
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
