import { describe, it, expect } from "vitest";
import { antSpecies, formicaria, blogPosts, reviews, storeInfo } from "@/lib/data";

describe("antSpecies", () => {
  it("should have at least one species", () => {
    expect(antSpecies.length).toBeGreaterThan(0);
  });

  it("each species should have required fields", () => {
    for (const ant of antSpecies) {
      expect(ant.id).toBeTruthy();
      expect(ant.name).toBeTruthy();
      expect(ant.scientificName).toBeTruthy();
      expect(["Principiante", "Intermedio", "Avanzado"]).toContain(ant.difficulty);
      expect(ant.price).toBeGreaterThan(0);
      expect(["tropical", "desertica", "templada"]).toContain(ant.category);
      expect(typeof ant.inStock).toBe("boolean");
    }
  });

  it("should have unique ids", () => {
    const ids = antSpecies.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("formicaria", () => {
  it("should have at least one formicarium", () => {
    expect(formicaria.length).toBeGreaterThan(0);
  });

  it("each formicarium should have required fields", () => {
    for (const f of formicaria) {
      expect(f.id).toBeTruthy();
      expect(f.name).toBeTruthy();
      expect(f.material).toBeTruthy();
      expect(typeof f.modular).toBe("boolean");
      expect(f.price).toBeGreaterThan(0);
      expect(f.features.length).toBeGreaterThan(0);
      expect(["acrilico", "ytong", "vidrio", "3d", "natural"]).toContain(f.category);
    }
  });

  it("should have unique ids", () => {
    const ids = formicaria.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("blogPosts", () => {
  it("should have at least one post", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("each post should have required fields", () => {
    for (const post of blogPosts) {
      expect(post.id).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.author).toBeTruthy();
      expect(post.content).toBeTruthy();
    }
  });

  it("should have unique slugs", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("reviews", () => {
  it("should have at least one review", () => {
    expect(reviews.length).toBeGreaterThan(0);
  });

  it("each review should have valid rating", () => {
    for (const review of reviews) {
      expect(review.rating).toBeGreaterThanOrEqual(1);
      expect(review.rating).toBeLessThanOrEqual(5);
    }
  });
});

describe("storeInfo", () => {
  it("should have required fields", () => {
    expect(storeInfo.name).toBe("Imperio Hormiga");
    expect(storeInfo.slogan).toBeTruthy();
    expect(storeInfo.phone).toBeTruthy();
    expect(storeInfo.whatsapp).toBeTruthy();
    expect(storeInfo.email).toContain("@");
    expect(storeInfo.address).toBeTruthy();
    expect(storeInfo.hours.weekdays).toBeTruthy();
    expect(storeInfo.social.instagram).toBeTruthy();
    expect(storeInfo.social.facebook).toBeTruthy();
  });
});
