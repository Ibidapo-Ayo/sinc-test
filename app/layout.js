import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ibidapo Ayomide Sinc Test",
  description: "This is the submission for the sinc test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg h-full`}>{children}</body>
    </html>
  );
}
