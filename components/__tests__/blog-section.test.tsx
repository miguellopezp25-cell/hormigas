import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogSection } from "@/components/blog-section";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}));

describe("BlogSection", () => {
  it("should render the section title", () => {
    render(<BlogSection />);
    expect(screen.getByText("Aprende sobre el Mundo de las Hormigas")).toBeInTheDocument();
  });

  it("should render blog posts", () => {
    render(<BlogSection />);
    expect(screen.getByText("Guía para principiantes: Cómo iniciar tu primera colonia de hormigas")).toBeInTheDocument();
  });

  it("should render author as Imperio Hormiga", () => {
    render(<BlogSection />);
    const authors = screen.getAllByText("Imperio Hormiga");
    expect(authors.length).toBeGreaterThan(0);
  });
});
