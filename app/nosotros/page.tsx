"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Award,
  Target,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  TrendingUp,
  Shield,
  Headphones,
  Clock,
  Laptop,
  Calendar,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SocialNetworks from "@/components/rrss"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NosotrosPage() {
  const stats = [
    {
      icon: Calendar,
      number: "5+",
      label: "Años de Experiencia",
      description: "En el sector de arriendo de equipos corporativos",
    },
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfechos",
      description: "Empresas que confían en nuestros servicios",
    },
    {
      icon: Laptop,
      number: "1000+",
      label: "Equipos Disponibles",
      description: "Laptops y notebooks de última generación",
    },
    {
      icon: Globe,
      number: "24/7",
      label: "Soporte Técnico",
      description: "Asistencia continua para nuestros clientes",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Enfoque en Soluciones",
      description:
        "Nuestro principal objetivo es resolver las necesidades informáticas de nuestros clientes con asesoría profesional personalizada.",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Trabajamos exclusivamente con las mejores marcas para garantizar un rendimiento óptimo en cualquier entorno corporativo.",
    },
    {
      icon: Shield,
      title: "Continuidad Operativa",
      description:
        "Aseguramos la continuidad de sus operaciones con equipos de reemplazo inmediato y soporte técnico en terreno.",
    },
    {
      icon: TrendingUp,
      title: "Optimización de Costos",
      description:
        "Ayudamos a su empresa a optimizar los costos de adquisición de equipos tecnológicos con nuestro modelo de arriendo.",
    },
  ]

  const services = [
    {
      title: "Arriendo Corporativo",
      description: "Laptops y notebooks para equipos de trabajo completos",
      features: ["Configuración personalizada", "Entrega en 24-48 horas", "Soporte incluido"],
    },
    {
      title: "Home Office",
      description: "Soluciones tecnológicas para trabajo remoto",
      features: ["Equipos optimizados", "Configuración remota", "Soporte virtual"],
    },
    {
      title: "Eventos Corporativos",
      description: "Equipos temporales para eventos y presentaciones",
      features: ["Instalación en sitio", "Soporte durante evento", "Retiro incluido"],
    },
  ]

  const brands = [
    { name: "Apple", logo: "/placeholder.svg?height=60&width=120&text=Apple" },
    { name: "HP", logo: "/placeholder.svg?height=60&width=120&text=HP" },
    { name: "Lenovo", logo: "/placeholder.svg?height=60&width=120&text=Lenovo" },
    { name: "Dell", logo: "/placeholder.svg?height=60&width=120&text=Dell" },
    { name: "Acer", logo: "/placeholder.svg?height=60&width=120&text=Acer" },
    { name: "ASUS", logo: "/placeholder.svg?height=60&width=120&text=ASUS" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {<SocialNetworks />}
      {/* Header */}
      {<Header />}

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20"
        style={{ backgroundImage: "url('/images/quienes_somos_1.png')" }}
      >
        {/* Overlay oscuro para mejorar contraste */}
        <div className="absolute inset-0 bg-blue-900/70 backdrop-brightness-75"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500 text-white hover:bg-blue-500">
                <Building2 className="h-4 w-4 mr-2" />
                Tu Socio Estratégico en Tecnología
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Soluciones PC Rent</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Especialistas en arriendo de equipos tecnológicos de última generación, con enfoque en laptops y
                notebooks para empresas en Santiago de Chile.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cotizacion">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Solicitar Cotización
                  </Button>
                </Link>
                <Link href="/catalogo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Ver Catálogo
                  </Button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                Nuestra Misión: Resolver sus Necesidades Informáticas
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  En <strong>Soluciones PC Rent</strong>, nos especializamos en el arriendo de equipos tecnológicos de
                  última generación, con un enfoque particular en laptops y notebooks. Nuestro principal objetivo es
                  resolver las necesidades informáticas de nuestros clientes, brindando asesoría profesional y acceso a
                  la tecnología más avanzada del mercado.
                </p>
                <p>
                  Ubicados en <strong>Santiago de Chile</strong>, contamos con una amplia experiencia en el sector de
                  alquiler de equipos corporativos. Trabajamos exclusivamente con las mejores marcas para garantizar un
                  rendimiento óptimo en diversos entornos, ya sea su oficina, modalidad home office, eventos o cualquier
                  otra actividad corporativa.
                </p>
                <p>
                  Al elegirnos, su empresa podrá <strong>optimizar costos de adquisición de equipos</strong>, asegurar
                  la continuidad operativa y contar con soporte técnico en terreno y equipos de reemplazo inmediato.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores y Compromiso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos son los pilares que guían nuestro trabajo diario y nos permiten ofrecer el mejor servicio a nuestros
              clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas adaptadas a diferentes necesidades empresariales y modalidades de
              trabajo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Trabajamos con las Mejores Marcas</h2>
            <p className="text-lg text-gray-600">
              Garantizamos calidad y rendimiento óptimo con equipos de marcas líderes en tecnología.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`Logo ${brand.name}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por Qué Elegir Soluciones PC Rent?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia y compromiso nos convierten en el socio ideal para sus necesidades tecnológicas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Entrega Inmediata",
                description: "Equipos disponibles en 24-48 horas con instalación incluida.",
              },
              {
                icon: Headphones,
                title: "Soporte 24/7",
                description: "Asistencia técnica continua durante todo el periodo de arriendo.",
              },
              {
                icon: Shield,
                title: "Equipos de Reemplazo",
                description: "Garantizamos continuidad con reemplazos inmediatos ante cualquier falla.",
              },
              {
                icon: TrendingUp,
                title: "Optimización de Costos",
                description: "Reduzca gastos de capital y convierta costos variables en fijos.",
              },
            ].map((item, index) => (
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para Conocer Nuestras Soluciones?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contáctenos hoy mismo y descubra cómo podemos ser su socio estratégico en tecnología. Ofrecemos asesoría
            personalizada sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Cotización Gratuita
              </Button>
            </Link>
            <Link href="tel:+56912345678">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Santiago de Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contacto@solucionespcrent.cl</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+56 9 XXXX XXXX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {<Footer />}
    </div>
  )
}
