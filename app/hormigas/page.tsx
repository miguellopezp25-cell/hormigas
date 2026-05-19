import type { Metadata } from "next";
import { Bug } from "lucide-react";
import Link from "next/link";
import { AntsCatalog } from "@/components/ants-catalog";

export const metadata: Metadata = {
  title: "Hormigas | BlueAnts",
  description: "Catálogo completo de especies de hormigas. Colonias con reina fértil para principiantes y expertos.",
};

export default function AntsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bug className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">BlueAnts</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>
      <AntsCatalog />
    </div>
  );
}
