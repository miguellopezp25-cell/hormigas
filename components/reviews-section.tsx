"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/lib/data";

export function ReviewsSection() {
  return (
    <section id="reseñas" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 1,000 clientes satisfechos en todo México. Tu satisfacción es nuestra prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-sm text-muted-foreground pl-4 italic leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.name}</p>
                    {review.productName && (
                      <p className="text-xs text-muted-foreground">{review.productName}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
