"use client"
import React from 'react'


// import { CiFacebook } from "react-icons/ci";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { CiTwitter } from "react-icons/ci";  




type CollageComponentsProps = {
  params: { id: string };
  activeSection: string; 
};

function CollageComponents({  activeSection }: CollageComponentsProps) {

  return (
    <>
      <section>

      

        {activeSection === 'about' && (
          <div className="lg:px-10">
            <h3 className="font-bold pb-2">About College</h3>
            <div className="border border-gray-300">
              <p className="py-4 px-5">
                is a modern and best college in Nepal dedicated to excellence with practical-based education.
                Being an institution with a long history, has developed many leaders and entrepreneurs. It
                assures that every student is technically competent.
              </p>
              <div className="flex p-4">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
                  <iframe
                    className="lg:w-4xl h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96"
                    src="https://www.youtube.com/embed/kaHDlzuyK_Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other sections */}
        {/* Repeat similar structure for other sections like "Why this College", "Services", etc. */}

      </section>
    </>
  );
}

export default CollageComponents;




