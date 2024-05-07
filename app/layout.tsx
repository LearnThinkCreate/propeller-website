import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { MenuBar } from "@/components/menu-bar";

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   title: "Propeller Interview",
   description: "Demo Web App for Propeller Interview",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html suppressHydrationWarning lang="en">
         <body
            className={cn(
               "bg-background font-sans antialiased",
               fontSans.variable
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               {/* <div className="relative flex overflow-hidden"> */}
               <div className="flex flex-col min-h-screen">
                  <MenuBar />
                  {children}
               </div>
               <Analytics />
               <TailwindIndicator />
            </ThemeProvider>
         </body>
      </html>
   );
}
