import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: {
    template: "%s | Persona.fm Docs",
    default: "Persona.fm Docs",
  },
  description: "Documentation for Persona.fm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              <div
                style={{
                  background:
                    "linear-gradient(45deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                }}
                className="container ml-4 md:ml-12 max-w-[90%] rounded-xl p-4 md:p-12 markdown"
              >
                {children}
              </div>
              <br />
              <div>
                <Footer />
              </div>
              <div className="fixed bottom-4 right-4">
                <ModeToggle />
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
