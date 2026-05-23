import ToastProvider from "./components/ToastProvider";
import "./globals.css";
import MainLayout from "./MainLayout/page";

export const metadata = {
  title: "Arnob Paul | Full Stack Developer",
  description: "Arnob Paul is a CSE student specializing in MERN Stack and Next.js.",
  keywords: [
    "Arnob Paul",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Frontend Developer Bangladesh",
    "Portfolio Website",
    "Web Developer CSE Student"
  ],
  icons: {
    icon: "favicon.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased selection:bg-blue-500/30 no-scrollbar">
        <MainLayout>
          {children}
        </MainLayout>
        <ToastProvider/>
      </body>
    </html>
  );
}