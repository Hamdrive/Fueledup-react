import React from "react";
import { Footer, Navbar } from "../../components";

export function UserProfile() {
  return (
    <>
      <Navbar />
      <main className="pos-rel min-h-95 flex-column flex-center">
        <div className="h1">This is a user Profile page</div>
      </main>
      <Footer />
    </>
  );
}
