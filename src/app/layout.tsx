import { useLocalStorage } from "@/utils/hooks";
import Layout from "./components/Layout";
import "./globals.css";

export const metadata = {
  title: "JSON Translator",
  description: "App to translate JSON files",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
