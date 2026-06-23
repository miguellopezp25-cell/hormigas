import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) =>
    <img alt={alt} {...props} />,
}));

describe("Footer", () => {
  it("should render the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Imperio Hormiga")).toBeInTheDocument();
  });

  it("should render footer sections", () => {
    render(<Footer />);
    expect(screen.getByText("Tienda")).toBeInTheDocument();
    expect(screen.getByText("Información")).toBeInTheDocument();
    expect(screen.getByText("Legal")).toBeInTheDocument();
  });

  it("should render social links", () => {
    render(<Footer />);
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
  });

  it("should render copyright with current year", () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
  });
});
