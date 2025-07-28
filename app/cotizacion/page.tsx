"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  User,
  Building,
  Phone,
  Calendar,
  Laptop,
  Plus,
  Minus,
  ShoppingCart,
  FileText,
  CheckCircle,
  X,
  Search,
  Filter,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import SocialNetworks from "@/components/rrss"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function CotizacionPage() {
  const searchParams = useSearchParams()
  const preSelectedProductId = searchParams.get("product")

  const [selectedProducts, setSelectedProducts] = useState<{ [key: number]: number }>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const [clientData, setClientData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    cargo: "",
    rut: "",
    direccion: "",
    ciudad: "",
    duracionArriendo: "",
    fechaInicio: "",
    comentarios: "",
  })

  const allLaptops = [
    {
      id: 1,
      name: "Apple MacBook Air M3",
      brand: "Apple",
      image: "/placeholder.svg?height=150&width=200&text=MacBook+Air+M3",
      specs: {
        processor: "Apple M3 8-core",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "15.3 pulgadas",
      },
      description: "Potencia y eficiencia en diseño ultradelgado.",
      featured: true,
      category: "Premium",
    },
    {
      id: 2,
      name: "Apple MacBook Pro M3",
      brand: "Apple",
      image: "/placeholder.svg?height=150&width=200&text=MacBook+Pro+M3",
      specs: {
        processor: "Apple M3 Pro",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "16 pulgadas",
      },
      description: "Máximo rendimiento para profesionales creativos.",
      featured: true,
      category: "Premium",
    },
    {
      id: 3,
      name: "Acer Aspire Lite Ryzen 7",
      brand: "Acer",
      image: "/placeholder.svg?height=150&width=200&text=Acer+Aspire+Lite",
      specs: {
        processor: "AMD Ryzen 7 5700U",
        ram: "32GB",
        storage: "512GB SSD",
        screen: "15.6 pulgadas",
      },
      description: "Equilibrio perfecto entre rendimiento y movilidad.",
      featured: false,
      category: "Business",
    },
    {
      id: 4,
      name: "HP Pavilion 15-Eg0522La",
      brand: "HP",
      image: "/placeholder.svg?height=150&width=200&text=HP+Pavilion+15",
      specs: {
        processor: "Intel Core i7-1165G7",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "15.6 pulgadas",
      },
      description: "Versatilidad empresarial con excelente relación precio-rendimiento.",
      featured: true,
      category: "Business",
    },
    {
      id: 5,
      name: "Lenovo ThinkPad X1 Carbon",
      brand: "Lenovo",
      image: "/placeholder.svg?height=150&width=200&text=ThinkPad+X1",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "14 pulgadas",
      },
      description: "Ultrabook empresarial con construcción premium.",
      featured: true,
      category: "Enterprise",
    },
    {
      id: 6,
      name: "Dell XPS 13 Plus",
      brand: "Dell",
      image: "/placeholder.svg?height=150&width=200&text=Dell+XPS+13",
      specs: {
        processor: "Intel Core i7-1260P",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "13.4 pulgadas",
      },
      description: "Diseño innovador con pantalla 4K.",
      featured: false,
      category: "Premium",
    },
    {
      id: 7,
      name: "Acer Predator Helios 300",
      brand: "Acer",
      image: "/placeholder.svg?height=150&width=200&text=Acer+Predator",
      specs: {
        processor: "Intel Core i7-12700H",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "15.6 pulgadas",
      },
      description: "Potencia extrema para aplicaciones demanding.",
      featured: false,
      category: "Gaming",
    },
    {
      id: 8,
      name: "HP EliteBook 840 G9",
      brand: "HP",
      image: "/placeholder.svg?height=150&width=200&text=HP+EliteBook",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "14 pulgadas",
      },
      description: "Seguridad empresarial y rendimiento profesional.",
      featured: false,
      category: "Enterprise",
    },
    {
      id: 9,
      name: "Lenovo Legion 5 Pro",
      brand: "Lenovo",
      image: "/placeholder.svg?height=150&width=200&text=Legion+5+Pro",
      specs: {
        processor: "AMD Ryzen 7 6800H",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "16 pulgadas",
      },
      description: "Rendimiento gaming y creativo profesional.",
      featured: false,
      category: "Gaming",
    },
    {
      id: 10,
      name: "ASUS ZenBook Pro 15",
      brand: "ASUS",
      image: "/placeholder.svg?height=150&width=200&text=ASUS+ZenBook",
      specs: {
        processor: "Intel Core i7-11800H",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "15.6 pulgadas",
      },
      description: "Creatividad sin límites con pantalla OLED.",
      featured: false,
      category: "Creative",
    },
    {
      id: 11,
      name: "Microsoft Surface Laptop 5",
      brand: "Microsoft",
      image: "/placeholder.svg?height=150&width=200&text=Surface+Laptop",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        screen: "13.5 pulgadas",
      },
      description: "Elegancia y productividad en el ecosistema Microsoft.",
      featured: false,
      category: "Premium",
    },
    {
      id: 12,
      name: "Dell Latitude 7430",
      brand: "Dell",
      image: "/placeholder.svg?height=150&width=200&text=Dell+Latitude",
      specs: {
        processor: "Intel Core i7-1255U",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "14 pulgadas",
      },
      description: "Confiabilidad empresarial con seguridad avanzada.",
      featured: false,
      category: "Enterprise",
    },
  ]

  // Pre-seleccionar producto si viene desde un enlace específico
  useEffect(() => {
    if (preSelectedProductId) {
      const productId = Number.parseInt(preSelectedProductId)
      const product = allLaptops.find((p) => p.id === productId)
      if (product) {
        setSelectedProducts({ [productId]: 1 })
        // Establecer la categoría del producto pre-seleccionado como tab activo
        setActiveTab(product.category)
      }
    }
  }, [preSelectedProductId])

  const brands = ["Apple", "Acer", "HP", "Lenovo", "Dell", "ASUS", "Microsoft"]
  const categories = [
    { value: "all", label: "Todos", count: allLaptops.length },
    { value: "Premium", label: "Premium", count: allLaptops.filter((l) => l.category === "Premium").length },
    { value: "Business", label: "Business", count: allLaptops.filter((l) => l.category === "Business").length },
    { value: "Enterprise", label: "Enterprise", count: allLaptops.filter((l) => l.category === "Enterprise").length },
    { value: "Gaming", label: "Gaming", count: allLaptops.filter((l) => l.category === "Gaming").length },
    { value: "Creative", label: "Creative", count: allLaptops.filter((l) => l.category === "Creative").length },
  ]

  const filteredLaptops = useMemo(() => {
    let filtered = allLaptops.filter((laptop) => {
      const matchesSearch =
        laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === "all" || laptop.brand === selectedBrand
      const matchesCategory = selectedCategory === "all" || laptop.category === selectedCategory
      const matchesTab = activeTab === "all" || laptop.category === activeTab
      return matchesSearch && matchesBrand && matchesCategory && matchesTab
    })

    // Si hay un producto pre-seleccionado, ponerlo primero en la lista
    if (preSelectedProductId) {
      const preSelectedId = Number.parseInt(preSelectedProductId)
      const preSelectedProduct = filtered.find((p) => p.id === preSelectedId)
      if (preSelectedProduct) {
        filtered = [preSelectedProduct, ...filtered.filter((p) => p.id !== preSelectedId)]
      }
    }

    return filtered
  }, [searchTerm, selectedBrand, selectedCategory, activeTab, preSelectedProductId])

  const handleProductSelect = (productId: number, quantity: number) => {
    if (quantity === 0) {
      const newSelected = { ...selectedProducts }
      delete newSelected[productId]
      setSelectedProducts(newSelected)
    } else {
      setSelectedProducts({ ...selectedProducts, [productId]: quantity })
    }
  }



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Datos del cliente:", clientData)
    console.log("Productos seleccionados:", selectedProducts)
    alert("Cotización enviada exitosamente! Nos contactaremos contigo pronto.")
  }

  const selectedProductsCount = Object.values(selectedProducts).reduce((sum, qty) => sum + qty, 0)

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedBrand("all")
    setSelectedCategory("all")
    setActiveTab("all")
  }

  // Obtener el producto pre-seleccionado para mostrar en el header
  const preSelectedProduct = preSelectedProductId
    ? allLaptops.find((p) => p.id === Number.parseInt(preSelectedProductId))
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      {<SocialNetworks />}
      {/* Header */}
      {<Header />}
      

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {preSelectedProduct ? `Cotizar ${preSelectedProduct.name}` : "Solicitar Cotización"}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              {preSelectedProduct
                ? `Completa el formulario para cotizar el ${preSelectedProduct.name}. Puedes agregar más equipos si lo necesitas.`
                : "Completa el formulario y selecciona los equipos que necesitas. Te enviaremos una cotización personalizada en menos de 24 horas."}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-blue-100 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 md:h-5 md:w-5" />
                <span>Cotización Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                <span>Respuesta en 24hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 md:h-5 md:w-5" />
                <span>Sin Compromiso</span>
              </div>
              {preSelectedProduct && (
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Badge className="bg-green-500 text-white text-xs">
                    ✓ {preSelectedProduct.name} Pre-seleccionado
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Client Information */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Personal Data */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Información Personal
                  </CardTitle>
                  <CardDescription>Completa tus datos para generar la cotización</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      value={clientData.nombre}
                      onChange={(e) => setClientData({ ...clientData, nombre: e.target.value })}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={clientData.email}
                      onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                      placeholder="juan@empresa.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      value={clientData.telefono}
                      onChange={(e) => setClientData({ ...clientData, telefono: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cargo">Cargo</Label>
                    <Input
                      id="cargo"
                      value={clientData.cargo}
                      onChange={(e) => setClientData({ ...clientData, cargo: e.target.value })}
                      placeholder="Gerente de TI"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Company Data */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Información de la Empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresa">Nombre de la Empresa *</Label>
                    <Input
                      id="empresa"
                      value={clientData.empresa}
                      onChange={(e) => setClientData({ ...clientData, empresa: e.target.value })}
                      placeholder="Mi Empresa S.A."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rut">RUT de la Empresa</Label>
                    <Input
                      id="rut"
                      value={clientData.rut}
                      onChange={(e) => setClientData({ ...clientData, rut: e.target.value })}
                      placeholder="12.345.678-9"
                    />
                  </div>
                  <div>
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input
                      id="direccion"
                      value={clientData.direccion}
                      onChange={(e) => setClientData({ ...clientData, direccion: e.target.value })}
                      placeholder="Av. Providencia 1234"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Select
                      value={clientData.ciudad}
                      onValueChange={(value) => setClientData({ ...clientData, ciudad: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="santiago">Santiago</SelectItem>
                        <SelectItem value="valparaiso">Valparaíso</SelectItem>
                        <SelectItem value="concepcion">Concepción</SelectItem>
                        <SelectItem value="antofagasta">Antofagasta</SelectItem>
                        <SelectItem value="temuco">Temuco</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Rental Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Detalles del Arriendo
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duracion">Duración del Arriendo (meses) *</Label>
                    <Select
                      value={clientData.duracionArriendo}
                      onValueChange={(value) => setClientData({ ...clientData, duracionArriendo: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 mes</SelectItem>
                        <SelectItem value="3">3 meses</SelectItem>
                        <SelectItem value="6">6 meses</SelectItem>
                        <SelectItem value="12">12 meses</SelectItem>
                        <SelectItem value="24">24 meses</SelectItem>
                        <SelectItem value="36">36 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fechaInicio">Fecha de Inicio Preferida</Label>
                    <Input
                      id="fechaInicio"
                      type="date"
                      value={clientData.fechaInicio}
                      onChange={(e) => setClientData({ ...clientData, fechaInicio: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="comentarios">Comentarios Adicionales</Label>
                    <Textarea
                      id="comentarios"
                      value={clientData.comentarios}
                      onChange={(e) => setClientData({ ...clientData, comentarios: e.target.value })}
                      placeholder="Especifica cualquier requerimiento especial, configuración específica, o información adicional..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Product Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Laptop className="h-5 w-5" />
                    {preSelectedProduct ? "Agregar Más Equipos" : "Seleccionar Equipos"}
                  </CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-sm">
                      {preSelectedProduct
                        ? `${preSelectedProduct.name} ya está seleccionado. Puedes agregar más equipos si lo necesitas.`
                        : "Elige los equipos que necesitas para tu cotización"}
                    </span>
                    <Link
                      href="/catalogo"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      Ver catálogo completo <ExternalLink className="h-3 w-3" />
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Filters */}
                  <div className="mb-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Buscar equipos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                        <SelectTrigger>
                          <SelectValue placeholder="Marca" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las marcas</SelectItem>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>                      
                      <Button variant="outline" onClick={clearFilters} className="bg-transparent">
                        <Filter className="h-4 w-4 mr-2" />
                        Limpiar
                      </Button>
                    </div>
                  </div>

                  {/* Category Tabs */}
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto">
                      {categories.map((category) => (
                        <TabsTrigger
                          key={category.value}
                          value={category.value}
                          className="text-xs p-2 h-auto flex flex-col sm:flex-row items-center gap-1"
                        >
                          <span className="truncate">{category.label}</span>
                          <Badge variant="secondary" className="text-xs px-1 py-0">
                            {category.count}
                          </Badge>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>

                  {/* Products List */}
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredLaptops.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Laptop className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No se encontraron equipos con los filtros seleccionados</p>
                        <Button variant="outline" onClick={clearFilters} className="mt-2 bg-transparent">
                          Limpiar filtros
                        </Button>
                      </div>
                    ) : (
                      filteredLaptops.map((laptop, index) => {
                        const isPreSelected =
                          preSelectedProductId && laptop.id === Number.parseInt(preSelectedProductId)
                        return (
                          <div
                            key={laptop.id}
                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors ${
                              selectedProducts[laptop.id] ? "border-blue-500 bg-blue-50" : "border-gray-200"
                            } ${isPreSelected ? "ring-2 ring-blue-300" : ""} relative`}
                          >
                            {isPreSelected && (
                              <div className="absolute -top-2 -left-2">
                                <Badge className="bg-green-500 text-white text-xs">✓ Pre-seleccionado</Badge>
                              </div>
                            )}

                            <div className="w-full sm:w-20 h-16 relative flex-shrink-0">
                              <Image
                                src={laptop.image || "/placeholder.svg"}
                                alt={laptop.name}
                                fill
                                className="object-cover rounded"
                              />
                            </div>

                            <div className="flex-1 min-w-0 w-full">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="font-semibold text-sm">{laptop.name}</h3>
                                  <div className="flex flex-wrap items-center gap-2 mt-1">
                                    <Badge variant="outline" className="text-xs">
                                      {laptop.brand}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                      {laptop.category}
                                    </Badge>
                                    {laptop.featured && <Badge className="text-xs bg-blue-600">Destacado</Badge>}
                                  </div>
                                  <p className="text-xs text-gray-600 mt-1 line-clamp-1">{laptop.description}</p>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-3">
                                <div className="text-xs text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4 sm:flex">
                                  <span>
                                    <strong>CPU:</strong> {laptop.specs.processor}
                                  </span>
                                  <span>
                                    <strong>RAM:</strong> {laptop.specs.ram}
                                  </span>
                                  <span>
                                    <strong>SSD:</strong> {laptop.specs.storage}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 justify-end">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      handleProductSelect(
                                        laptop.id,
                                        Math.max(0, (selectedProducts[laptop.id] || 0) - 1),
                                      )
                                    }
                                    disabled={!selectedProducts[laptop.id]}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center font-medium text-sm">
                                    {selectedProducts[laptop.id] || 0}
                                  </span>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      handleProductSelect(laptop.id, (selectedProducts[laptop.id] || 0) + 1)
                                    }
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    type="button"
                                    variant={selectedProducts[laptop.id] ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleProductSelect(laptop.id, selectedProducts[laptop.id] ? 0 : 1)}
                                    className="ml-2 text-xs px-3"
                                  >
                                    {selectedProducts[laptop.id] ? "Seleccionado" : "Seleccionar"}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>

                  <div className="mt-4 text-sm text-gray-600 text-center">
                    Mostrando {filteredLaptops.length} de {allLaptops.length} equipos
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Resumen de Cotización
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedProductsCount === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Laptop className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Selecciona equipos para ver el resumen</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {Object.entries(selectedProducts).map(([productId, quantity]) => {
                        const product = allLaptops.find((p) => p.id === Number.parseInt(productId))
                        if (!product) return null

                        const isPreSelected =
                          preSelectedProductId && product.id === Number.parseInt(preSelectedProductId)

                        return (
                          <div
                            key={productId}
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              isPreSelected ? "bg-green-50 border border-green-200" : "bg-gray-50"
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-sm truncate">{product.name}</h4>
                                {isPreSelected && (
                                  <Badge className="bg-green-500 text-white text-xs flex-shrink-0">✓</Badge>
                                )}
                              </div>                              
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => handleProductSelect(product.id, 0)}
                              className="flex-shrink-0 ml-2"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )
                      })}

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Duración:</span>
                          <span>{clientData.duracionArriendo || "1"} mes(es)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Equipos:</span>
                          <span>{selectedProductsCount} unidad(es)</span>
                        </div>
                      </div>

                      <Separator />
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>• Incluye soporte técnico 24/7</p>
                        <p>• Equipos de reemplazo inmediato</p>
                        <p>• Precios sujetos a confirmación</p>
                      </div>
                    </div>
                  )}

                  <Separator className="my-6" />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={
                      selectedProductsCount === 0 || !clientData.nombre || !clientData.email || !clientData.empresa
                    }
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Solicitar Cotización
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    Recibirás la cotización en tu email en menos de 24 horas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
      {/* Footer */}
      {<Footer />}
      {<WhatsAppButton />}
    </div>
  )
}
