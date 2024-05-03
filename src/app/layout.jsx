import { poppins } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Wedding Site || Digital Card",
  description: "Jawaban semua Kebutuhan undangan Anda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${poppins.className} bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
