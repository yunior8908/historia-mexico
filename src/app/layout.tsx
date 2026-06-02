import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { RouteTransition } from "./_components/RouteTransition";
import { cn } from "@/lib/cn";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Estudiar Historia de México",
    template: "%s · Historia de México",
  },
  description:
    "Banco de preguntas, flashcards y quiz sobre Historia de México, con la línea de tiempo de los Grandes Planes de la Nación como referencia visual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(inter.variable, display.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">
        <NuqsAdapter>
          <RouteTransition>{children}</RouteTransition>
        </NuqsAdapter>
      </body>
    </html>
  );
}
