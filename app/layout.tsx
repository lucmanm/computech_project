import "@/styles/globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

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
            <body className="tb:text-sm relative bg-slate-100 text-sm  font-normal">
                {children}
            </body>
        </html>
    );
}
