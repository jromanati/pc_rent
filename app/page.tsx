"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Laptop,
  Clock,
  Shield,
  Headphones,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const laptops = [
    {
      id: 1,
      name: "Apple MacBook Air M3",
      brand: "Apple",
      image: "/images/mac_mr.jpg?height=300&width=400",
      specs: {
        screen: "15.3 pulgadas",
        processor: "8 núcleos (4 rendimiento + 4 eficiencia)",
        ram: "16GB",
        storage: "512GB SSD",
        resolution: "2880 x 1864 a 224 ppp",
        os: "macOS",
        connectivity: "MagSafe, 2x Thunderbolt, Audio",
      },
      description: "Equipo potente y eficiente, ideal para profesionales que buscan alto rendimiento y portabilidad.",
      featured: true,
    },
    {
      id: 2,
      name: "Acer Aspire Lite Ryzen 7",
      brand: "Acer",
      image: "/placeholder.svg?height=300&width=400",
      specs: {
        model: "AL15-41P-R0ZY-1",
        processor: "AMD Ryzen 7 5700U",
        ram: "32GB",
        storage: "512GB SSD",
        resolution: "Full HD (1920 x 1080)",
        graphics: "AMD Radeon Graphics",
        os: "Windows 11",
        weight: "1.7 kg (25% más ligero)",
      },
      description: "Equilibrio perfecto entre rendimiento y movilidad, diseñado para máxima portabilidad.",
    },
    {
      id: 3,
      name: "HP Pavilion 15-Eg0522La",
      brand: "HP",
      image: "/placeholder.svg?height=300&width=400",
      specs: {
        processor: "Intel Core i7-1165G7 (hasta 4.7 GHz)",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "15.6 pulgadas",
        os: "Windows 11",
        boost: "Intel Turbo Boost",
      },
      description: "Equipo versátil y potente, perfecto para diversas tareas corporativas.",
    },
    {
      id: 4,
      name: "Lenovo Intel Core i5",
      brand: "Lenovo",
      image: "/placeholder.svg?height=300&width=400",
      specs: {
        processor: "Intel Core i5-1035G1",
        ram: "8GB DDR4",
        storage: "512GB SSD",
        screen: "14 pulgadas",
        graphics: "UHD G1 Integrada",
        os: "Windows 10 Pro",
      },
      description: "Portátil fiable y eficiente, ideal para el trabajo diario y necesidades empresariales.",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Incremento de Productividad",
      description: "Garantizamos equipos 100% operativos durante toda la vigencia del contrato.",
    },
    {
      icon: Users,
      title: "Liberación de Recursos TI",
      description: "Su personal TI se enfoca en actividades estratégicas mientras nosotros gestionamos los equipos.",
    },
    {
      icon: DollarSign,
      title: "Optimización de Costos",
      description: "Convertimos costos variables en fijos y predecibles, mejorando su estructura financiera.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Entrega Inmediata",
      description: "Servicio excepcional con entrega inmediata de equipos.",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Asistencia remota y asesoría permanente durante todo el periodo de alquiler.",
    },
    {
      icon: Laptop,
      title: "Última Tecnología",
      description: "Acceso a los modelos más avanzados de equipos corporativos.",
    },
    {
      icon: Shield,
      title: "Equipos de Reemplazo",
      description: "Reemplazo inmediato en caso de fallas para garantizar continuidad operativa.",
    },
  ]

  function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
      {
        id: 1,
        title: "Tecnología de Vanguardia",
        subtitle: "Apple MacBook Air M3",
        description:
          "Potencia y eficiencia en un diseño ultradelgado. Ideal para profesionales que no comprometen el rendimiento.",
        image: "/images/mac_mr.jpg?height=600&width=800&text=MacBook+Air+M3",
        specs: ["Chip M3 de 8 núcleos", "16GB RAM", "512GB SSD", 'Pantalla 15.3"'],
        cta: "Solicitar MacBook",
        bgGradient: "from-slate-900 via-purple-900 to-slate-900",
        featured: true,
      },
      {
        id: 2,
        title: "Máximo Rendimiento",
        subtitle: "Acer Aspire Lite Ryzen 7",
        description:
          "32GB de RAM y procesador AMD Ryzen 7. La potencia que su empresa necesita para cualquier desafío.",
        image: "/placeholder.svg?height=600&width=800&text=Acer+Aspire+Lite",
        specs: ["AMD Ryzen 7 5700U", "32GB RAM", "512GB SSD", "Solo 1.7kg"],
        cta: "Ver Acer Aspire",
        bgGradient: "from-blue-900 via-blue-800 to-indigo-900",
      },
      {
        id: 3,
        title: "Versatilidad Empresarial",
        subtitle: "HP Pavilion 15",
        description: "Intel Core i7 con Turbo Boost. Perfecto para equipos que demandan versatilidad y potencia.",
        image: "/placeholder.svg?height=600&width=800&text=HP+Pavilion+15",
        specs: ["Intel i7-1165G7", "16GB RAM", "512GB SSD", "Turbo Boost 4.7GHz"],
        cta: "Cotizar HP",
        bgGradient: "from-emerald-900 via-teal-800 to-cyan-900",
      },
      {
        id: 4,
        title: "Soluciones Integrales",
        subtitle: "Arriendo + Soporte 24/7",
        description:
          "No solo equipos. Ofrecemos una solución completa con soporte técnico, reemplazo inmediato y asesoría profesional.",
        image: "/placeholder.svg?height=600&width=800&text=Soporte+24/7+Técnico",
        specs: ["Soporte 24/7", "Reemplazo inmediato", "Asesoría incluida", "Entrega en 24hrs"],
        cta: "Conocer Servicios",
        bgGradient: "from-orange-900 via-red-800 to-pink-900",
        isService: true,
      },
    ]

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.bgGradient} relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-20">
                  <div className="text-white z-10 relative">
                    {slide.featured && (
                      <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-500 animate-pulse">
                        ⭐ Más Solicitado
                      </Badge>
                    )}
                    {slide.isService && (
                      <Badge className="mb-4 bg-green-500 text-white hover:bg-green-500">🛠️ Servicio Integral</Badge>
                    )}

                    <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">{slide.title}</h1>
                    <h2 className="text-2xl lg:text-3xl font-light mb-6 text-blue-200">{slide.subtitle}</h2>
                    <p className="text-xl mb-8 leading-relaxed opacity-90 max-w-lg">{slide.description}</p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {slide.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-sm font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/cotizacion?product=${slide.id || 1}`}>
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                          {slide.cta}
                        </Button>
                      </Link>
                      <Link href="/catalogo">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                        >
                          Más Información
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="relative">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.subtitle}
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                      />
                      {/* Floating Stats */}
                      <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Laptop className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Disponible Ya</p>
                            <p className="text-sm text-gray-600">Entrega en 24hrs</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Garantía Total</p>
                            <p className="text-sm text-gray-600">Soporte 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {<Header />}

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Why Choose Us */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegir Soluciones PC Rent?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra propuesta de valor se centra en la excelencia y el compromiso con nuestros clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="catalogo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Productos Destacados 🚀</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros equipos más solicitados. Tecnología de vanguardia para impulsar su empresa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {laptops.slice(0, 3).map((laptop) => (
              <Card key={laptop.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                {laptop.featured && (
                  <div className="bg-blue-600 text-white text-center py-2">
                    <Badge className="bg-white text-blue-600">⭐ Más Solicitado</Badge>
                  </div>
                )}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={laptop.image || "/placeholder.svg"}
                    alt={laptop.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {laptop.brand}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{laptop.name}</CardTitle>
                  <CardDescription className="text-base">{laptop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(laptop.specs)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">
                            {key === "ram"
                              ? "RAM"
                              : key === "storage"
                                ? "Almacenamiento"
                                : key === "processor"
                                  ? "Procesador"
                                  : key === "screen"
                                    ? "Pantalla"
                                    : key}
                            :
                          </span>
                          <span className="font-medium text-right max-w-[60%]">{value}</span>
                        </div>
                      ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-2">
                    <Link href={`/cotizacion?product=${laptop.id}`}>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
                    </Link>
                    <Link href={`/catalogo/${laptop.id}`}>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                        Más Info
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA to full catalog */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ver más opciones?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Explora nuestro catálogo completo con más de 15 modelos diferentes. Encuentra el equipo perfecto para tu
                empresa.
              </p>
              <Link href="/catalogo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Ver Catálogo Completo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Beneficios de Arrendar con Nosotros</h2>
              <p className="text-xl text-gray-600 mb-8">
                Al asociarse con Soluciones PC Rent, su empresa experimentará mejoras significativas tanto operacionales
                como financieras.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-blue-50 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">📈</div>
                <h3 className="font-semibold text-gray-900 mb-2">Beneficios Operacionales</h3>
                <p className="text-sm text-gray-600">Incremento de productividad y liberación de recursos TI</p>
              </Card>
              <Card className="p-6 text-center bg-green-50 border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Beneficios Financieros</h3>
                <p className="text-sm text-gray-600">Costos fijos predecibles y mejor estructura financiera</p>
              </Card>
              <Card className="p-6 text-center bg-purple-50 border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">🔧</div>
                <h3 className="font-semibold text-gray-900 mb-2">Soporte Técnico</h3>
                <p className="text-sm text-gray-600">Asistencia en terreno y mantenimiento incluido</p>
              </Card>
              <Card className="p-6 text-center bg-orange-50 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Continuidad</h3>
                <p className="text-sm text-gray-600">Equipos de reemplazo inmediato garantizado</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para Optimizar sus Recursos Tecnológicos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contáctenos hoy mismo y descubra cómo podemos ayudar a su empresa a acceder a la mejor tecnología sin
            grandes inversiones iniciales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Cotización Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {<Footer />}
    </div>
  )
}
