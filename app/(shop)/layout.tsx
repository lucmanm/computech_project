import "@/styles/globals.css";
import ModalProvider from "@/hook/modal-provider";
import { Cairo } from "next/font/google";
import Header from "./_components/header-components/Header";
import { MobileButtomMenu } from "./_components/mobile-buttom-menu";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";

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
    <main className="flex h-screen min-h-screen flex-col">
      <Header className="z-30" />
      <ModalProvider />
      <main className="lg:container">
        {children}
      </main>
      <MobileButtomMenu />
      <Footer />
      <Toaster />
    </main>
  );
}
