import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({}),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) =>
    <img alt={alt} {...props} />,
}));

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("Header", () => {
  it("should render the brand name", () => {
    render(<Header />, { wrapper });
    expect(screen.getByText("Imperio Hormiga")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<Header />, { wrapper });
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Hormigas")).toBeInTheDocument();
    expect(screen.getByText("Hormigueros")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Tienda")).toBeInTheDocument();
  });

  it("should render the cart button", () => {
    render(<Header />, { wrapper });
    expect(screen.getByRole("button", { name: /carrito/i })).toBeInTheDocument();
  });

  it("should render the logo image", () => {
    render(<Header />, { wrapper });
    const logo = screen.getByAltText("Imperio Hormiga");
    expect(logo).toBeInTheDocument();
  });
});
