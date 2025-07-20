"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/cotizacion", label: "Cotización" },
    { href: "/#beneficios", label: "Beneficios" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pb-4 border-b">
            <Image
              src="/images/logo-complete.png"
              alt="Soluciones PC Rent"
              width={200}
              height={60}
              className="h-8 w-auto"
            />
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <Link href="/cotizacion" onClick={() => setOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
            </Link>
            <Link href="tel:+56912345678" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full bg-transparent">
                Llamar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
