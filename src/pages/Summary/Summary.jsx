import React from "react";
import Confetti from "react-confetti";
import { Footer, Navbar } from "../../components";

export function Summary() {
  return (
    <div className="flex-column">
      <Confetti numberOfPieces={1500} gravity={0.15} recycle={false} />
      <Navbar />
      <main className="pos-rel min-h-95 flex-column flex-center">
        <div className="h1">Order successfully placed!</div>
        <div className="h3">Thank you for shopping with us!</div>
        <div className="h4">🚀</div>
      </main>
      <Footer />
    </div>
  );
}
