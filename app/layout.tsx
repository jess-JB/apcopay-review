import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "./@header/page";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} h-screen w-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
