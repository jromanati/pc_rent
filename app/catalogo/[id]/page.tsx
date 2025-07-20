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
import { MobileNav } from "@/components/mobile-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
      pricePerMonth: 45000,
      originalPrice: 1899000,
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
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/catalogo">
            <Button variant="outline" className="bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Catálogo
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.featured && <Badge className="absolute top-4 left-4 bg-blue-600 text-white">⭐ Destacado</Badge>}
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
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {product.brand}
                </Badge>
                <Badge variant="secondary">{product.category}</Badge>
                {product.inStock && <Badge className="bg-green-100 text-green-800">En Stock</Badge>}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">{formatPrice(product.pricePerMonth)}</div>
                  <div className="text-sm text-gray-600">por mes</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</div>
                  <div className="text-sm text-green-600 font-medium">Precio de compra</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Incluye soporte técnico 24/7</p>
                <p>• Entrega e instalación gratuita</p>
                <p>• Equipos de reemplazo inmediato</p>
                <p>• Sin compromiso de permanencia</p>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Cpu className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Procesador</div>
                  <div className="font-medium">{product.specs.processor}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Zap className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Memoria RAM</div>
                  <div className="font-medium">{product.specs.ram}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <HardDrive className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Almacenamiento</div>
                  <div className="font-medium">{product.specs.storage}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Monitor className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Pantalla</div>
                  <div className="font-medium">{product.specs.screen}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Link href={`/cotizacion?product=${product.id}`} className="flex-1">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calculator className="h-5 w-5 mr-2" />
                    Solicitar Cotización
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
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
        <Card className="mb-12">
          <Tabs defaultValue="specs" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="specs">Especificaciones</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="benefits">Beneficios</TabsTrigger>
                <TabsTrigger value="ideal">Ideal Para</TabsTrigger>
                <TabsTrigger value="included">Incluye</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="specs" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Rendimiento</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Procesador:</span>
                        <span className="font-medium">{product.specs.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Detalles CPU:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.processorDetails}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GPU:</span>
                        <span className="font-medium">{product.specs.gpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Memoria RAM:</span>
                        <span className="font-medium">{product.specs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tipo de RAM:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.ramType}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Almacenamiento y Pantalla</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Almacenamiento:</span>
                        <span className="font-medium">{product.specs.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tipo de SSD:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.storageType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pantalla:</span>
                        <span className="font-medium">{product.specs.screen}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resolución:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.resolution}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tipo de pantalla:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.screenType}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Conectividad</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puertos:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.connectivity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inalámbrico:</span>
                        <span className="font-medium">{product.specs.wireless}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cámara:</span>
                        <span className="font-medium">{product.specs.camera}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Audio:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.audio}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Diseño y Batería</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Peso:</span>
                        <span className="font-medium">{product.specs.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dimensiones:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Batería:</span>
                        <span className="font-medium text-right max-w-[60%]">{product.specs.battery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sistema Operativo:</span>
                        <span className="font-medium">{product.specs.os}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ideal" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {product.idealFor.map((user, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Laptop className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-700">{user}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                    <CardDescription>{relatedProduct.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-blue-600">
                        {formatPrice(relatedProduct.pricePerMonth)}/mes
                      </div>
                      <Badge className="bg-green-100 text-green-800">{relatedProduct.availability}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/catalogo/${relatedProduct.id}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          Ver Detalles
                        </Button>
                      </Link>
                      <Link href={`/cotizacion?product=${relatedProduct.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700">Cotizar</Button>
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
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para arrendar este equipo?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Obtén una cotización personalizada para el {product.name} y descubre cómo puede impulsar tu productividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/cotizacion?product=${product.id}`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Calculator className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      {<Footer />}
    </div>
  )
}
