import { useRef } from "react";
import emailjs from "@emailjs/browser";
import paper_plane from ".images/plane.png";

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
    <section className="flex justify-center ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col box-content h-96 w-70 p-2 rounded-lg border-2 border-black"
      >
        <div className="">
          <h2 className="p-6 text-center text-xl"> Get in touch</h2>
          <img className="img-fluid d-flex" src={paper_plane} alt="plane"></img>
        </div>
        <div>
          <label className="" htmlFor="name">
            {" "}
          </label>
          <input
            placeholder="name"
            className=" bg-my-white mb-6 block w-72 border-0 border-b-2 border-my-teal
            focus:ring-0 focus:border-black rounded-md"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email"> </label>
          <input
            placeholder="email"
            className="bg-my-white mb-6 block w-72 border-0 border-b-2 border-my-teal
            focus:ring-0 focus:border-black rounded-md"
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message"> </label>
          <textarea
            placeholder="message"
            className=" bg-my-white mb-6 block w-72 border-0 border-b-2 border-my-teal
            focus:ring-0 focus:border-black rounded-md"
            name="message"
            required
          />
        </div>
        <button
          className="btn-form hover:bg-my-teal font-bold py-2  rounded border-2 border-black "
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
