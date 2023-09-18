import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
import AuthProvider from "./auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    openGraph: {
        title: "...",
        description: "...",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="winter">
            <body className={poppins.className}>
                <AuthProvider>
                    <NavBar />
                    <main className="p-5">
                        <Suspense fallback={<p>Loading...</p>}>
                            {children}
                        </Suspense>
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
