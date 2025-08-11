"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Laptop,
  Star,
  CheckCircle,
  Phone,
  ArrowLeft,
  Share2,
  Heart,
  Shield,
  Truck,
  Headphones,
  Calculator,
  ChevronRight,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"
import SocialNetworks from "@/components/rrss"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Base de datos de productos (en una app real vendría de una API)
  const allLaptops = [
    {
      id: 1,
      name: "Apple MacBook Air M3",
      brand: "Apple",
      model: "MacBook Air M3 15-inch",
      images: [
        "/images/mac_mr.jpg?height=600&width=800&text=MacBook+Air+M3+Front",
        "/images/mac_mr_2.jpeg?height=600&width=800&text=MacBook+Air+M3+Front",
        "/images/mac_mr_3.jpg?height=600&width=800&text=MacBook+Air+M3+Front",
      ],
      specs: {
        processor: "Apple M3 8-core CPU",
        processorDetails: "4 núcleos de rendimiento y 4 núcleos de eficiencia",
        gpu: "GPU de 10 núcleos",
        ram: "16GB",
        ramType: "Memoria unificada LPDDR5",
        storage: "512GB SSD",
        storageType: "SSD PCIe de alta velocidad",
        screen: "15.3 pulgadas",
        resolution: "2880 x 1864 píxeles a 224 ppp",
        screenType: "Liquid Retina con tecnología True Tone",
        os: "macOS Sonoma",
        connectivity: "2x Thunderbolt / USB 4, MagSafe 3, jack de audio de 3.5 mm",
        wireless: "Wi-Fi 6E, Bluetooth 5.3",
        camera: "Cámara FaceTime HD 1080p",
        audio: "Sistema de sonido de cuatro altavoces con audio espacial",
        keyboard: "Magic Keyboard retroiluminado con Touch ID",
        trackpad: "Force Touch trackpad",
        weight: "1.51 kg",
        dimensions: "34.04 x 23.76 x 1.15 cm",
        battery: "Hasta 18 horas de reproducción de video",
        colors: ["Gris espacial", "Plata", "Azul medianoche", "Luz de las estrellas"],
        warranty: "1 año de garantía limitada de Apple",
      },
      description:
        "El MacBook Air M3 combina potencia excepcional con eficiencia energética en un diseño ultradelgado. Ideal para profesionales que buscan alto rendimiento sin comprometer la portabilidad.",
      longDescription:
        "El nuevo MacBook Air de 15 pulgadas con chip M3 redefine lo que significa ser portátil sin sacrificar el rendimiento. Con su diseño icónico de aluminio reciclado y una pantalla Liquid Retina espectacular, este equipo es perfecto para profesionales creativos, desarrolladores y empresarios que necesitan potencia sobre la marcha. El chip M3 ofrece un rendimiento hasta 60% más rápido que el M1, mientras que la batería de todo el día garantiza productividad sin interrupciones.",
      features: [
        "Chip M3 con CPU de 8 núcleos y GPU de 10 núcleos",
        "Pantalla Liquid Retina de 15.3 pulgadas con True Tone",
        "Hasta 18 horas de batería",
        "Magic Keyboard retroiluminado con Touch ID",
        "Cámara FaceTime HD 1080p",
        "Sistema de sonido de cuatro altavoces con audio espacial",
        "Dos puertos Thunderbolt / USB 4",
        "Carga rápida MagSafe 3",
      ],
      benefits: [
        "Rendimiento excepcional para aplicaciones profesionales",
        "Diseño ultradelgado y ligero para máxima portabilidad",
        "Batería de larga duración para trabajo sin interrupciones",
        "Pantalla de alta resolución ideal para diseño y desarrollo",
        "Ecosistema Apple integrado con iPhone y iPad",
        "Construcción premium con materiales reciclados",
      ],
      idealFor: [
        "Desarrolladores de software",
        "Diseñadores gráficos y creativos",
        "Profesionales de marketing digital",
        "Estudiantes universitarios",
        "Ejecutivos y consultores",
        "Creadores de contenido",
      ],
      included: [
        "MacBook Air M3 15 pulgadas",
        "Adaptador de corriente USB-C de 35W",
        "Cable de carga USB-C a MagSafe 3 (2 m)",
        "Documentación",
      ],
      featured: true,
      category: "Premium",
      availability: "Disponible",
      rating: 4.9,
      reviews: 127,
      inStock: true,
      deliveryTime: "24-48 horas",
    },
    // Agregar más productos aquí...
  ]

  const product = allLaptops.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/catalogo">
            <Button>Volver al Catálogo</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const relatedProducts = allLaptops
    .filter((p) => p.id !== productId && (p.brand === product.brand || p.category === product.category))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {<Header />}
      

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/catalogo" className="hover:text-blue-600">
              Catálogo
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/catalogo">
            <Button variant="outline" className="bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Catálogo
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {product.brand}
                </Badge>
                <Badge variant="secondary">{product.category}</Badge>
                {product.inStock && <Badge className="bg-green-100 text-green-800">En Stock</Badge>}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-5 md:w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-2xl p-4 md:p-6 border border-blue-100">
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Incluye soporte técnico 24/7</p>
                <p>• Entrega e instalación gratuita</p>
                <p>• Equipos de reemplazo inmediato</p>
                <p>• Sin compromiso de permanencia</p>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Cpu className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm text-gray-600">Procesador</div>
                  <div className="font-medium text-sm md:text-base truncate">{product.specs.processor}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm text-gray-600">Memoria RAM</div>
                  <div className="font-medium text-sm md:text-base">{product.specs.ram}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <HardDrive className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm text-gray-600">Almacenamiento</div>
                  <div className="font-medium text-sm md:text-base">{product.specs.storage}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Monitor className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm text-gray-600">Pantalla</div>
                  <div className="font-medium text-sm md:text-base">{product.specs.screen}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/cotizacion?product=${product.id}`} className="flex-1">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calculator className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Solicitar Cotización
                  </Button>
                </Link>
                {/* <div className="flex gap-2">
                  <Button size="lg" variant="outline" className="bg-transparent flex-1 sm:flex-none">
                    <Heart className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sm:hidden ml-2">Favorito</span>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent flex-1 sm:flex-none">
                    <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sm:hidden ml-2">Compartir</span>
                  </Button>
                </div> */}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>Entrega en {product.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Garantía incluida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="mb-8 lg:mb-12">
          <Tabs defaultValue="specs" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
                <TabsTrigger value="specs" className="text-xs sm:text-sm p-2 sm:p-3">
                  Especificaciones
                </TabsTrigger>
                <TabsTrigger value="features" className="text-xs sm:text-sm p-2 sm:p-3">
                  Características
                </TabsTrigger>
                <TabsTrigger value="benefits" className="text-xs sm:text-sm p-2 sm:p-3">
                  Beneficios
                </TabsTrigger>
                <TabsTrigger value="ideal" className="text-xs sm:text-sm p-2 sm:p-3">
                  Ideal Para
                </TabsTrigger>
                <TabsTrigger value="included" className="text-xs sm:text-sm p-2 sm:p-3">
                  Incluye
                </TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="specs" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Performance Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Rendimiento</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Procesador</span>
                            <p className="font-semibold text-gray-900">{product.specs.processor}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Detalles CPU</span>
                            <p className="font-semibold text-gray-900 text-sm">{product.specs.processorDetails}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">GPU</span>
                            <p className="font-semibold text-gray-900">{product.specs.gpu}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-orange-600" />
                            <span className="text-sm font-medium text-gray-600">RAM</span>
                          </div>
                          <p className="font-bold text-lg text-gray-900">{product.specs.ram}</p>
                          <p className="text-xs text-gray-500">{product.specs.ramType}</p>
                        </div>

                        <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-2">
                            <HardDrive className="h-4 w-4 text-indigo-600" />
                            <span className="text-sm font-medium text-gray-600">Almacenamiento</span>
                          </div>
                          <p className="font-bold text-lg text-gray-900">{product.specs.storage}</p>
                          <p className="text-xs text-gray-500">{product.specs.storageType}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Display & Design Section */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                        <Monitor className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Pantalla y Diseño</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Monitor className="h-4 w-4 text-emerald-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Pantalla</span>
                            <p className="font-semibold text-gray-900">{product.specs.screen}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Resolución:</span>
                            <span className="font-medium text-gray-900">{product.specs.resolution}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tecnología:</span>
                            <span className="font-medium text-gray-900">{product.specs.screenType}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-600">Peso</span>
                          </div>
                          <p className="font-bold text-lg text-gray-900">{product.specs.weight}</p>
                        </div>

                        <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-600">Dimensiones</span>
                          </div>
                          <p className="font-semibold text-sm text-gray-900">{product.specs.dimensions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connectivity & Battery Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Conectividad</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                            <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M15 7v4c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1zm4-2H5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 16H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V6h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V6h8v2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-600">Puertos</span>
                            <p className="font-semibold text-gray-900 text-sm leading-relaxed">
                              {product.specs.connectivity}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Inalámbrico</span>
                            <p className="font-semibold text-gray-900">{product.specs.wireless}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <span className="text-xs font-medium text-gray-600">Cámara</span>
                          </div>
                          <p className="font-semibold text-sm text-gray-900">{product.specs.camera}</p>
                        </div>

                        <div className="p-3 bg-white/70 rounded-xl border border-white/50">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                            <span className="text-xs font-medium text-gray-600">Audio</span>
                          </div>
                          <p className="font-semibold text-xs text-gray-900 leading-tight">{product.specs.audio}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.67 4H14V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.33C8.6 4 8 4.6 8 5.33v15.33C8 21.4 8.6 22 9.33 22h6.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Batería y Sistema</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M15.67 4H14V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.33C8.6 4 8 4.6 8 5.33v15.33C8 21.4 8.6 22 9.33 22h6.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 19c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm2.33-2H8.67V6h6.67v11z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Duración de Batería</span>
                            <p className="font-bold text-lg text-gray-900">{product.specs.battery}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Sistema Operativo</span>
                            <p className="font-semibold text-gray-900">{product.specs.os}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/70 rounded-xl border border-white/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v16.5c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V4H1V2h3.5c.83 0 1.5.67 1.5 1.5S5.33 5 4.5 5H4v13.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5V5h-.5c-.83 0-1.5-.67-1.5-1.5S14.67 2 15.5 2H19v2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">Garantía</span>
                            <p className="font-semibold text-gray-900">{product.specs.warranty}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Features 
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Características Adicionales</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Teclado</span>
                          <p className="font-semibold text-sm text-gray-900">{product.specs.keyboard}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Trackpad</span>
                          <p className="font-semibold text-sm text-gray-900">{product.specs.trackpad}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Colores Disponibles</span>
                          <div className="flex gap-1 mt-1">
                            {product.specs.colors?.slice(0, 3).map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"
                                title={color}
                              ></div>
                            ))}
                            {product.specs.colors?.length > 3 && (
                              <span className="text-xs text-gray-500 ml-1">+{product.specs.colors.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ideal" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {product.idealFor.map((user, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Laptop className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-700 text-sm md:text-base">{user}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-8 lg:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {relatedProduct.brand}
                      </Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                    <CardDescription className="text-sm md:text-base">{relatedProduct.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg md:text-xl font-bold text-blue-600">
                        {formatPrice(relatedProduct.pricePerMonth)}/mes
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">{relatedProduct.availability}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href={`/catalogo/${relatedProduct.id}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent text-sm">
                          Ver Detalles
                        </Button>
                      </Link>
                      <Link href={`/cotizacion?product=${relatedProduct.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-4">Cotizar</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">¿Listo para arrendar este equipo?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Obtén una cotización personalizada para el {product.name} y descubre cómo puede impulsar tu productividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/cotizacion?product=${product.id}`}>
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
                  <Calculator className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Footer */}
      {<Footer />}
      {<WhatsAppButton />}
    </div>
  )
}
