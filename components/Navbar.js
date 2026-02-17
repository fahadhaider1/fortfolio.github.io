"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, FolderGit2, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 relative z-20" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FolderGit2 className="h-4 w-4 relative z-20" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4 relative z-20" />,
    },
  ];

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50 px-4">
      <nav className="relative flex flex-row items-center justify-center gap-4 p-2 bg-white/5 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full shadow-lg">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300 px-4 py-2 rounded-full transition-colors duration-200"
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-neutral-200 dark:bg-neutral-800/50"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            
            {/* Active State Indicator */}
            {pathname === navItem.link && (
               <motion.span
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
               />
            )}

            <span className="relative z-20 flex items-center gap-2">
              {navItem.icon}
              <span className="text-sm font-medium hidden sm:block">{navItem.name}</span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
