import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReviewsSection } from "@/components/reviews-section";

describe("ReviewsSection", () => {
  it("should render the section title", () => {
    render(<ReviewsSection />);
    expect(screen.getByText("Lo que Dicen Nuestros Clientes")).toBeInTheDocument();
  });

  it("should render customer reviews", () => {
    render(<ReviewsSection />);
    const carlos = screen.getAllByText("Carlos Mendoza");
    expect(carlos.length).toBeGreaterThan(0);
    const maria = screen.getAllByText("María García");
    expect(maria.length).toBeGreaterThan(0);
  });
});
