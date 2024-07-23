import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.section
        className="mt-12 mb-32 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="container flex flex-col items-center max-sm:px-0 max-md:px-12  mx-auto md:px-2 py-5 md:max-lg:px-16 lg:px-32 ">
          <form
            action=""
            className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]"
          >
            <div className="flex flex-col px-16 lg:px-0  space-y-5 items-start  text-left">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <input
                required
                type="text"
                placeholder="Full Name"
                name="Full Name"
                className="border-2 max-sm:w-[250px]   max-md:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[50%] rounded-md border-gray-500
              focus:outline-primary
               p-2"
              />
              <input
                required
                type="email"
                placeholder="Email"
                name="Email"
                className="border-2 max-sm:w-[280px]  max-md:w-[70%] md:w-[80%] lg:w-[50%] xl:w-[50%] rounded-md border-gray-500
              focus:outline-primary  p-2"
              />
              <textarea
                required
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="border-2 max-sm:w-[300px]  max-md:w-[400px] sm:w-[100%] md:w-full lg:w-[80%] xl:w-[80%] rounded-md border-gray-500
              focus:outline-primary p-2"
              ></textarea>
              <button
                className="bg-[#ff002b] self-center md:self-start hover:bg-primary hover:
             rounded-full text-white py-3 px-12"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default Contact;
