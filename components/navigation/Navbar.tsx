"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "AI Solutions", href: "/#ai-solutions" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  // Sync active item with route and window hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash;
      const fullPath = currentHash ? `${pathname}${currentHash}` : pathname;
      const matched = NAV_ITEMS.find((item) => item.href === fullPath || (pathname !== "/" && item.href.startsWith(pathname)));
      if (matched) {
        setActiveHref(matched.href);
      } else if (pathname === "/") {
        setActiveHref(currentHash ? `/${currentHash}` : "/");
      }
    }
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 md:px-6 pointer-events-none"
      >
        {/* Floating Light Gray Navigation Card (#E6E6E6, rounded-[18px]) */}
        <nav
          aria-label="Main Navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-[1320px] h-[70px] rounded-[18px] transition-all duration-300 ease-in-out",
            "bg-[#E6E6E6]/95 backdrop-blur-md border border-[rgba(0,0,0,0.08)] shadow-[0_10px_32px_rgba(0,0,0,0.06)]",
            "px-6 md:px-7",
            scrolled && "shadow-[0_14px_40px_rgba(0,0,0,0.09)] border-[rgba(0,0,0,0.1)] bg-[#E6E6E6]"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="group flex items-center gap-2.5 text-[#0F0F11] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-black/5 border border-black/10 group-hover:border-black/20 transition-colors">
              <Sparkles className="w-4 h-4 text-[#0F0F11]" />
            </div>
            <span className="font-sans font-semibold text-lg tracking-[-0.02em] leading-tight">
              AgentStack
            </span>
          </Link>

          {/* Desktop Nav Items (Single Animated Active Indicator layoutId="active-nav") */}
          <ul className="hidden xl:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative block px-3.5 py-2 text-[16px] font-medium tracking-[-0.02em] leading-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
                      isActive
                        ? "text-[#000000]"
                        : "text-[#52525B] hover:text-[#000000]"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Single Shared Animated Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 z-0 rounded-[10px] bg-[#FFFFFF] border border-[rgba(0,0,0,0.05)] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                        transition={{
                          type: "tween",
                          ease: "easeInOut",
                          duration: 0.28,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className={cn(
                "group inline-flex items-center justify-center gap-2 h-[46px] px-[28px] rounded-xl text-[16px] font-semibold tracking-[-0.02em] leading-none transition-all duration-250",
                "bg-[#0F0F11] text-white hover:bg-black",
                "shadow-[0_4px_14px_rgba(0,0,0,0.09)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#0F0F11] hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#E6E6E6]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8"
          >
            <nav className="flex flex-col justify-between h-full max-w-md mx-auto w-full">
              <ul className="flex flex-col gap-2.5">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeHref === item.href;

                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block text-xl font-medium tracking-[-0.02em] transition-all py-2.5 px-4 rounded-[10px]",
                          isActive
                            ? "bg-[#FFFFFF] text-[#000000] border border-[rgba(0,0,0,0.05)] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                            : "text-[#52525B] hover:text-[#000000]"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-6"
              >
                <Link
                  href="/#contact"
                  onClick={() => handleNavClick("/#contact")}
                  className="flex items-center justify-center gap-2 w-full h-[46px] rounded-xl bg-[#0F0F11] text-white text-[16px] font-semibold tracking-[-0.02em] shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
