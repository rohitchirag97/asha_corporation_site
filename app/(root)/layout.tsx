import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import SupportSection from "../components/SupportSection";

export const metadata: Metadata = {
  title: "Asha Corporation - India's Leading Hot Water Products Manufacturer",
  description:
    "Manufacturer of Heat Pump Water Heater, Gas Fired Water Heater, Glass Tube Solar Water Heater, Flat Plate Solar Water Heater, Wood Fired Water Heater, Electric Storage Water Heater, Chemical Waporiser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <SupportSection /> 
      <Footer />
      <FloatingButton />
    </main>
  );
}
