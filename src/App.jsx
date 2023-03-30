import ContactForm from "./ContactForm";
import { createRoot } from "react-dom/client";
import React from "react";

const App = () => {
  return (
    <div className="names">
      <ContactForm />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
