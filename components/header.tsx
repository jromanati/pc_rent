"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function Header() {
  
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/"> 
              <Image
                src="/images/logo-complete.png"
                alt="Soluciones PC Rent"
                width={250}
                height={80}
                className="h-32 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link href="/catalogo" className="text-gray-600 hover:text-blue-600 transition-colors">
              Catálogo
            </Link>
            <Link href="/cotizacion" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cotización
            </Link>
            <Link href="/nosotros" className="text-gray-600 hover:text-blue-600 transition-colors">
              Nosotros
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/cotizacion" className="hidden md:block">
              <Button className="bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
