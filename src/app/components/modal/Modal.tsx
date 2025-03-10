import React from "react";
import { CiCircleAlert } from "react-icons/ci";

const data = {
  locations: ["USA", "Australia", "New Zealand", "Canada", "UK", "Pokhara", "Kathmandu", "Dharan", "Chitwan", "Add custom"],
  degrees: ["Master", "Diploma", "Bachelor", "Add Custom"],
  faculties: ["Business studies", "Software engineering", "Computer science", "Add custom"],
  budgets: ["10 LPA", "15 LPA", "5 LPA", "Add custom"]
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center px-4 md:px-14">
      <div className="absolute inset-0 bg-black opacity-25"></div>

      
      <div className="relative bg-white rounded-lg px-8 py-4 flex-grow ">
        <div className="font-bold">
          <h3 className="flex items-center gap-3">
            Would you like to choose some Preferences for college recommendations <CiCircleAlert />
          </h3>
        </div>

        <div className="py-5">
          <h3>Location</h3>
          <ul className="flex flex-wrap gap-3 pt-3">
            {data.locations.map((location, index) => (
              <li key={index} className="border border-blue-300 px-4 py-1 rounded-full">
                {location}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-5">
          <h3>Degree</h3>
          <ul className="flex flex-wrap gap-3 pt-3">
            {data.degrees.map((degree, index) => (
              <li key={index} className="border border-blue-300 px-4 py-1 rounded-full">
                {degree}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-5">
          <h3>Location</h3>
          <ul className="flex flex-wrap gap-3 pt-3">
            {data.locations.map((location, index) => (
              <li key={index} className="border border-blue-300 px-4 py-1 rounded-full">
                {location}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-5">
          <h3>Faculty</h3>
          <ul className="flex flex-wrap gap-3 pt-3">
            {data.faculties.map((faculty, index) => (
              <li key={index} className="border border-blue-300 px-4 py-1 rounded-full">
                {faculty}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-5">
          <h3>Budget</h3>
          <ul className="flex flex-wrap gap-3 pt-3">
            {data.budgets.map((budget, index) => (
              <li key={index} className="border border-blue-300 px-4 py-1 rounded-full">
                {budget}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
