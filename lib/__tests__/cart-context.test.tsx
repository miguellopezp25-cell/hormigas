import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart, CART_STORAGE_KEY } from "@/lib/cart-context";
import type { ReactNode } from "react";

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

describe("useCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should start with empty cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it("should add an item", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: "test-1", type: "ant", name: "Test Ant", price: 50, image: "/test.jpg" });
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(1);
    expect(result.current.totalItems).toBe(1);
    expect(result.current.totalPrice).toBe(50);
  });

  it("should increment quantity when adding same item", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: "test-1", type: "ant" as const, name: "Test Ant", price: 50, image: "/test.jpg" };
    act(() => result.current.addItem(item));
    act(() => result.current.addItem(item));
    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
    expect(result.current.totalPrice).toBe(100);
  });

  it("should remove an item", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: "test-1", type: "ant", name: "Test Ant", price: 50, image: "/test.jpg" });
    });
    act(() => {
      result.current.removeItem("test-1");
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
  });

  it("should update quantity", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: "test-1", type: "ant", name: "Test Ant", price: 50, image: "/test.jpg" });
    });
    act(() => {
      result.current.updateQuantity("test-1", 3);
    });
    expect(result.current.items[0].quantity).toBe(3);
    expect(result.current.totalPrice).toBe(150);
  });

  it("should clear cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: "test-1", type: "ant", name: "Test Ant", price: 50, image: "/test.jpg" });
      result.current.addItem({ id: "test-2", type: "formicarium", name: "Test Form", price: 100, image: "/test2.jpg" });
    });
    act(() => {
      result.current.clearCart();
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it("should handle multiple items correctly", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => {
      result.current.addItem({ id: "ant-1", type: "ant", name: "Ant 1", price: 30, image: "/a.jpg" });
      result.current.addItem({ id: "form-1", type: "formicarium", name: "Form 1", price: 80, image: "/f.jpg" });
    });
    expect(result.current.items).toHaveLength(2);
    expect(result.current.totalItems).toBe(2);
    expect(result.current.totalPrice).toBe(110);
  });
});
