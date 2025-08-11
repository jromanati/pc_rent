"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import SocialNetworks from "@/components/rrss"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
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
import { useState, useEffect, useRef, useCallback } from "react"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  const laptops = [
    {
      id: 1,
      name: "Apple MacBook Air M3",
      brand: "Apple",
      image: "/placeholder.svg?height=300&width=400",
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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const slides = [
      {
        id: 1,
        title: "Especialistas en Tecnología Corporativa",
        subtitle: "Más de 5 años transformando empresas",
        description:
          "Somos líderes en arriendo de equipos tecnológicos en Santiago. Ayudamos a empresas a optimizar sus recursos y acceder a la mejor tecnología sin grandes inversiones.",
        image: "/images/home1.png",
        features: ["500+ Empresas Atendidas", "Soporte 24/7", "Entrega Inmediata", "Equipos Certificados"],
        cta: "Conocer Más",
      },
      {
        id: 2,
        title: "Tu Socio Estratégico en Innovación",
        subtitle: "Soluciones integrales para tu empresa",
        description:
          "No solo arrendamos equipos, creamos soluciones. Nuestro equipo de expertos diseña estrategias tecnológicas que impulsan el crecimiento de tu negocio.",
        image: "/images/home2.png",
        features: [
          "Asesoría Personalizada",
          "Configuración Incluida",
          "Mantenimiento Total",
          "Actualización Constante",
        ],
        cta: "Ver Servicios",
      },
      {
        id: 3,
        title: "Arriendo de Notebook",
        subtitle: "Calidad garantizada en cada servicio",
        description:
          "Trabajamos exclusivamente con las mejores marcas del mercado. Cada equipo pasa por rigurosos controles de calidad antes de llegar a tu empresa.",
        image: "/images/home3.png",
        features: ["Marcas Premium", "Control de Calidad", "Garantía Extendida", "Certificaciones ISO"],
        cta: "Ver Catálogo",
      },
      {
        id: 4,
        title: "Innovación que Transforma",
        subtitle: "Tecnología de vanguardia para tu éxito",
        description:
          "Desde startups hasta grandes corporaciones, proporcionamos la tecnología que necesitas para competir en el mercado actual y futuro.",
        image: "/images/home4.png",
        features: ["Última Generación", "Escalabilidad Total", "Flexibilidad Máxima", "ROI Garantizado"],
        cta: "Solicitar Demo",
      },
    ]

    // Auto-advance slides
    useEffect(() => {
      if (!isAutoPlaying) return

      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 10000) // Cambia cada 10 segundos

      return () => clearInterval(timer)
    }, [slides.length, isAutoPlaying])

    const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    const goToSlide = useCallback((index: number) => {
      setCurrentSlide(index)
    }, [])

    // Touch handlers
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
      touchStartX.current = e.targetTouches[0].clientX
      setIsAutoPlaying(false) // Pause auto-play when user interacts
    }, [])

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX
    }, [])

    const handleTouchEnd = useCallback(() => {
      if (!touchStartX.current || !touchEndX.current) return

      const distance = touchStartX.current - touchEndX.current
      const isLeftSwipe = distance > 50
      const isRightSwipe = distance < -50

      if (isLeftSwipe) {
        nextSlide()
      } else if (isRightSwipe) {
        prevSlide()
      }

      // Resume auto-play after 3 seconds
      setTimeout(() => setIsAutoPlaying(true), 3000)
    }, [nextSlide, prevSlide])

    // Mouse handlers for desktop
    const handleMouseEnter = useCallback(() => {
      setIsAutoPlaying(false)
    }, [])

    const handleMouseLeave = useCallback(() => {
      setIsAutoPlaying(true)
    }, [])

    return (
      <section
        className="relative h-[60vh] min-h-[500px] overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 h-full relative z-10">
              <div className="flex items-center h-full">
                <div className="max-w-4xl text-white">
                  {/* Title - Highly responsive */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle - Responsive */}
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-6 md:mb-8 text-blue-200 leading-relaxed">
                    {slide.subtitle}
                  </h2>

                  {/* Description - Responsive with better mobile handling */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-10 leading-relaxed opacity-90 max-w-full md:max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Features Grid - Responsive layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-10">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hidden sm:flex"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hidden sm:flex"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Slide Indicators - Responsive */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar - Responsive */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-white/20 z-20">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Mobile swipe indicators */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 sm:hidden">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-white text-xs">
            <span>Desliza</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
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

      {/* Featured Products Section 
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
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        Más Info
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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
      */}
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
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
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
            <Link href="/nosotros">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Conocer Más Sobre Nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {<Footer />}
      <WhatsAppButton />
    </div>
  )
}
