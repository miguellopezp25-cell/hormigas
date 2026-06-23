"use client";

import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { storeInfo } from "@/lib/data";

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visítanos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ven a conocer nuestra tienda física y observa nuestras colonias en vivo. 
            Asesoramiento personalizado para tu primer hormiguero.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.288147906666!2d-99.18019892503837!3d19.379699981900876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9c7d8cbfb1%3A0x9c3f8e1c6b3b7f8e!2sAv.%20Insurgentes%20Sur%201234%2C%20Del%20Valle%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Imperio Hormiga"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{storeInfo.address}</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horarios de Atención
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lunes a Viernes</span>
                    <span className="font-medium text-foreground">{storeInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium text-foreground">{storeInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium text-foreground">{storeInfo.hours.sunday}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Contacto Directo
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`tel:${storeInfo.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{storeInfo.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${storeInfo.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{storeInfo.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">
                  Síguenos
                </h3>
                <div className="flex gap-4">
                  <a
                    href={`https://instagram.com/${storeInfo.social.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">{storeInfo.social.instagram}</span>
                  </a>
                  <a
                    href={`https://facebook.com/${storeInfo.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://youtube.com/${storeInfo.social.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
