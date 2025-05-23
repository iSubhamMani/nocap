import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RSVPMe",
  description: "Your event, your way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ConvexClientProvider>
          <AuthKitProvider>{children}</AuthKitProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
