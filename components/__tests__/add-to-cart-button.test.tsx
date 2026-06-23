import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { CartProvider } from "@/lib/cart-context";
import type { ReactNode } from "react";

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("AddToCartButton", () => {
  it("should render with default text", () => {
    render(<AddToCartButton item={{ id: "test", type: "ant", name: "Test", price: 10, image: "/t.jpg" }} />, { wrapper });
    expect(screen.getByText("Agregar al carrito")).toBeInTheDocument();
  });

  it("should render disabled state when out of stock", () => {
    render(<AddToCartButton item={{ id: "test", type: "ant", name: "Test", price: 10, image: "/t.jpg" }} disabled />, { wrapper });
    expect(screen.getByText("Agotado")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
