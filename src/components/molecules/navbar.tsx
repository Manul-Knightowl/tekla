"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/interior-design", label: "Interior Design" },
    { href: "/furniture", label: "Furniture" },
    { href: "/packages", label: "Packages" },
    { href: "/blog", label: "Blog" },
    { href: "/our-team", label: "Our Team" },
  ]

  return (
    <nav className="bg-black border-white border-[0.1px] rounded-[40px] relative mx-auto max-w-[95%] lg:max-w-[90%] xl:max-w-[80%] mt-10">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    }`}
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Contact Us button */}
          <div className="flex items-center">
            <Button className="rounded-full bg-white text-black hover:bg-gray-200 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
