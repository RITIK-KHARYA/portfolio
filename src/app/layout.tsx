import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritik Kharya - Full Stack Developer",
  description:
    "Portfolio of Ritik Kharya, a 19-year-old tech enthusiast and full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
