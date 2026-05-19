"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { CartItem } from "@/lib/cart-context";

type Props = {
  item: Omit<CartItem, "quantity">;
  disabled?: boolean;
  className?: string;
};

export function AddToCartButton({ item, disabled, className }: Props) {
  const { addItem } = useCart();

  return (
    <Button
      size="lg"
      disabled={disabled}
      className={className}
      onClick={() => addItem(item)}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {disabled ? "Agotado" : "Agregar al carrito"}
    </Button>
  );
}
