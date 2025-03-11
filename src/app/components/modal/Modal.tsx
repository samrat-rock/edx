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

      <div className="relative bg-white rounded-lg px-6 py-3 flex-grow max-h-[80vh] overflow-y-auto">
        <div className="font-bold">
          <h3 className="flex items-center gap-2 text-sm justify-center text-center">
            Would you like to choose some Preferences for college recommendations <CiCircleAlert className="text-base" />
          </h3>
        </div>

        <div className="py-3 lg:pl-2">
          <h3 className="lg:text-sm text-center pl-2 lg:text-left text-2xl font-bold">Location</h3>
          <ul className="lg:flex flex-wrap text-center   gap-2  pt-2">
            {data.locations.map((location, index) => (
              <li key={index} className="lg:border border-blue-300 px-3 py-5 rounded-full text-sm">
                {location}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-3 lg:pl-2">
          <h3 className="lg:text-sm text-center pl-2 lg:text-left text-2xl font-bold">Degree</h3>
          <ul className="lg:flex flex-wrap text-center   gap-2  pt-2">
            {data.degrees.map((degree, index) => (
              <li key={index} className="lg:border border-blue-300 px-3 py-5 rounded-full text-sm">
                {degree}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-3 lg:pl-2">
          <h3 className="lg:text-sm text-center pl-2 lg:text-left text-2xl font-bold">Faculty</h3>
          <ul className="lg:flex flex-wrap text-center   gap-2  pt-2">
            {data.faculties.map((faculty, index) => (
              <li key={index} className="lg:border border-blue-300 px-3 py-5 rounded-full text-sm">
                {faculty}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-3 lg:pl-4">
          <h3 className="lg:text-sm text-center pl-2 lg:text-left text-2xl font-bold">Budget</h3>
          <ul className="lg:flex flex-wrap text-center   gap-2  pt-2">
            {data.budgets.map((budget, index) => (
              <li key={index} className="lg:border border-blue-300 px-3 py-5 rounded-full text-sm">
                {budget}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-3 gap-4">
  <button className="px-6 py-4 border border-blue-300 rounded text-blue-500 font-bold">
    Skip for Now
  </button>
  <button onClick={onClose} className="px-6 py-4 bg-orange-500 text-white rounded text-xl font-bold">
    Save
  </button>
</div>
      </div>
    </div>
  );
};

export default Modal;