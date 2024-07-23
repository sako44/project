import React from "react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="container px-6 mx-auto lg:px-32 py-4 flex flex-col space-y-5">
        <div className="border border-transparent flex overflow-hidden items-center whitespace-nowrap  bg-gray-400 md:text-md">
          <h1 className="bg-[#ff002b] text-white rounded-sm py-[13px] px-3 font-semibold absolute z-20 -ml-1">
            {" "}
            News :
          </h1>
          <div className=" inline-block  animate-slide py-3">
            <h1 className="inline-block   mx-[40px] md:mx-12">
              {" "}
              09:00 Tragedy at Trump rally upends election campaign for now
            </h1>
            <h1 className="inline-block  mx-[40px] md:mx-12">
              {" "}
              10:00 Biden urges America to 'lower temperature' after Trump
              shooting
            </h1>
            <h1 className="inline-block  mx-[40px] md:mx-12">
              {" "}
              22:00 Heartbreak for England as Spain score late goal to win Euro
              2024
            </h1>
          </div>
          <div className=" inline-block animate-slide py-3 ">
            <h1 className="inline-block   mx-[40px] md:mx-12">
              {" "}
              09:00 Tragedy at Trump rally upends election campaign for now
            </h1>
            <h1 className="inline-block  mx-[40px] md:mx-12">
              {" "}
              10:00 Biden urges America to 'lower temperature' after Trump
              shooting
            </h1>
            <h1 className="inline-block  mx-[40px] md:mx-12">
              {" "}
              22:00 Heartbreak for England as Spain score late goal to win Euro
              2024
            </h1>
          </div>
        </div>
        <div className="flex flex-col  xl:flex-row  bg-gray-100 py-5 px-5">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold py-3">
              Trading News
            </h1>
            <img className="lg:w-[90%]" src="public/new-1.jpg" alt="" />
          </div>

          <div className="flex flex-col ">
            <h1 className="text-xl font-semibold max-w-[480px] lg:max-w-full py-3">
              'Loner' and 'nice': Complex portrait of gunman in Trump
              assassination attempt emerges
            </h1>
            <p>
              <span className="text-primary font-semibold">A 20-year-old</span>{" "}
              Pennsylvania man is suspected to be the gunman who attempted to
              assassinate former President Donald Trump on Saturday, firing
              several shots and killing at least one spectator, federal and
              local law enforcement agencies said. <br />
              <span className="text-primary font-semibold">The FBI </span>
              early on Sunday identified the suspect, who was killed at the
              scene, as Thomas Matthew Crooks, of Bethel Park. Firefighter Corey
              Comperatore, a dad who was attending the rally was killed and two
              other bystanders injured. The FBI did not "currently have an
              identified motive, although our investigators are working
              tirelessly to attempt to identify what that motive was,"
              Pittsburgh Special Agent in Charge Kevin Rojek said.
              <br />
              <span className="text-primary font-semibold">The highest </span>
              priority is being placed on determining motive because the bureau
              is also looking at the shooting as a "potential domestic terrorism
              act," said Robert Wells, the FBI’s assistant director of the
              Counterterrorism Division.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Landing;
