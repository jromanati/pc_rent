"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Laptop, Search, Filter, Star, Grid3X3, List, SlidersHorizontal, Calculator } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {allLaptops} from "@/data/equiposData"

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedRAM, setSelectedRAM] = useState("all")
  const [selectedProcessor, setSelectedProcessor] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [mainTab, setMainTab] = useState("notebook")

  const ramOptions = ["8GB", "16GB", "32GB"]
  const processorTypes = ["Intel", "AMD", "Apple M3"]

  const brands = useMemo(() => {
    if (mainTab === "macbook") {
      return ["Apple"]
    } else {
      return ["Acer", "HP", "Lenovo", "Dell", "ASUS", "Microsoft"]
    }
  }, [mainTab])

  const filteredLaptops = useMemo(() => {
    // Primero filtrar por tab principal (Apple vs otros)
    const tabFiltered = allLaptops.filter((laptop) => {
      if (mainTab === "macbook") {
        return laptop.brand === "Apple"
      } else {
        return laptop.brand !== "Apple"
      }
    })

    const filtered = tabFiltered.filter((laptop) => {
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
      case "price":
        filtered.sort((a, b) => {
          const priceA = Number.parseInt(a.price.match(/\d+/)?.[0] || "0")
          const priceB = Number.parseInt(b.price.match(/\d+/)?.[0] || "0")
          return priceA - priceB
        })
        break
    }

    return filtered
  }, [searchTerm, selectedBrand, selectedRAM, selectedProcessor, sortBy, mainTab])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedBrand("all")
    setSelectedRAM("all")
    setSelectedProcessor("all")
    setPriceRange("all")
    setSortBy("featured")
    setViewMode("grid")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {<Header />}

      {/* Page Header */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20"
        style={{ backgroundImage: "url('/images/mac_mr.jpg')" }}
      >
        <div className="absolute inset-0 bg-red-900/25 backdrop-brightness-75"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Arriendo de Equipos</h1>
            <p className="text-xl lg:text-2xl mb-8 text-white-100 leading-relaxed">
              Explora nuestra amplia selección de equipos tecnológicos de última generación.
            </p>
            <p className="text-xl lg:text-2xl mb-8 text-white-100 leading-relaxed">
              Más de 15 modelos disponibles para arriendo empresarial.
            </p>

            {/* Main Category Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => setMainTab("notebook")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  mainTab === "notebook"
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Laptop className="h-5 w-5 inline mr-2" />
                Arriendo de Notebook
              </button>
              <button
                onClick={() => setMainTab("macbook")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  mainTab === "macbook"
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <svg className="h-5 w-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.003 5.367 18.636.001 12.017.001zM8.218 2.326c1.43 0 2.59 1.16 2.59 2.59s-1.16 2.59-2.59 2.59-2.59-1.16-2.59-2.59 1.16-2.59 2.59-2.59zm7.598 0c1.43 0 2.59 1.16 2.59 2.59s-1.16 2.59-2.59 2.59-2.59-1.16-2.59-2.59 1.16-2.59 2.59-2.59zM12.017 21.661c-5.338 0-9.674-4.336-9.674-9.674S6.679 2.313 12.017 2.313s9.674 4.336 9.674 9.674-4.336 9.674-9.674 9.674z" />
                </svg>
                Arriendo de MacBook
              </button>
            </div>

            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                <span>{mainTab === "notebook" ? "8+ Modelos PC" : "4+ Modelos Mac"}</span>
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
                <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
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
                  Mostrando {filteredLaptops.length} de{" "}
                  {allLaptops.filter((l) => (mainTab === "macbook" ? l.brand === "Apple" : l.brand !== "Apple")).length}{" "}
                  equipos {mainTab === "macbook" ? "MacBook" : "Notebook"}
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
                    <SelectItem value="price">Precio</SelectItem>
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
                      {/* <div className="flex items-center justify-between">
                        <CardDescription className="text-base">{laptop.description}</CardDescription>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div> */}
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
                        <div className="text-2xl font-bold text-blue-600">{laptop.price}</div>
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
                <Button variant="outline" onClick={clearFilters}>
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
      <WhatsAppButton />
    </div>
  )
}
