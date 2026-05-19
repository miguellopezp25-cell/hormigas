"use client";

import { useState } from "react";
import { MessageCircle, Send, User, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storeInfo } from "@/lib/data";

export function ContactSection() {
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
    <section id="contacto" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Tienes Dudas?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para asesoramiento sobre especies, 
            cuidados, hormigueros o cualquier pregunta sobre el mundo de las hormigas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-foreground">Envíanos un Mensaje</h3>
              <p className="text-sm text-muted-foreground">
                Completa el formulario y te contactamos por WhatsApp
              </p>
            </CardHeader>
            <CardContent>
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

          <div className="space-y-6">
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
