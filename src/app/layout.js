import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/pageTransition";
import StairEffect from "@/components/StairEffect";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
