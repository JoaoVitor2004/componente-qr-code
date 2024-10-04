import Image from "next/image";
import QrCode from './assets/images/image-qr-code.png'
import "./styles/page.css";

export const metadata = {
  title: "Component qr code",
  description: "qr code component",
  author: 'João Vitor de Souza',
  icons: {
    icon:['/favicon/favicon.png']
  }
};

export default function Home() {

  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="card p-3 pb-5 rounded-3 border-0 shadow text-center position-relative">
        <Image src={QrCode} className="w-100 h-100 mb-3 rounded-3" alt="image of qr code" />
        <h1 className="fs-5 fw-bold mb-3 title">Improve your front-end skills by building projects</h1>
        <p className="paragrafy m-auto">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        <div className="position-absolute top-0 right-0 bg-white shadow p-4 largura rounded-2 d-flex gap-4 align-items-center justify-content-center">
          <p className="fw-bold m-0">Component qr code</p>
          <i className="bi bi-qr-code-scan"></i>
        </div>
      </div>
    </main>
  );
}