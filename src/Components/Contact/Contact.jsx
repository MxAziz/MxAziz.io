import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

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
              alert("Your Email Send.")
              form.current.reset();
        },
        (error) => {
            console.log("FAILED...", error.text);
            alert("Error Message:", error.text)
        }
      );
    };


      const contacts = [
        {
          icon: <FaPhoneAlt className="size-5" />,
          title: "Phone",
          info: "(+880) 1518939563",
        },
        {
          icon: <MdEmail className="size-5" />,
          title: "Email",
          info: "hereabdulaziz@gmail.com",
        },
        {
          icon: <FaLocationDot className="size-5" />,
          title: "Address",
          info: " Rajshahi, Bangladesh",
        },
      ];

  return (
    <div className=" pb-8">
      <h1 className="text-3xl md:text-4xl text-center  text-[#7E8083] font-bold mt-8 py-10 md:py-16 lg:py-20">
        C O N T A C T <span className="ml-3">M E</span>
      </h1>
      {/* email js */}
      <div className=" w-11/12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-around">
        {/* left  */}
        <div className=" border-2 lg:w-1/2 ml-8 lg:ml-0 lg:flex items-center justify-center">
          <div className=" mt-4 lg:mt-0 space-y-4 lg:space-y-6">
            {contacts.map((contact, idx) => {
              return (
                <div key={idx} className="flex items-center gap-4 lg:gap-6">
                  <span className=" p-2 md:p-3 lg:p-5 rounded-sm shadow-md shadow-black text-2xl md:text-3xl lg:text-4xl">
                    {contact.icon}
                  </span>
                  <div>
                    <span className="font-medium lg:text-lg">
                      {contact.title}
                    </span>
                    <p className="font-semibold lg:text-lg">{contact.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right */}
        <div className=" w-full ">
          <form
          ref={form}
          onSubmit={sendEmail}
          // className="flex flex-col w-10/12 lg:w-1/3 mx-auto lg:mr-12 mt-8 lg:mt-0 "
          className=" border-2 w-full flex flex-col mx-auto "
        >
          <label>Name</label>
          <input
            className="bg-[#2E3440] dark:bg-[#384143] border-2 rounded-xl w-full h-14 mb-4"
            type="text"
            name="from_name"
            required
          />
          <label>Email</label>
          <input
            className="bg-[#2E3440] dark:bg-[#384143] border-2 rounded-xl h-14 mb-4"
            type="email"
            name="from_email"
            required
          />
          <label>Message</label>
          <textarea
            className="bg-[#2E3440] dark:bg-[#384143] border-2 min-h-24 rounded-xl"
            name="message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="btn bg-gray-300 border-2 flex items-center justify-center px-4 py-2 rounded-xl cursor-pointer hover:shadow-lg mt-4 "
          />
        </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;
