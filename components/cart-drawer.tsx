"use client";

import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useCart, generateWhatsAppMessage } from "@/lib/cart-context";
import { storeInfo } from "@/lib/data";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage(items, totalPrice);
    window.open(`https://wa.me/${storeInfo.whatsapp}?text=${message}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-xl border-l border-border">
        <Card className="h-full flex flex-col rounded-none border-0">
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Carrito ({totalItems})
                </h2>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar carrito</span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Agrega hormigas o hormigueros para comenzar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-secondary rounded-lg">
                    <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">
                        {item.type === "ant" ? "🐜" : "📦"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-primary font-semibold">
                        ${item.price.toLocaleString()} MXN
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {items.length > 0 && (
                  <Button 
                    variant="ghost" 
                    className="w-full text-muted-foreground"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Vaciar carrito
                  </Button>
                )}
              </div>
            )}
          </CardContent>

          {items.length > 0 && (
            <CardFooter className="border-t border-border p-4 flex flex-col gap-4">
              <div className="w-full flex items-center justify-between">
                <span className="text-muted-foreground">Total estimado:</span>
                <span className="text-2xl font-bold text-primary">
                  ${totalPrice.toLocaleString()} MXN
                </span>
              </div>
              
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                onClick={handleCheckout}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Cotizar por WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al hacer clic, se abrirá WhatsApp con tu pedido listo para enviar
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
