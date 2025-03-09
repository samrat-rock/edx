import React from "react";
import { GiEgyptianProfile } from "react-icons/gi";
import { IoAddSharp, IoLocationOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { RiSchoolLine } from "react-icons/ri";

const studentDetails = [
  { icon: <CiMail />, label: "longemallexample@email.com" },
  { icon: <FaPhoneAlt />, label: "+977 9841526369" },
  { icon: <FaGraduationCap />, label: "Bachelor's Degree" },
  { icon: <RiSchoolLine />, label: "The Times International College" },
  { icon: <IoLocationOutline />, label: "Pembroke Pines, Florida" },
];

const studentPreferences = [
  "Masters",
  "USA",
  "Computer Science",
  "Australia",
  "Business Studies",
  "UK",
  "Software Engineering",
];

function ProfilePage() {
  return (
    <section className="bg-gray-100">
      <div className="md:px-5">
        <div className="bg-white">
          <div className="relative bg-gradient-to-br from-[#2d2e2f] via-[#5B666C] to-[#1C1F21] text-white rounded-xl lg:h-44 p-4 lg:flex flex-col md:flex-row md:justify-between md:items-end lg:pl-20">
            <div className="lg:flex items-center flex-grow">
              <div className="lg:border-4 border-blue-500 lg:bg-gray-100 rounded-full p-3 flex items-center justify-center lg:-mb-20 relative">
                <GiEgyptianProfile className="text-9xl  text-black" />
              </div>
              <div className="lg:ml-4 lg:pt-20 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold">Birendra Bikram</h3>
                <p>@birendra</p>
              </div>
            </div>
            <div className="lg:flex flex-col space-y-2 justify-end md:space-y-0 md:flex-row md:space-x-2 mt-4 md:mt-0 pl-20 flex-grow">
              <button className="bg-[#CBCBC9] text-black px-6 py-2 rounded-2xl flex items-center gap-2">
                <IoAddSharp className="text-xl" /> Public View
              </button>
              <button className="bg-[#CBCBC9] text-black px-6 py-2 rounded-2xl flex items-center gap-2 ">
                <GoPencil className="text-xl" /> Edit Profile
              </button>
            </div>
          </div>

          <div className="lg:flex">
            <div className="lg:pl-20 lg:pb-10 flex-grow">
              <div className="lg:pt-30 pt-5">
                <h3 className="font-bold text-2xl pb-5">Student Details</h3>
                {studentDetails.map((detail, index) => (
                  <p key={index} className="flex gap-3 items-center pt-5 text-base">
                    {detail.icon} {detail.label}
                  </p>
                ))}
              </div>

              <div className="pt-5 ">
                <h3 className="text-2xl font-bold pb-5">Student Preference</h3>
                <div className="flex flex-wrap gap-2">
                  {studentPreferences.map((preference, index) => (
                    <button
                      key={index}
                      className="bg-gray-200 py-4 px-7 rounded-full border text-center"
                    >
                      {preference}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-20 lg:px-20 flex-grow">
              <div>
                <div className="lg:flex grid-col-3 font-bold space-x-48">
                  <h3 className="font-bold border-b-4 border-yellow-600 lg:pb-5">
                    Academics
                  </h3>
                  <h3 className="font-bold text-xl opacity-50">Activity</h3>
                  <h3 className="font-bold text-xl opacity-50">Collections</h3>
                </div>

                <div className="pt-8">
                  <div className="pt-5">
                    <h3 className="Font-bold text-3xl pb-6 ">Currnet Academics</h3>
                    <p className="font-bold">Enrolled Collage</p>
                    <span>California State University, East Bay</span>
                  </div>

                  <div className="pt-5 pb-5">
                    <h3 className="font-bold">Course</h3>
                    <p>Bsc. (Hons)</p>
                  </div>

                  <div>
                    <p className="font-bold pt-3">Enrolled Collage</p>
                    <span>California State University, East Bay</span>
                  </div>
                </div>

                <div>
                  <div className="pt-3">
                    <div className="pt-5">
                      <h3 className="Font-bold text-3xl pb-6 ">Test Score</h3>
                    </div>

                    <div className="lg:flex items-center">
                      <div>
                        <div className="pb-3 lg:pl-2">
                          <h3 className="font-bold">Ielts</h3>
                          <p>3.0</p>
                        </div>

                        <div className="lg:pl-2">
                          <p className="font-bold pt-3">Under Gradguate</p>
                          <span>3.0(est)</span>
                        </div>
                      </div>

                      <div className="pb-3 py-4 lg:pl-20">
                        <h3 className="font-bold">Ielts</h3>
                        <p>3.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
