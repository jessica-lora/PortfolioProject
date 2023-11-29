import ContactForm from "./ContactForm";
import { createRoot } from "react-dom/client";
import React from "react";

const App = () => {
  return (
    <div className="p-0 m-0 bg-my-pink rounded border-2">
      <header className="w-full text-center p-7 text-2xl">Portfolio</header>
      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
