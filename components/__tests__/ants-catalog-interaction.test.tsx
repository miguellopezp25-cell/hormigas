import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("AntsCatalog interaction", () => {
  it("should filter by search input", async () => {
    const user = userEvent.setup();
    render(<AntsCatalog />, { wrapper });

    expect(screen.getByText("Lasius Niger")).toBeInTheDocument();

    const search = screen.getByPlaceholderText("Buscar por nombre...");
    await user.type(search, "Messor");

    expect(screen.queryByText("Lasius Niger")).not.toBeInTheDocument();
    expect(screen.getByText("Messor Barbarus")).toBeInTheDocument();
  });

  it("should show empty state when no results match", async () => {
    const user = userEvent.setup();
    render(<AntsCatalog />, { wrapper });

    const search = screen.getByPlaceholderText("Buscar por nombre...");
    await user.type(search, "zzzzzzz");

    expect(screen.getByText(/no se encontraron/i)).toBeInTheDocument();
  });
});
