function CollageNumber() {
  return (
    <div className="lg:flex gap-5 lg:px-20 py-10 justify-center">
    
      <div className="flex flex-col lg:items-center lg:justify-center p-6 rounded-md px-10 flex-grow">
        <span className="lg:text-8xl text-3xl pl-14 lg:pl-2 font-bold text-[#007296]">24</span>
        <span className="text-[#007296] text-xl font-bold pl-2">Total Application</span>
      </div>

      
      <div className="flex flex-col items-center justify-center w-56 mt-10 py-10 lg:py-0 lg:mt-0 rounded-md bg-green-100 flex-grow">
        <span className="text-3xl text-[#027A48]">8</span>
        <span className="text-[#027A48]">Accepted</span>
      </div>

  
      <div className="flex flex-col items-center justify-center w-56 mt-10 py-10 lg:py-0 lg:mt-0 rounded-md bg-red-100 flex-grow">
        <span className="text-3xl text-[#B42318]">2</span>
        <span className="text-[#B42318]">Rejected</span>
      </div>

      
      <div className="flex flex-col items-center justify-center w-56 mt-10 py-10 lg:py-0 lg:mt-0 rounded-md bg-gray-100 flex-grow">
        <span className="text-3xl text-[#344054]">13</span>
        <span className="text-[#344054]">Pending</span>
      </div>
    </div>
  );
}

export default CollageNumber;
