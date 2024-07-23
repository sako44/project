import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import photo from "../assets/about-us.jpg";

function AboutUs() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="container mx-auto flex flex-col  px-7 py-5 space-y-12">
          <img src={photo} alt="" />
          <h1 className="text-3xl font-bold text-left">
            The BBC is the world’s leading public service broadcaster
          </h1>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform,
            educate and entertain millions of people in the UK and around the
            world.
          </p>
          <p>We do this across:</p>
          <ul className=" list-disc flex flex-col space-y-3">
            <li className="-mt-6">
              A portfolio of television services, including the UK’s
              most-watched channel BBC One and our multi award-winning channels
              for children, as well as national and regional television
              programmes and services across England, Northern Ireland, Scotland
              and Wales
            </li>
            <li>
              Our digital services including BBC News, Sport, Weather CBBC and
              CBeebies, iPlayer and BBC Sounds, BBC Red Button and our vast
              archive
            </li>
            <li>
              Ten UK-wide radio networks, providing the best live music
              broadcasting in the UK, as well as speech radio which informs,
              educates and entertains. We also have two national radio services
              each in Scotland, Wales and Northern Ireland and local radio
              stations across England and the Channel Islands, providing an
              invaluable and unique service to listeners across the UK
            </li>
            <li>
              <span className="font-semibold underline">
                BBC World Service television
              </span>
              , radio and online on more than 40 languages
            </li>
          </ul>
          <p>
            Established by a{" "}
            <span className="font-semibold underline">Royal Charter</span> , the
            BBC is principally funded through the{" "}
            <span className="font-semibold underline">licence fee</span> paid by
            UK households. Our role is to{" "}
            <span className="font-semibold underline">
              fulfil our mission and promote our Public Purposes.
            </span>
          </p>
          <p>
            <span className="font-semibold underline">
              Our commercial operations
            </span>{" "}
            including BBC Studios, the BBC’s award-winning production company
            and world-class distributor, provide additional revenue for
            investment in new programming and services for UK audiences.
          </p>
          <p></p>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default AboutUs;
