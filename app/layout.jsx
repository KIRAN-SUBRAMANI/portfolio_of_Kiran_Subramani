import "./globals.css";

export const metadata = {
  title: "Portfolio of Kiran Subramani",
  description: "SWE portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}