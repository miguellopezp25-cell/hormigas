import { Crown, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary py-20 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Crown className="h-4 w-4" />
              <span>Imperio Hormiga — Especialistas en mirmecología</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              El imperio de las hormigas comienza aquí
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Colonias de hormigas de alta calidad y hormigueros profesionales diseñados 
              para observar y cuidar estas increíbles criaturas. Desde principiantes hasta expertos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/hormigas">
                  Ver Hormigas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/hormigueros">Ver Hormigueros</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Especies disponibles</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <Image src="/images/imperiologo.png" alt="Imperio Hormiga" width={160} height={160} className="mx-auto mb-4" />
                <p className="text-muted-foreground">La reina de tu colección</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Envío seguro</div>
                  <div className="text-sm text-muted-foreground">Garantía de llegada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
