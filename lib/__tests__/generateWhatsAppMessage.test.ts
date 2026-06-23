import { describe, it, expect } from "vitest";
import { generateWhatsAppMessage, type CartItem } from "@/lib/cart-context";

describe("generateWhatsAppMessage", () => {
  it("should generate message with items and total", () => {
    const items: CartItem[] = [
      { id: "1", type: "ant", name: "Lasius Niger", price: 25, quantity: 2, image: "/a.jpg" },
      { id: "2", type: "formicarium", name: "Hormiguero Acrílico", price: 45, quantity: 1, image: "/f.jpg" },
    ];
    const result = decodeURIComponent(generateWhatsAppMessage(items, 95));
    expect(result).toContain("Lasius Niger x2");
    expect(result).toContain("Hormiguero Acrílico x1");
    expect(result).toContain("Total estimado: $95");
    expect(result).toContain("disponibilidad");
  });

  it("should handle empty cart", () => {
    const result = decodeURIComponent(generateWhatsAppMessage([], 0));
    expect(result).toContain("Total estimado: $0");
  });

  it("should encode special characters for URL", () => {
    const result = generateWhatsAppMessage([], 0);
    expect(result).toContain("%C2%A1Hola"); // ¡ encoded
    expect(result).not.toContain("¡Hola");
  });
});
