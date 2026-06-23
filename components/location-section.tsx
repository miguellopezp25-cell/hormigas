"use client";

import { useState } from "react";
import { MapPin, Clock, MessageCircle, Send, User, Mail, FileText, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storeInfo } from "@/lib/data";

export function LocationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `¡Hola! Soy ${formData.name}.\n\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.open(`https://wa.me/${storeInfo.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tienda y Contacto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visítanos, escríbenos o consulta nuestras preguntas frecuentes. 
            Estamos aquí para ayudarte con tu colonia de hormigas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
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

          <div className="space-y-6">
            <Card>
              <CardHeader className="sr-only">
                <h3>Contacto</h3>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Envíanos un Mensaje</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Completa el formulario y te contactamos por WhatsApp
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp Directo</h4>
                    <p className="text-sm opacity-90">Respuesta inmediata</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  ¿Prefieres contactarnos directamente? Escríbenos al WhatsApp y te atenderemos lo antes posible.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${storeInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Preguntas Frecuentes</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground">¿Hacen envíos a todo México?</p>
                    <p className="text-muted-foreground">Sí, enviamos a toda la República con garantía de llegada viva.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">¿Qué especie me recomiendan para empezar?</p>
                    <p className="text-muted-foreground">Lasius Niger o Messor Barbarus son ideales para principiantes.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">¿Las colonias incluyen reina?</p>
                    <p className="text-muted-foreground">Sí, todas nuestras colonias incluyen una reina fértil y obreras.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
