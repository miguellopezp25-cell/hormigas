import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AntsCatalog } from "@/components/ants-catalog";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("AntsCatalog", () => {
  it("should render the catalog title", () => {
    render(<AntsCatalog />, { wrapper });
    expect(screen.getByText("Catálogo de Hormigas")).toBeInTheDocument();
  });

  it("should render species count", () => {
    render(<AntsCatalog />, { wrapper });
    expect(screen.getByText(/especies disponibles/)).toBeInTheDocument();
  });

  it("should render filter controls", () => {
    render(<AntsCatalog />, { wrapper });
    expect(screen.getByPlaceholderText("Buscar por nombre...")).toBeInTheDocument();
  });

  it("should render at least one ant card", () => {
    render(<AntsCatalog />, { wrapper });
    expect(screen.getByText("Lasius Niger")).toBeInTheDocument();
  });
});
