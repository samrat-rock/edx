function CollageNumber() {
  return (
    <div className="lg:flex lg:flex-row gap-4 lg:gap-6 px-4 lg:px-20 md:px-8 py-8 items-center justify-between">
      
      <div className="flex-shrink-0 flex-grow  p-4 lg:p-6 rounded-md">
        <div className="flex flex-col items-center text-center lg:text-left">
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#007296] leading-tight">
            24
          </span>
          <span className="text-[#007296] text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
            Total Applications
          </span>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-col-2 lg:flex-col xl:flex-row gap-4 flex-shrink-0 w-full lg:w-auto">
        
        <div className="flex flex-col items-center justify-center p-6 rounded-md bg-green-100 flex-shrink-0 flex-grow min-w-[200px]">
          <span className="text-4xl md:text-5xl text-[#027A48]">8</span>
          <span className="text-[#027A48] text-lg md:text-xl">Accepted</span>
        </div>

        
        <div className="flex flex-col items-center justify-center p-6 rounded-md bg-red-100 flex-shrink-0 flex-grow min-w-[200px]">
          <span className="text-4xl md:text-5xl text-[#B42318]">2</span>
          <span className="text-[#B42318] text-lg md:text-xl">Rejected</span>
        </div>

        
        <div className="flex flex-col items-center justify-center p-6 rounded-md bg-gray-100 flex-shrink-0 flex-grow min-w-[200px]">
          <span className="text-4xl md:text-5xl text-[#344054]">13</span>
          <span className="text-[#344054] text-lg md:text-xl">Pending</span>
        </div>
      </div>
    </div>
  );
}

export default CollageNumber;