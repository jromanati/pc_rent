"use client"

import { MapPin, Mail, Phone, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo-icon.png" alt="Soluciones PC Rent" width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-bold mb-4">Soluciones PC Rent</h3>
            <p className="text-gray-400 mb-4">
              Especialistas en arriendo de equipos tecnológicos de última generación en Santiago de Chile.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Arriendo de Laptops</li>
              <li>Soporte Técnico 24/7</li>
              <li>Asesoría Profesional</li>
              <li>Equipos de Reemplazo</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Marcas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Apple MacBook</li>
              <li>Acer Aspire</li>
              <li>HP Pavilion</li>
              <li>Lenovo ThinkPad</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Santiago de Chile</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@solucionespcrent.cl</span>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Soluciones PC Rent. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
