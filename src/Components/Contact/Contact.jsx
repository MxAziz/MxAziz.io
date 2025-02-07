import React, { useRef } from 'react';
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
        <div className="">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              className="bg-[#2E3440] border-2"
              type="text"
              name="from_name"
            />
            <label>Email</label>
            <input
              className="bg-[#2E3440] border-2"
              type="email"
              name="from_email"
            />
            <label>Message</label>
            <textarea className="bg-[#2E3440] border-2" name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
};

export default Contact;