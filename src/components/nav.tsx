'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { LucideHome, LucideInfo, LucideLayoutDashboard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavUser } from './nav-user'
import Logo from './logo'

const navItems = [
  { name: 'Home', link: '/', icon: <LucideHome className="size-5" /> },
  { name: 'Dashboard', link: '/dashboard', icon: <LucideLayoutDashboard className="size-5" /> },
  { name: 'About', link: '/about', icon: <LucideInfo className="size-5" /> },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }
  })

  return (
    <>
      <nav className="container flex items-center justify-between py-4">
        <Logo />

        <NavUser
          user={{
            name: 'shadcn',
            email: 'm@example.com',
            avatar: '/avatars/shadcn.jpg',
          }}
        />
      </nav>

      <AnimatePresence mode="wait">
        {/* float nav */}
        <motion.div
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          className={cn(
            'fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-4 rounded-full border bg-background/60 px-6 py-2 shadow-lg backdrop-blur',
          )}
          initial={{
            opacity: 1,
            y: -100,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Logo />

          {navItems.map((navItem) => (
            <Link
              key={navItem.link}
              className={cn('relative flex items-center space-x-1 text-muted-foreground hover:text-foreground')}
              href={navItem.link}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </Link>
          ))}

          <NavUser
            user={{
              name: 'shadcn',
              email: 'm@example.com',
              avatar: '/avatars/shadcn.jpg',
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
