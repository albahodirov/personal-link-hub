import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

export const metadata: Metadata = {
    title: "Alisher Bahodirov",
    description: "Flutter Developer | Creative UI/UX",
    icons: {
        icon: "/profile.png"
    },
    openGraph: {
        title: "Alisher Bahodirov",
        description: "Building the next generation of mobile apps with Flutter",
        type: "website",
        images: [{ url: "/profile.jpg", width: 800, height: 600 }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CustomCursor />
                <div className="bg-noise" />
                {children}
                <Toaster position="bottom-center" theme="dark" />
            </body>
        </html>
    );
}
