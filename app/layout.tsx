import "@/styles/globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "CompuTech",
  description:
    "An Online Computer Store Selling Desktop Computer, Laptop, Printer, Servers etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
