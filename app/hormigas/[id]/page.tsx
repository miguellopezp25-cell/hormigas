import { notFound } from "next/navigation";
import Image from "next/image";
import { Bug, Thermometer, Droplets, Leaf, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { antSpecies } from "@/lib/data";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return antSpecies.map((ant) => ({ id: ant.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const ant = antSpecies.find((a) => a.id === id);
  if (!ant) return {};
  return {
    title: `${ant.name} | Imperio Hormiga`,
    description: ant.description,
    openGraph: {
      title: `${ant.name} | Imperio Hormiga`,
      description: ant.description,
      images: [{ url: ant.image }],
    },
  };
}

const difficultyColors: Record<string, string> = {
  Principiante: "bg-accent text-accent-foreground",
  Intermedio: "bg-chart-4 text-foreground",
  Avanzado: "bg-destructive text-destructive-foreground",
};

export default async function AntDetailPage({ params }: Props) {
  const { id } = await params;
  const ant = antSpecies.find((a) => a.id === id);
  if (!ant) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/imperiologo.png" alt="Imperio Hormiga" width={36} height={36} className="h-9 w-auto" />
            <span className="font-bold text-xl text-foreground">Imperio Hormiga</span>
          </Link>
          <Link
            href="/hormigas"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Ver todas</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden flex items-center justify-center relative">
              <Bug className="h-40 w-40 text-primary/30" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[ant.difficulty]}`}>
                  {ant.difficulty}
                </span>
                {ant.hibernation && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted">
                    Hibernación
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{ant.name}</h1>
              <p className="text-xl text-muted-foreground italic">{ant.scientificName}</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{ant.description}</p>

            <div className="grid sm:grid-cols-2 gap-8 p-6 bg-secondary rounded-xl">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Características</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Colonia</dt><dd className="text-foreground font-medium">{ant.colonySize}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Reina</dt><dd className="text-foreground font-medium">{ant.queenSize}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Obreras</dt><dd className="text-foreground font-medium">{ant.workerSize}</dd></div>
                </dl>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Cuidados</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><Thermometer className="h-4 w-4 text-chart-3" /><dt className="text-muted-foreground">Temperatura:</dt><dd className="text-foreground font-medium">{ant.temperature}</dd></div>
                  <div className="flex items-center gap-2"><Droplets className="h-4 w-4 text-chart-5" /><dt className="text-muted-foreground">Humedad:</dt><dd className="text-foreground font-medium">{ant.humidity}</dd></div>
                </dl>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Alimentación</h3>
              <div className="flex flex-wrap gap-2">
                {ant.diet.map((food) => (
                  <span key={food} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm border border-border">
                    <Leaf className="h-3 w-3 text-accent" />{food}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between mb-6">
                <div><span className="text-4xl font-bold text-primary">${ant.price.toLocaleString()}</span><span className="text-muted-foreground ml-2">MXN</span></div>
                {!ant.inStock && <span className="text-destructive font-semibold">Agotado</span>}
              </div>
              <AddToCartButton item={{ id: ant.id, type: "ant", name: ant.name, price: ant.price, image: ant.image }} disabled={!ant.inStock} className="w-full" />
              <p className="text-xs text-muted-foreground text-center mt-3">Envío seguro con garantía de llegada viva a todo México</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
