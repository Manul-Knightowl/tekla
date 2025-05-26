import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const socialIcons = [
    { name: "Facebook", src: "/social/facebook.png", href: "#" },
    { name: "Instagram", src: "/social/instagram.png", href: "#" },
    { name: "X", src: "/social/x.png", href: "#" },
    { name: "LinkedIn", src: "/social/linkedin.png", href: "#" },
    { name: "YouTube", src: "/social/youtube.png", href: "#" },
  ]

  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto py-8">
        {/* Social Media Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <p className="text-center mb-4"
          style={{ fontFamily: "Montserrat" }}>Follow Us on</p>
          <div className="flex space-x-4">
            {socialIcons.map((icon) => (
              <Link key={icon.name} href={icon.href} className="hover:opacity-80 transition-opacity">
                <div className="w-6 h-6 relative">
                  <Image
                    src={icon.src || "/placeholder.svg"}
                    alt={icon.name}
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="sr-only">{icon.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Divider */}
      <div className="border-t-4 border-white w-full"></div>

      <div className="container mx-auto py-6">
        {/* Copyright and Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 mb-6">
          <div className="mb-4 md:mb-0 text-sm"
          style={{ fontFamily: "Roboto" }}>© {new Date().getFullYear()} Tekla. All rights reserved.</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm">
            <Link href="/privacy-policy" className="hover:underline"
            style={{ fontFamily: "Roboto" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline"
            style={{ fontFamily: "Roboto" }}>
              Terms of Service
            </Link>
            <Link href="/cookies-settings" className="hover:underline"
            style={{ fontFamily: "Roboto" }}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
