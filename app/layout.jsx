import Header from "../components/Header";
import styles from "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> Tech News </title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
