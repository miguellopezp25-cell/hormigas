import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocationSection } from "@/components/location-section";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

describe("LocationSection form interaction", () => {
  it("should fill and submit the form", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const user = userEvent.setup();

    render(<LocationSection />);

    await user.type(screen.getByPlaceholderText("Tu nombre"), "Juan Pérez");
    await user.type(screen.getByPlaceholderText("tu@email.com"), "juan@test.com");
    await user.type(
      screen.getByPlaceholderText("Cuéntanos en qué podemos ayudarte..."),
      "Quiero una colonia"
    );

    await user.click(screen.getByRole("button", { name: /enviar por whatsapp/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const url = openSpy.mock.calls[0][0] as string;
    expect(url).toContain("wa.me");
    expect(decodeURIComponent(url)).toContain("Juan");
    expect(decodeURIComponent(url)).toContain("juan@test.com");
    expect(decodeURIComponent(url)).toContain("Quiero una colonia");

    openSpy.mockRestore();
  });
});
