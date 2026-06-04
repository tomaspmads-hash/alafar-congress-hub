import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LanguageModal } from "./LanguageModal";
import "@/i18n";

export function Layout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <LanguageModal />
      <Header transparentOnTop={transparentHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
