import { ProductLayoutClient } from "@/components/product-layout-client";

export default function AntsLayout({ children }: { children: React.ReactNode }) {
  return <ProductLayoutClient>{children}</ProductLayoutClient>;
}
