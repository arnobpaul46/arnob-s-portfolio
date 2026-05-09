import ToastProvider from "./components/ToastProvider";
import "./globals.css";
import MainLayout from "./MainLayout/page";

export const metadata = {
  title: "Arnob Paul | Full Stack Developer",
  description: "Arnob Paul is a CSE student specializing in MERN Stack and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-500/30 scrollbar">
        <MainLayout>
          {children}
        </MainLayout>
        <ToastProvider/>
      </body>
    </html>
  );
}