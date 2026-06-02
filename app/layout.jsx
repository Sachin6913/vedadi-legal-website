import "../styles.css";
import DisclaimerModal from "../components/DisclaimerModal";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "Vedadi Legal",
  description: "Strategic legal excellence for corporate, dispute, tax, IP, and advisory matters."
};

export default function RootLayout({ children }) {
  const appShell = (
    <ThemeProvider>
      <DisclaimerModal />
      <SiteHeader />
      {children}
      <Footer />
    </ThemeProvider>
  );

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{appShell}</body>
    </html>
  );
}
