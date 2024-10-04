import "./styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="corpo">
        {children}
      </body>
    </html>
  );
}