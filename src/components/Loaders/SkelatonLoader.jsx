const SkelatonLoader = ({ num }) => {
  return (
    <div className="grid rounded-md grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 !mx-auto">
      {Array.from(Array(num).keys()).map((index) => (
        <div
          key={index}
          className="relative bg-gray-100 pb-2 group shadow-md rounded-md overflow-hidden"
        >
          <div className="overflow-hidden animate-pulse aspect-w-1 aspect-h-1">
            <div className="bg-gray-200 w-full h-[300px]"></div>
          </div>
          <div className="flex !px-2 items-start bg-gray-50 justify-between mt-4 space-x-4">
            <div className="flex justify-between flex-col gap-2 items-start">
              <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base animate-pulse"></h3>
              <div className="flex relative pb-2 items-center mt-2.5 space-x-px">
                <div className="bg-gray-200 w-16 h-4 animate-pulse"></div>
              </div>
            </div>

            <div className="text-right flex bg-gray-100 justify-between items-end flex-col gap-2">
              <p className="text-xs font-bold text-gray-300 sm:text-sm md:text-base animate-pulse"></p>
              <div className="bg-gray-300 w-16 h-8 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkelatonLoader;
