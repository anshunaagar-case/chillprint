import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import NavbarComponent from "./components/Navbar";

export default function AppComponent({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div>
        <NavbarComponent />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}
