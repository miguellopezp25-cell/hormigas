import { notFound } from "next/navigation";
import { Bug, Box, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { formicaria } from "@/lib/data";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return formicaria.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const f = formicaria.find((fm) => fm.id === id);
  if (!f) return {};
  return {
    title: `${f.name} | BlueAnts`,
    description: `${f.name} - ${f.material}. ${f.features.join(", ")}.`,
    openGraph: { title: `${f.name} | BlueAnts`, description: `${f.name} - ${f.material}.` },
  };
}

export default async function FormicariumDetailPage({ params }: Props) {
  const { id } = await params;
  const f = formicaria.find((fm) => fm.id === id);
  if (!f) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bug className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">BlueAnts</span>
          </Link>
          <Link href="/hormigueros" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" /><span>Ver todos</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center">
            <Box className="h-40 w-40 text-primary/30" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${f.modular ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {f.modular ? "Modular" : "Fijo"}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{f.name}</h1>
              <p className="text-xl text-muted-foreground">{f.material}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 p-6 bg-secondary rounded-xl">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Especificaciones</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Dimensiones</dt><dd className="text-foreground font-medium">{f.dimensions}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Capacidad</dt><dd className="text-foreground font-medium">{f.capacity}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Modular</dt><dd className="text-foreground font-medium">{f.modular ? "Sí" : "No"}</dd></div>
                </dl>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Características</h3>
                <ul className="space-y-2 text-sm">
                  {f.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />{feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between mb-6">
                <div><span className="text-4xl font-bold text-primary">${f.price.toLocaleString()}</span><span className="text-muted-foreground ml-2">MXN</span></div>
              </div>
              <AddToCartButton item={{ id: f.id, type: "formicarium", name: f.name, price: f.price, image: f.image }} className="w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
