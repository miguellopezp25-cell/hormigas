"use client";

import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";

export function ProductLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        {children}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
