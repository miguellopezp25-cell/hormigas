"use client";

import { Bug, Box, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { antSpecies, formicaria } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import type { AntSpecies, Formicarium } from "@/lib/data";

const difficultyColors: Record<string, string> = {
  Principiante: "bg-accent text-accent-foreground",
  Intermedio: "bg-chart-4 text-foreground",
  Avanzado: "bg-destructive text-destructive-foreground",
};

export function FeaturedProducts() {
  const { addItem } = useCart();
  const featuredAnts = antSpecies.filter((a) => a.inStock).slice(0, 3);
  const featuredFormicaria = formicaria.filter((f) => f.inStock).slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hormigas Destacadas</h2>
                <p className="text-muted-foreground text-sm mt-1">Colonias con reina fértil</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/hormigas">Ver todas <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {featuredAnts.map((ant) => (
                <Card key={ant.id} className="overflow-hidden hover:shadow-md transition-shadow group">
                  <Link href={`/hormigas/${ant.id}`}>
                    <div className="aspect-square bg-secondary flex items-center justify-center">
                      <Bug className="h-12 w-12 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge className={difficultyColors[ant.difficulty]}>{ant.difficulty}</Badge>
                    </div>
                    <Link href={`/hormigas/${ant.id}`} className="hover:underline">
                      <h3 className="font-bold text-foreground">{ant.name}</h3>
                    </Link>
                    <p className="text-lg font-bold text-primary mt-2">${ant.price.toLocaleString()}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" className="w-full" onClick={() => addItem({ id: ant.id, type: "ant", name: ant.name, price: ant.price, image: ant.image })}>
                      <ShoppingCart className="h-4 w-4 mr-2" />Agregar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hormigueros Destacados</h2>
                <p className="text-muted-foreground text-sm mt-1">Profesionales y modulares</p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/hormigueros">Ver todos <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {featuredFormicaria.map((f) => (
                <Card key={f.id} className="overflow-hidden hover:shadow-md transition-shadow group">
                  <Link href={`/hormigueros/${f.id}`}>
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Box className="h-12 w-12 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">{f.category}</Badge>
                    </div>
                    <Link href={`/hormigueros/${f.id}`} className="hover:underline">
                      <h3 className="font-bold text-foreground text-sm leading-tight">{f.name}</h3>
                    </Link>
                    <p className="text-lg font-bold text-primary mt-2">${f.price.toLocaleString()}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" className="w-full" onClick={() => addItem({ id: f.id, type: "formicarium", name: f.name, price: f.price, image: f.image })}>
                      <ShoppingCart className="h-4 w-4 mr-2" />Agregar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
