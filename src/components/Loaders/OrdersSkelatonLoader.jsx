const OrdersSkelatonLoader = ({ num }) => {
  return (
    <div className="">
      {Array.from(Array(num).keys()).map((index) => (
        <div
          key={index}
          className="border border-gray-200 overflow-hidden grid grid-cols-7 w-full mb-5 rounded-md"
        >
          <div className="w-full flex flex-col gap-5 p-8 text-gray-500 col-span-2 h-full border-r border-gray-200 bg-gradient-to-r from-neutral-100 to-neutral-100 animate-pulse">
            <div className="skeleton-line bg-neutral-200 w-full h-8"></div>
            <div className="skeleton-line bg-neutral-200 w-full h-8"></div>
            <div className="skeleton-line bg-neutral-200 w-full h-8"></div>
            <div className="skeleton-line bg-neutral-200 w-full h-8"></div>
          </div>
          <div className="w-full p-8 h-full col-span-5 bg-white">
            <ul className="flex !max-h-[370px] overflow-y-auto flex-col">
              <li className="flex bg-gradient-to-r from-gray-200 to-gray-100 max-w-2xl mb-4 gap-5 animate-pulse">
                <div className="w-28 h-28 rounded-md bg-gray-300 skeleton-box"></div>
                <div className="w-full py-1 max-w-lg flex justify-between flex-col">
                  <div className="flex justify-between items-start">
                    <div className="skeleton-line bg-gray-300 w-1/2 h-6"></div>
                    <div className="skeleton-line bg-gray-300 w-1/4 h-6"></div>
                  </div>

                  <div className="text-sm flex justify-between items-center text-gray-500 font-medium">
                    <div className="skeleton-line bg-gray-300 w-1/4 h-4"></div>
                    <div className="skeleton-line bg-gray-300 w-1/5 h-4"></div>
                  </div>
                </div>
              </li>
              <li className="flex bg-gradient-to-r from-gray-200 to-gray-100 max-w-2xl mb-4 gap-5 animate-pulse">
                <div className="w-28 h-28 rounded-md bg-gray-300 skeleton-box"></div>
                <div className="w-full py-1 max-w-lg flex justify-between flex-col">
                  <div className="flex justify-between items-start">
                    <div className="skeleton-line bg-gray-300 w-1/2 h-6"></div>
                    <div className="skeleton-line bg-gray-300 w-1/4 h-6"></div>
                  </div>

                  <div className="text-sm flex justify-between items-center text-gray-500 font-medium">
                    <div className="skeleton-line bg-gray-300 w-1/4 h-4"></div>
                    <div className="skeleton-line bg-gray-300 w-1/5 h-4"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersSkelatonLoader;
