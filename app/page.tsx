import dynamic from "next/dynamic";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";

const ReviewsSection = dynamic(() => import("@/components/reviews-section").then((m) => ({ default: m.ReviewsSection })));
const BlogSection = dynamic(() => import("@/components/blog-section").then((m) => ({ default: m.BlogSection })));
const LocationSection = dynamic(() => import("@/components/location-section").then((m) => ({ default: m.LocationSection })));
const ContactSection = dynamic(() => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })));

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <ReviewsSection />
          <BlogSection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
