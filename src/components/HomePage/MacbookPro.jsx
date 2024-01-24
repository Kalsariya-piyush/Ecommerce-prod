import RightArrowIcon from '../Icons/RightArrowIcon';

const MacbookPro = () => {
  return (
    <div className="my-16">
      <div className="max-w-7xl mx-auto  text-[##191C1F]">
        <div className="bg-primary-100">
          <div className="flex justify-between items-center lg:flex-row flex-col">
            <div className="lg:px-14 px-0 py-0 flex flex-col items-start gap-y-4 lg:order-1 order-2 lg:pb-0 pb-8">
              <button className="bg-secondary-500 uppercase py-1.5 px-3 rounded-sm text-sm text-white font-semibold">
                save upto $200
              </button>
              <div className="lg:text-5xl md:text-4xl text-3xl font-semibold leading-9 capitalize">
                <h1>Macbook Pro</h1>
              </div>

              <div className="lg:text-2xl sm:text-xl text-lg lg:py-2 py-0">
                <p>Apple M1 Max Chip. 32GB Unified</p>
                <p> Memory, 1TB SSD Storage</p>
              </div>

              <button className="uppercase rounded-sm px-4 text-white top-3 right-4  text-sm flex items-center gap-x-2 font-semibold leading-10 bg-primary-500">
                shop now <RightArrowIcon />
              </button>
            </div>

            <div className="lg:order-2 order-1">
              <img
                src="/assets/HomePage/MacbookPro.png"
                alt="homepod mini"
                className="mx-auto lg:h-[380px] md:h-2/5 xs:h-[270px] h-auto lg:w-[500px] md:w-2/5 xs:w-[340px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacbookPro;
