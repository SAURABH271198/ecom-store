import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import { CssBaseline, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Store",
  description: "Your one-stop shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Header />
        <Container maxWidth={'xl'} sx={{ mt: 4 }}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
