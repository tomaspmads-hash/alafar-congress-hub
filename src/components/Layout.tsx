import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsletterSponsors } from "./NewsletterSponsors";

export function Layout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Header transparentOnTop={transparentHeader} />
      <main>{children}</main>
      <NewsletterSponsors />
      <Footer />
    </div>
  );
}
