import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { LocationSection } from "@/components/location-section";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

describe("LocationSection", () => {
  it("should render the section title", () => {
    render(<LocationSection />);
    expect(screen.getByText("Tienda y Contacto")).toBeInTheDocument();
  });

  it("should render the contact form", () => {
    render(<LocationSection />);
    expect(screen.getByText("Envíanos un Mensaje")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("tu@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Cuéntanos en qué podemos ayudarte...")).toBeInTheDocument();
  });

  it("should render WhatsApp direct card", () => {
    render(<LocationSection />);
    expect(screen.getByText("WhatsApp Directo")).toBeInTheDocument();
    expect(screen.getByText("Abrir WhatsApp")).toBeInTheDocument();
  });

  it("should render FAQ section", () => {
    render(<LocationSection />);
    expect(screen.getByText("Preguntas Frecuentes")).toBeInTheDocument();
    expect(screen.getByText(/¿Hacen envíos a todo México\?/)).toBeInTheDocument();
    expect(screen.getByText(/¿Qué especie me recomiendan para empezar\?/)).toBeInTheDocument();
    expect(screen.getByText(/¿Las colonias incluyen reina\?/)).toBeInTheDocument();
  });

  it("should render hours section", () => {
    render(<LocationSection />);
    expect(screen.getByText("Horarios de Atención")).toBeInTheDocument();
  });

  it("should render social media section", () => {
    render(<LocationSection />);
    expect(screen.getByText("Síguenos")).toBeInTheDocument();
    expect(screen.getByText("@imperiohormiga")).toBeInTheDocument();
  });

  it("should render the map iframe", () => {
    render(<LocationSection />);
    const iframe = screen.getByTitle("Ubicación de Imperio Hormiga");
    expect(iframe).toBeInTheDocument();
  });
});
