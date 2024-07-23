import React from "react";
import FooterSections from "../util/FooterSections";

function Footer() {
  return (
    <>
      <footer className="bg-stone-950 mt-24">
        <div className="md:max-lg:px-16 container py-10 md:px-60 mx-auto flex items-center flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between">
          <div className="flex flex-col space-y-10 items-center">
            <img className="w-16" src="public/vite.svg" alt="" />
            <div className="flex space-x-3">
              <i className="ri-facebook-fill text-2xl text-secondary "></i>
              <i className="ri-twitter-fill text-2xl text-secondary"></i>
              <i className="ri-instagram-fill text-2xl text-secondary"></i>
              <i className="ri-youtube-fill text-2xl text-secondary"></i>
            </div>
          </div>
          <div className="flex space-x-24 md:space-x-7 text-white ">
            <div className="flex flex-col space-y-3">
              <FooterSections text="Company" />
              <FooterSections text="About" />
              <FooterSections text="Press" />
              <FooterSections text="Blog" />
            </div>
            <div className="flex flex-col space-y-3">
              <FooterSections text="Products" />
              <FooterSections text="Download" />
              <FooterSections text="Pricing" />
              <FooterSections text="Locations" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
