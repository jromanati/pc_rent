"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import {
  Phone,
  Mail,
} from "lucide-react"


export default function Header() {
  
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-h-[160px] ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/"> 
                <Image
                  src="/images/logo-complete.png"
                  alt="Soluciones PC Rent"
                  width={250}
                  height={80}
                  className="h-44 w-auto"
                />
              </Link>
            </div>
            {/* Navigation */}
            {/* <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Inicio", href: "/" },
                { name: "Soluciones", href: "#soluciones" },
                { name: "Metodología", href: "#metodologia" },
                { name: "Casos", href: "#casos" },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 hover:text-blue-600 text-lg transition-all duration-300 group"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      const headerHeight = 80 // Altura aproximada del header
                      const elementPosition = (element as HTMLElement).offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Link href="/cotizacion" className="hidden md:block">
                <Button className="bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
              </Link>
            </nav> */}

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="relative text-gray-600 hover:text-blue-600 text-lg transition-all duration-300 group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/catalogo" className="relative text-gray-600 hover:text-blue-600 text-lg transition-all duration-300 group">
                Catálogo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/nosotros" className="relative text-gray-600 hover:text-blue-600 text-lg transition-all duration-300 group">
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/cotizacion" className="hidden md:block">
                <Button className="bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
  )
}
