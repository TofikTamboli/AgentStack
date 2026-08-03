"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { SpecularButton } from "@/components/ui/SpecularButton";
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
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  // Sync active item with route and window hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentHash = window.location.hash;
      const fullPath = currentHash ? `${pathname}${currentHash}` : pathname;
      const matched = NAV_ITEMS.find(
        (item) =>
          item.href === fullPath ||
          (pathname !== "/" && item.href.startsWith(pathname))
      );
      if (matched) {
        setActiveHref(matched.href);
      } else if (pathname === "/") {
        setActiveHref(currentHash ? `/${currentHash}` : "/");
      }
    }
  }, [pathname]);

  // Premium Scroll Direction Detection (15px threshold, RAF throttled, passive listener)
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return;

      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const currentY = window.scrollY;

        // Top of page: always show
        if (currentY < 20) {
          setNavVisible(true);
          setScrolled(false);
          lastScrollY.current = currentY;
          return;
        }

        setScrolled(true);

        const delta = currentY - lastScrollY.current;
        // Ignore tiny micro scroll movements (<15px)
        if (Math.abs(delta) >= 15) {
          if (delta > 0 && !mobileMenuOpen) {
            // Scrolling down -> hide navbar
            setNavVisible(false);
          } else {
            // Scrolling up -> show navbar
            setNavVisible(true);
          }
          lastScrollY.current = currentY;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: navVisible || mobileMenuOpen ? 0 : -20,
          opacity: navVisible || mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 md:px-6",
          navVisible || mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Floating Light Gray Navigation Card (#E6E6E6, rounded-[18px]) */}
        <nav
          aria-label="Main Navigation"
          className={cn(
            "flex items-center justify-between w-full max-w-[1320px] h-[70px] rounded-[18px] transition-all duration-300 ease-in-out",
            "bg-[#E6E6E6]/95 backdrop-blur-md border border-[rgba(0,0,0,0.08)] shadow-[0_10px_32px_rgba(0,0,0,0.06)]",
            "px-6 md:px-7",
            scrolled &&
              "shadow-[0_14px_40px_rgba(0,0,0,0.09)] border-[rgba(0,0,0,0.1)] bg-[#E6E6E6]"
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

          {/* Desktop Nav Items */}
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

          {/* SpecularButton CTA in Navbar */}
          <div className="hidden lg:flex items-center">
            <Link href="/#contact" onClick={() => handleNavClick("/#contact")}>
              <SpecularButton
                size="md"
                radius={12}
                tint="#00020F"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#8EA8FF"
                baseColor="#475569"
                intensity={2.5}
                shineSize={12}
                shineFade={20}
                thickness={1.5}
                speed={0.35}
                followMouse
                autoAnimate
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </SpecularButton>
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
                  className="block w-full"
                >
                  <SpecularButton
                    size="lg"
                    radius={12}
                    tint="#00020F"
                    tintOpacity={1}
                    textColor="#ffffff"
                    lineColor="#8EA8FF"
                    baseColor="#475569"
                    intensity={2.5}
                    shineSize={12}
                    shineFade={20}
                    thickness={1.5}
                    speed={0.35}
                    followMouse
                    autoAnimate
                    className="w-full"
                  >
                    <span>Book a Discovery Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </SpecularButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
