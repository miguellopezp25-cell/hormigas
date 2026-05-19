"use client";

import { useState, useMemo, useEffect } from "react";
import { Box, Puzzle, Check, ShoppingCart, Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
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
import { formicaria, type Formicarium } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

const ITEMS_PER_PAGE = 12;

const categoryLabels: Record<string, string> = {
  acrilico: "Acrílico",
  ytong: "Ytong",
  vidrio: "Vidrio",
  "3d": "Impresión 3D",
  natural: "Natural",
};

type SortOption = "name" | "price-asc" | "price-desc";

export function FormicariaCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [modular, setModular] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("name");
  const [page, setPage] = useState(1);
  const { addItem } = useCart();

  const filteredFormicaria = useMemo(() => {
    return formicaria
      .filter((f) => {
        const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.material.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || f.category === category;
        const matchesModular = modular === "all" || (modular === "modular" && f.modular) || (modular === "fijo" && !f.modular);
        return matchesSearch && matchesCategory && matchesModular;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-asc": return a.price - b.price;
          case "price-desc": return b.price - a.price;
          default: return a.name.localeCompare(b.name);
        }
      });
  }, [search, category, modular, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredFormicaria.length / ITEMS_PER_PAGE));
  const paginatedFormicaria = filteredFormicaria.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [search, category, modular, sort]);

  const handleAddToCart = (f: Formicarium) => {
    addItem({ id: f.id, type: "formicarium", name: f.name, price: f.price, image: f.image });
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Catálogo de Hormigueros
          </h1>
          <p className="text-muted-foreground">
            {filteredFormicaria.length} de {formicaria.length} modelos disponibles
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar hormiguero..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[160px]"><Filter className="h-4 w-4 mr-2" /><SelectValue placeholder="Material" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="acrilico">Acrílico</SelectItem>
                <SelectItem value="ytong">Ytong</SelectItem>
                <SelectItem value="vidrio">Vidrio</SelectItem>
                <SelectItem value="3d">Impresión 3D</SelectItem>
                <SelectItem value="natural">Natural</SelectItem>
              </SelectContent>
            </Select>
            <Select value={modular} onValueChange={setModular}>
              <SelectTrigger className="w-[160px]"><Puzzle className="h-4 w-4 mr-2" /><SelectValue placeholder="Tipo" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="modular">Modular</SelectItem>
                <SelectItem value="fijo">Fijo</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={(v: SortOption) => setSort(v)}>
              <SelectTrigger className="w-[160px]"><ArrowUpDown className="h-4 w-4 mr-2" /><SelectValue placeholder="Ordenar" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nombre</SelectItem>
                <SelectItem value="price-asc">Precio: menor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedFormicaria.map((f) => (
            <Card key={f.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="p-0">
                <Link href={`/hormigueros/${f.id}`}>
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                    <Box className="h-16 w-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-3 left-3">
                      <Badge variant={f.modular ? "default" : "secondary"}>{f.modular ? "Modular" : "Fijo"}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-card/90">{categoryLabels[f.category]}</Badge>
                    </div>
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-5">
                <Link href={`/hormigueros/${f.id}`} className="hover:underline">
                  <h3 className="font-bold text-lg text-foreground">{f.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3">{f.material}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {f.features.slice(0, 2).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      <Check className="h-3 w-3 mr-1" />{feature}
                    </Badge>
                  ))}
                  {f.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">+{f.features.length - 2}</Badge>
                  )}
                </div>
                <Link href={`/hormigueros/${f.id}`} className="text-sm text-primary hover:underline">
                  Ver detalles →
                </Link>
              </CardContent>
              <CardFooter className="p-5 pt-0 flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ${f.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">MXN</span>
                </div>
                <Button onClick={() => handleAddToCart(f)} size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />Agregar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {paginatedFormicaria.length === 0 && (
          <div className="text-center py-12">
            <Box className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">No se encontraron hormigueros con esos filtros.</p>
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
          Página {page} de {totalPages} ({filteredFormicaria.length} resultados)
        </div>
      </div>
    </section>
  );
}
