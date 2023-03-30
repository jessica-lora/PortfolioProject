import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_coh2vt8",
        "template_xeyk6ua",
        form.current,
        "o236Q-PmoRxHfgwWV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="">
      <div className="m-32 p-9">
        <h2 className="title-text"> Contact Us</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" required />
        </div>
        <button className="btn-form" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
