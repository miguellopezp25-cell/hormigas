import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("CartDrawer", () => {
  it("should not render when closed", () => {
    render(<CartDrawer />, { wrapper });
    expect(screen.queryByText(/carrito/i)).not.toBeInTheDocument();
  });

  it("should render items and total when open", async () => {
    const user = userEvent.setup();

    function TestHarness() {
      const { addItem, setIsOpen } = useCart();
      return (
        <div>
          <button onClick={() => {
            addItem({ id: "test-ant", type: "ant", name: "Test Ant", price: 30, image: "/a.jpg" });
            setIsOpen(true);
          }}>
            Add and Open
          </button>
          <CartDrawer />
        </div>
      );
    }

    render(<TestHarness />, { wrapper });

    await user.click(screen.getByText("Add and Open"));

    const cartHeadings = screen.getAllByText(/carrito/i);
    expect(cartHeadings.length).toBeGreaterThan(0);
    expect(screen.getByText("Test Ant")).toBeInTheDocument();
    expect(screen.getAllByText(/\$30/).length).toBeGreaterThan(0);
    expect(screen.getByText("Cotizar por WhatsApp")).toBeInTheDocument();
  });
});
