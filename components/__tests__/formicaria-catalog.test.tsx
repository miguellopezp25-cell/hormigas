import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormicariaCatalog } from "@/components/formicaria-catalog";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("FormicariaCatalog", () => {
  it("should render the catalog title", () => {
    render(<FormicariaCatalog />, { wrapper });
    expect(screen.getByText("Catálogo de Hormigueros")).toBeInTheDocument();
  });

  it("should render model count", () => {
    render(<FormicariaCatalog />, { wrapper });
    expect(screen.getByText(/modelos disponibles/)).toBeInTheDocument();
  });

  it("should render filter controls", () => {
    render(<FormicariaCatalog />, { wrapper });
    expect(screen.getByPlaceholderText("Buscar hormiguero...")).toBeInTheDocument();
  });

  it("should render at least one formicarium card", () => {
    render(<FormicariaCatalog />, { wrapper });
    expect(screen.getByText("Hormiguero Acrílico Modular S")).toBeInTheDocument();
  });
});
