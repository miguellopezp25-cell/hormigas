"use client";

import { useState, useMemo, useEffect } from "react";
import { Bug, Thermometer, Droplets, ShoppingCart, Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { antSpecies, type AntSpecies } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

const ITEMS_PER_PAGE = 12;

const difficultyColors: Record<string, string> = {
  Principiante: "bg-accent text-accent-foreground",
  Intermedio: "bg-chart-4 text-foreground",
  Avanzado: "bg-destructive text-destructive-foreground",
};

const categoryLabels: Record<string, string> = {
  tropical: "Tropical",
  desertica: "Desértica",
  templada: "Templada",
};

type SortOption = "name" | "price-asc" | "price-desc" | "difficulty";

export function AntsCatalog() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("name");
  const [page, setPage] = useState(1);
  const { addItem } = useCart();

  const filteredAnts = useMemo(() => {
    return antSpecies
      .filter((ant) => {
        const matchesSearch =
          ant.name.toLowerCase().includes(search.toLowerCase()) ||
          ant.scientificName.toLowerCase().includes(search.toLowerCase());
        const matchesDifficulty = difficulty === "all" || ant.difficulty === difficulty;
        const matchesCategory = category === "all" || ant.category === category;
        return matchesSearch && matchesDifficulty && matchesCategory;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc": return a.price - b.price;
          case "price-desc": return b.price - a.price;
          case "difficulty": {
            const order = { Principiante: 0, Intermedio: 1, Avanzado: 2 };
            return order[a.difficulty] - order[b.difficulty];
          }
          default: return a.name.localeCompare(b.name);
        }
      });
  }, [search, difficulty, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredAnts.length / ITEMS_PER_PAGE));
  const paginatedAnts = filteredAnts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [search, difficulty, category, sort]);

  const handleAddToCart = (ant: AntSpecies) => {
    addItem({ id: ant.id, type: "ant", name: ant.name, price: ant.price, image: ant.image });
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Catálogo de Hormigas
          </h1>
          <p className="text-muted-foreground">
            {filteredAnts.length} de {antSpecies.length} especies disponibles
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nombre..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-[160px]"><Filter className="h-4 w-4 mr-2" /><SelectValue placeholder="Dificultad" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Principiante">Principiante</SelectItem>
                <SelectItem value="Intermedio">Intermedio</SelectItem>
                <SelectItem value="Avanzado">Avanzado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[160px]"><Filter className="h-4 w-4 mr-2" /><SelectValue placeholder="Categoría" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="tropical">Tropical</SelectItem>
                <SelectItem value="desertica">Desértica</SelectItem>
                <SelectItem value="templada">Templada</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={(v: SortOption) => setSort(v)}>
              <SelectTrigger className="w-[160px]"><ArrowUpDown className="h-4 w-4 mr-2" /><SelectValue placeholder="Ordenar" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nombre</SelectItem>
                <SelectItem value="price-asc">Precio: menor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor</SelectItem>
                <SelectItem value="difficulty">Dificultad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedAnts.map((ant) => (
            <Card key={ant.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="p-0">
                <Link href={`/hormigas/${ant.id}`}>
                  <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                    <Bug className="h-16 w-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-3 left-3">
                      <Badge className={difficultyColors[ant.difficulty]}>{ant.difficulty}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-card/90">{categoryLabels[ant.category]}</Badge>
                    </div>
                    {!ant.inStock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <span className="text-muted-foreground font-semibold">Agotado</span>
                      </div>
                    )}
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-5">
                <Link href={`/hormigas/${ant.id}`} className="hover:underline">
                  <h3 className="font-bold text-lg text-foreground">{ant.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground italic mb-3">{ant.scientificName}</p>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Thermometer className="h-4 w-4 text-chart-3" /><span>{ant.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Droplets className="h-4 w-4 text-chart-5" /><span>{ant.humidity}</span>
                  </div>
                </div>
                <Link href={`/hormigas/${ant.id}`} className="text-sm text-primary hover:underline">
                  Ver detalles →
                </Link>
              </CardContent>
              <CardFooter className="p-5 pt-0 flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ${ant.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">MXN</span>
                </div>
                <Button onClick={() => handleAddToCart(ant)} disabled={!ant.inStock} size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />Agregar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {paginatedAnts.length === 0 && (
          <div className="text-center py-12">
            <Bug className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">No se encontraron especies con esos filtros.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(page - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Button key={p} variant={p === page ? "default" : "outline"} size="sm" onClick={() => setPage(p)}>
                {p}
              </Button>
            ))}
            <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="text-sm text-muted-foreground text-center mt-4">
          Página {page} de {totalPages} ({filteredAnts.length} resultados)
        </div>
      </div>
    </section>
  );
}
