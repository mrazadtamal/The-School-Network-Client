import "./contact.css";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Footer from "../HomePageComponents/Foooter";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lf50in",
        "template_4knku7b",
        formRef.current,
        "user_vGJhhsJuUOYrl06aX6RbR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <div>
      <AllUserNavbar/>
    <div className="c">

      <div className="c-wrapper">
        <div className="flex flex-col w-full lg:w-2/5 p-8 text-white">
          <p className="text-3xl md:text-5xl text-yellow-500 my-3 leading-relaxed md:leading-snug">
            Contact our team
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4">
            <svg
              className="inline-block fill-current mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            Dhaka, Bangladesh
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4">
            <svg
              className="inline-block fill-current mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>{" "}
            web.codingwizards@gmail.com
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4">
            <svg
              className="inline-block fill-current mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            +999333666
          </p>{" "}
          <br /> <br />
        </div>

        <div className="c-right">
          <p className="c-title text-secondary text-yellow-500  text-5xl">
            Get In Touch
          </p>
          {!done && (
            <form className="c-form" ref={formRef} onSubmit={handleSubmit}>
              <input
                className=" c-input   bg-primary border-2 border-gray-300 text-black  mr-4"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className=" c-input  bg-primary border-2 border-gray-300 text-black  "
                type="text"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="c-textarea bg-primary  border-2 rounded-md border-gray-300 text-black  "
                rows="4"
                placeholder="Message"
                name="message"
              />

              <button className="block w-28 text-white bg-yellow-400 text-sm font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 my-4">
                Submit
              </button>
            </form>
          )}
          {done && <h1 className="text-white mt-36 text-4xl"> Thank you</h1>}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
