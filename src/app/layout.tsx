import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM Kanban - Sales Pipeline Manager",
  description: "Manage your sales pipeline with our intuitive CRM Kanban board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedIn>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 bg-gray-50">
                {children}
              </main>
            </div>
          </SignedIn>
          <SignedOut>
            {children}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
