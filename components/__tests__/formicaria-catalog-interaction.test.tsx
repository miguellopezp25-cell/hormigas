import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("FormicariaCatalog interaction", () => {
  it("should filter by search input", async () => {
    const user = userEvent.setup();
    render(<FormicariaCatalog />, { wrapper });

    expect(screen.getByText("Hormiguero Acrílico Modular S")).toBeInTheDocument();

    const search = screen.getByPlaceholderText("Buscar hormiguero...");
    await user.type(search, "Ytong");

    expect(screen.queryByText("Hormiguero Acrílico Modular S")).not.toBeInTheDocument();
    expect(screen.getByText("Hormiguero Ytong Natural")).toBeInTheDocument();
  });

  it("should show empty state when no results match", async () => {
    const user = userEvent.setup();
    render(<FormicariaCatalog />, { wrapper });

    const search = screen.getByPlaceholderText("Buscar hormiguero...");
    await user.type(search, "zzzzzzz");

    expect(screen.getByText(/no se encontraron/i)).toBeInTheDocument();
  });
});
