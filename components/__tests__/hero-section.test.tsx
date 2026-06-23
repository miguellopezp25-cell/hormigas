import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/hero-section";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) =>
    <img alt={alt} {...props} />,
}));

describe("HeroSection", () => {
  it("should render the main heading", () => {
    render(<HeroSection />);
    expect(screen.getByText("El imperio de las hormigas comienza aquí")).toBeInTheDocument();
  });

  it("should render the badge with Imperio Hormiga", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Imperio Hormiga/)).toBeInTheDocument();
  });

  it("should render call-to-action buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText("Ver Hormigas")).toBeInTheDocument();
    expect(screen.getByText("Ver Hormigueros")).toBeInTheDocument();
  });

  it("should render stats", () => {
    render(<HeroSection />);
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("1000+")).toBeInTheDocument();
    expect(screen.getByText("5★")).toBeInTheDocument();
  });

  it("should render the logo image", () => {
    render(<HeroSection />);
    const logo = screen.getByAltText("Imperio Hormiga");
    expect(logo).toBeInTheDocument();
  });
});
