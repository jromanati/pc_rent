"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Laptop, Search, Filter, Star, Grid3X3, List, SlidersHorizontal, Calculator, Phone, Mail} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import SocialNetworks from "@/components/rrss"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedRAM, setSelectedRAM] = useState("all")
  const [selectedProcessor, setSelectedProcessor] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const allLaptops = [
    {
      id: 1,
      name: "Apple MacBook Air M3",
      brand: "Apple",
      image: "/images/mac_mr.jpg?height=300&width=400&text=MacBook+Air+M3",
      specs: {
        screen: "15.3 pulgadas",
        processor: "Apple M3",
        ram: "16GB",
        storage: "512GB SSD",
        resolution: "2880 x 1864",
        os: "macOS",
        weight: "1.51 kg",
        battery: "18 horas",
      },
      description: "Potencia y eficiencia en diseño ultradelgado. Ideal para profesionales exigentes.",
      featured: true,
      category: "Premium",
      availability: "Disponible",
    },
    {
      id: 2,
      name: "Apple MacBook Pro M3",
      brand: "Apple",
      image: "/placeholder.svg?height=300&width=400&text=MacBook+Pro+M3",
      specs: {
        screen: "16 pulgadas",
        processor: "Apple M3 Pro",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "3456 x 2234",
        os: "macOS",
        weight: "2.16 kg",
        battery: "22 horas",
      },
      description: "Máximo rendimiento para profesionales creativos y desarrolladores.",
      featured: true,
      category: "Premium",
      availability: "Disponible",
    },
    {
      id: 3,
      name: "Acer Aspire Lite Ryzen 7",
      brand: "Acer",
      image: "/placeholder.svg?height=300&width=400&text=Acer+Aspire+Lite",
      specs: {
        screen: "15.6 pulgadas",
        processor: "AMD Ryzen 7 5700U",
        ram: "32GB",
        storage: "512GB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11",
        weight: "1.7 kg",
        battery: "9 horas",
      },
      description: "Equilibrio perfecto entre rendimiento y movilidad.",
      featured: false,
      category: "Business",
      availability: "Disponible",
    },
    {
      id: 4,
      name: "Acer Predator Helios 300",
      brand: "Acer",
      image: "/placeholder.svg?height=300&width=400&text=Acer+Predator",
      specs: {
        screen: "15.6 pulgadas",
        processor: "Intel Core i7-12700H",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11",
        weight: "2.3 kg",
        battery: "6 horas",
      },
      description: "Potencia extrema para aplicaciones demanding y gaming profesional.",
      featured: false,
      category: "Gaming",
      availability: "Disponible",
    },
    {
      id: 5,
      name: "HP Pavilion 15-Eg0522La",
      brand: "HP",
      image: "/placeholder.svg?height=300&width=400&text=HP+Pavilion+15",
      specs: {
        screen: "15.6 pulgadas",
        processor: "Intel Core i7-1165G7",
        ram: "16GB",
        storage: "512GB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11",
        weight: "1.75 kg",
        battery: "8 horas",
      },
      description: "Versatilidad empresarial con excelente relación precio-rendimiento.",
      featured: true,
      category: "Business",
      availability: "Disponible",
    },
    {
      id: 6,
      name: "HP EliteBook 840 G9",
      brand: "HP",
      image: "/placeholder.svg?height=300&width=400&text=HP+EliteBook",
      specs: {
        screen: "14 pulgadas",
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11 Pro",
        weight: "1.36 kg",
        battery: "12 horas",
      },
      description: "Seguridad empresarial y rendimiento profesional en diseño premium.",
      featured: false,
      category: "Enterprise",
      availability: "Disponible",
    },
    {
      id: 7,
      name: "Lenovo ThinkPad X1 Carbon",
      brand: "Lenovo",
      image: "/placeholder.svg?height=300&width=400&text=ThinkPad+X1",
      specs: {
        screen: "14 pulgadas",
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "2880 x 1800",
        os: "Windows 11 Pro",
        weight: "1.12 kg",
        battery: "15 horas",
      },
      description: "Ultrabook empresarial con construcción premium y máxima portabilidad.",
      featured: true,
      category: "Enterprise",
      availability: "Disponible",
    },
    {
      id: 8,
      name: "Lenovo Legion 5 Pro",
      brand: "Lenovo",
      image: "/placeholder.svg?height=300&width=400&text=Legion+5+Pro",
      specs: {
        screen: "16 pulgadas",
        processor: "AMD Ryzen 7 6800H",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "2560 x 1600",
        os: "Windows 11",
        weight: "2.5 kg",
        battery: "7 horas",
      },
      description: "Rendimiento gaming y creativo profesional en un solo equipo.",
      featured: false,
      category: "Gaming",
      availability: "Disponible",
    },
    {
      id: 9,
      name: "Dell XPS 13 Plus",
      brand: "Dell",
      image: "/placeholder.svg?height=300&width=400&text=Dell+XPS+13",
      specs: {
        screen: "13.4 pulgadas",
        processor: "Intel Core i7-1260P",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "3840 x 2400",
        os: "Windows 11",
        weight: "1.26 kg",
        battery: "12 horas",
      },
      description: "Diseño innovador con pantalla 4K y rendimiento excepcional.",
      featured: false,
      category: "Premium",
      availability: "Disponible",
    },
    {
      id: 10,
      name: "Dell Latitude 7430",
      brand: "Dell",
      image: "/placeholder.svg?height=300&width=400&text=Dell+Latitude",
      specs: {
        screen: "14 pulgadas",
        processor: "Intel Core i7-1255U",
        ram: "16GB",
        storage: "512GB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11 Pro",
        weight: "1.36 kg",
        battery: "10 horas",
      },
      description: "Confiabilidad empresarial con características de seguridad avanzadas.",
      featured: false,
      category: "Enterprise",
      availability: "Disponible",
    },
    {
      id: 11,
      name: "ASUS ZenBook Pro 15",
      brand: "ASUS",
      image: "/placeholder.svg?height=300&width=400&text=ASUS+ZenBook",
      specs: {
        screen: "15.6 pulgadas",
        processor: "Intel Core i7-11800H",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "1920 x 1080",
        os: "Windows 11",
        weight: "1.8 kg",
        battery: "9 horas",
      },
      description: "Creatividad sin límites con pantalla OLED y rendimiento profesional.",
      featured: false,
      category: "Creative",
      availability: "Disponible",
    },
    {
      id: 12,
      name: "Microsoft Surface Laptop 5",
      brand: "Microsoft",
      image: "/placeholder.svg?height=300&width=400&text=Surface+Laptop",
      specs: {
        screen: "13.5 pulgadas",
        processor: "Intel Core i7-1255U",
        ram: "32GB",
        storage: "1TB SSD",
        resolution: "2256 x 1504",
        os: "Windows 11",
        weight: "1.29 kg",
        battery: "18 horas",
      },
      description: "Elegancia y productividad en el ecosistema Microsoft.",
      featured: false,
      category: "Premium",
      availability: "Disponible",
    },
  ]

  const brands = ["Apple", "Acer", "HP", "Lenovo", "Dell", "ASUS", "Microsoft"]
  const ramOptions = ["8GB", "16GB", "32GB"]
  const processorTypes = ["Intel", "AMD", "Apple M3"]

  const filteredLaptops = useMemo(() => {
    const filtered = allLaptops.filter((laptop) => {
      const matchesSearch =
        laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === "all" || laptop.brand === selectedBrand
      const matchesRAM = selectedRAM === "all" || laptop.specs.ram.includes(selectedRAM)
      const matchesProcessor =
        selectedProcessor === "all" || laptop.specs.processor.toLowerCase().includes(selectedProcessor.toLowerCase())

      return matchesSearch && matchesBrand && matchesRAM && matchesProcessor
    })

    // Sort
    switch (sortBy) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "brand":
        filtered.sort((a, b) => a.brand.localeCompare(b.brand))
        break
    }

    return filtered
  }, [searchTerm, selectedBrand, selectedRAM, selectedProcessor, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {<SocialNetworks />}
      {/* Page Title */}
      {<Header />}

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Catálogo Completo</h1>
            <p className="text-xl opacity-90 mb-6">
              Explora nuestra amplia selección de equipos tecnológicos de última generación. Más de 15 modelos
              disponibles para arriendo empresarial.
            </p>
            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                <span>12+ Marcas</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Equipos Certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500">Disponible 24/7</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar por modelo o marca..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Marca</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las marcas" />
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
                </div>

                {/* RAM Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Memoria RAM</label>
                  <Select value={selectedRAM} onValueChange={setSelectedRAM}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toda la RAM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toda la RAM</SelectItem>
                      {ramOptions.map((ram) => (
                        <SelectItem key={ram} value={ram}>
                          {ram}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Processor Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Procesador</label>
                  <Select value={selectedProcessor} onValueChange={setSelectedProcessor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los procesadores" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los procesadores</SelectItem>
                      {processorTypes.map((processor) => (
                        <SelectItem key={processor} value={processor}>
                          {processor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Checkboxes */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">Categorías</label>
                  <div className="space-y-2">
                    {["Premium", "Business", "Enterprise", "Gaming", "Creative"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedBrand("all")
                    setSelectedRAM("all")
                    setSelectedProcessor("all")
                    setSortBy("featured")
                    setViewMode("grid")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden bg-transparent"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <p className="text-gray-600">
                  Mostrando {filteredLaptops.length} de {allLaptops.length} equipos
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="name">Nombre A-Z</SelectItem>
                    <SelectItem value="brand">Marca</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredLaptops.map((laptop) => (
                <Card
                  key={laptop.id}
                  className={`overflow-hidden hover:shadow-xl transition-shadow ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  {laptop.featured && (
                    <div className="bg-blue-600 text-white text-center py-2">
                      <Badge className="bg-white text-blue-600">⭐ Destacado</Badge>
                    </div>
                  )}

                  <div className={`${viewMode === "list" ? "w-80" : ""} aspect-video relative overflow-hidden`}>
                    <Image
                      src={laptop.image || "/placeholder.svg"}
                      alt={laptop.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {laptop.brand}
                        </Badge>
                        <Badge variant="secondary">{laptop.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{laptop.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <CardDescription className="text-base">{laptop.description}</CardDescription>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div>
                          <strong>Procesador:</strong> {laptop.specs.processor}
                        </div>
                        <div>
                          <strong>RAM:</strong> {laptop.specs.ram}
                        </div>
                        <div>
                          <strong>Almacenamiento:</strong> {laptop.specs.storage}
                        </div>
                        <div>
                          <strong>Pantalla:</strong> {laptop.specs.screen}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-green-100 text-green-800">{laptop.availability}</Badge>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/cotizacion?product=${laptop.id}`} className="flex-1">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar Cotización</Button>
                        </Link>
                        <Link href={`/catalogo/${laptop.id}`}>
                        <Button
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          Ver Detalles
                        </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredLaptops.length === 0 && (
              <div className="text-center py-12">
                <Laptop className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron equipos</h3>
                <p className="text-gray-600 mb-4">Intenta ajustar los filtros para ver más resultados</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedBrand("all")
                    setSelectedRAM("all")
                    setSelectedProcessor("all")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/cotizacion">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg rounded-full px-6">
            <Calculator className="h-5 w-5 mr-2" />
            Cotizar Ahora
          </Button>
        </Link>
      </div>

      {/* Footer */}
      {<Footer />}
    </div>
  )
}
