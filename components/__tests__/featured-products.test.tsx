import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedProducts } from "@/components/featured-products";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("FeaturedProducts", () => {
  it("should render section titles", () => {
    render(<FeaturedProducts />, { wrapper });
    expect(screen.getByText("Hormigas Destacadas")).toBeInTheDocument();
    expect(screen.getByText("Hormigueros Destacados")).toBeInTheDocument();
  });

  it("should render product cards", () => {
    render(<FeaturedProducts />, { wrapper });
    expect(screen.getByText("Lasius Niger")).toBeInTheDocument();
    expect(screen.getByText("Messor Barbarus")).toBeInTheDocument();
  });

  it("should render prices in MXN format", () => {
    render(<FeaturedProducts />, { wrapper });
    const priceElements = screen.getAllByText(/^\$\d/);
    expect(priceElements.length).toBeGreaterThan(0);
  });
});
