import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "ToDo v2",
  description: "ToDo app v2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <main className="max-w-xl w-full">
          <Header />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
