"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              <span className="font-medium">Cotización Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Respuesta en 24hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Sin Compromiso</span>
            </div>
          </div>
          <Link href="/cotizacion">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Solicitar Cotización Ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
