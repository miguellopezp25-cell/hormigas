import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { storeInfo } from "@/lib/data";

const footerLinks = {
  tienda: [
    { label: "Hormigas", href: "#hormigas" },
    { label: "Hormigueros", href: "#hormigueros" },
    { label: "Accesorios", href: "#" },
    { label: "Kits de Inicio", href: "#" },
  ],
  informacion: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Guías de Cuidado", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Envío", href: "#" },
    { label: "Devoluciones", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/imperiologo.png" alt="Imperio Hormiga" width={32} height={32} className="h-8 w-auto brightness-0 invert" />
              <span className="font-bold text-xl">{storeInfo.name}</span>
            </Link>
            <p className="text-sm opacity-80">
              Tu tienda especializada en hormigas y hormigueros de alta calidad.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${storeInfo.social.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <a 
                href={`https://facebook.com/${storeInfo.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Tienda</h4>
            <ul className="space-y-2">
              {footerLinks.tienda.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2">
              {footerLinks.informacion.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} {storeInfo.name}. Todos los derechos reservados.
            </p>
            <p className="text-sm opacity-70 flex items-center gap-1">
              Hecho con <Heart className="h-4 w-4 text-destructive" /> para los amantes de las hormigas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
