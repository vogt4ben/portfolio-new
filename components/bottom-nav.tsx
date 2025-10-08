'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function BottomNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Progressive blur backdrop */}
      <div className="inset-x-0 bottom-0 isolate z-[10] h-[100px] fixed">
        <div
          className="absolute inset-0 gradient-mask-b-0 blur-1px"
          style={{ backgroundColor: 'rgba(251, 247, 240, 0.05)' }}
        ></div>
        <div
          className="absolute inset-0 gradient-mask-b-0 blur-2px"
          style={{ backgroundColor: 'rgba(251, 247, 240, 0.05)' }}
        ></div>
        <div
          className="absolute inset-0 gradient-mask-b-0 blur-3px"
          style={{ backgroundColor: 'rgba(251, 247, 240, 0.05)' }}
        ></div>
        <div
          className="absolute inset-0 gradient-mask-b-0 blur-6px"
          style={{ backgroundColor: 'rgba(251, 247, 240, 0.05)' }}
        ></div>
        <div
          className="absolute inset-0 gradient-mask-b-0 blur-12px"
          style={{ backgroundColor: 'rgba(251, 247, 240, 0.05)' }}
        ></div>
      </div>

      {/* Navigation pill */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 drop-shadow-lg">
        <nav className="flex items-center gap-3 px-3 py-2.5 bg-foreground/90 rounded-full backdrop-blur-sm">
          <NavItem
            href="/"
            icon={<Home className="w-5 h-5" />}
            text="Home"
            isActive={pathname === '/'}
            id="home"
          />
          <NavItem
            href="/about"
            icon={<User className="w-5 h-5" />}
            text="About"
            isActive={pathname === '/about'}
            id="about"
          />
          <NavItem
            href="mailto:benjaminvogt23@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            text="Contact"
            id="contact"
          />
        </nav>
      </div>
    </>
  );
}

function NavItem({
  href,
  icon,
  text,
  isActive = false,
  id,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  id: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={href}
      className="flex items-center justify-center p-1.5 px-3 relative rounded-full"
      data-id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover background */}
      <AnimatePresence>
        {!isActive && isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full bg-secondary/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          />
        )}
      </AnimatePresence>

      {/* Active background with animation */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            layoutId="nav-background"
            className="absolute inset-0 bg-primary rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <span
        className={`flex items-center gap-2 z-10 ${
          isActive ? 'text-primary-foreground' : 'text-secondary'
        }`}
      >
        {icon}
        <span className="text-sm font-medium">{text}</span>
      </span>
    </Link>
  );
}
