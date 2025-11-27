import "./globals.css";
import { Navbar } from "@/components/navbar";
import { LoginProvider } from "@/context/login";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <LoginProvider>
          <Navbar/>
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
