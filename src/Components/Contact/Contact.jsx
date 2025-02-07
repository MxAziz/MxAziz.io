import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g2g4xob", "template_2g44iis", form.current, {
        publicKey: "0TgFqhpIdVDHdEh-z",
      })
      .then(
        () => {
              console.log("SUCCESS!");
              form.rest();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-center  text-[#7E8083] font-bold py-20">
        C O N T A C T <span className="ml-3">U S</span>
      </h1>
      {/* email js */}
          <div className="flex justify-around items-center">
              <div className="">hey</div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <label>Name</label>
          <input
            className="bg-[#2E3440] border-2 rounded-xl w-full h-12"
            type="text"
            name="from_name"
            required
          />
          <label>Email</label>
          <input
            className="bg-[#2E3440] border-2 rounded-xl h-12"
            type="email"
            name="from_email"
            required
          />
          <label>Message</label>
          <textarea className="bg-[#2E3440] border-2 min-h-20 rounded-xl" name="message" required />
          <input type="submit" value="Send" className=" cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
