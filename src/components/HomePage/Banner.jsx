import RightArrowIcon from '../Icons/RightArrowIcon';

const Banner = () => {
  return (
    <div className="my-16">
      <div className="max-w-7xl mx-auto text-gray-900">
        <div className="grid lg:place-items-stretch place-items-center justify-center lg:gap-y-0 gap-y-5 lg:gap-x-6 gap-x-1 sm:grid-cols-2 grid-cols-1">
          <div className="bg-[#F2F4F5] lg:p-10 p-5 rounded-[6px]">
            <div className="flex items-center gap-x-5 lg:flex-row flex-col">
              <div className="flex flex-col items-start gap-y-3 lg:order-1 order-2">
                <button className="bg-secondary-500 uppercase py-1.5 px-3 rounded-sm text-sm text-white font-semibold lg:mt-0 mt-3">
                  introducing
                </button>
                <div className="text-3xl font-semibold leading-9 capitalize">
                  <h1>new apple</h1>
                  <h1>homepod mini</h1>
                </div>

                <div className="text-base text-[#475156]">
                  <p>Jam-packed with innovation,</p>
                  <p> HomePod mini delivers unexpectedly.</p>
                </div>

                <button className="uppercase rounded-sm px-4 text-white top-3 right-4  text-sm flex items-center gap-x-2 font-semibold leading-10 bg-primary-500">
                  shop now <RightArrowIcon />
                </button>
              </div>

              <div className="lg:order-2 order-1">
                <img
                  src="/assets/HomePage/homepod.png"
                  alt="homepod mini"
                  className="w-60 h-60"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[6px] bg-gray-900">
            <div className="flex items-end justify-between gap-x-5 lg:flex-row flex-col">
              <div className="lg:p-10 p-5 flex flex-col items-start lg:gap-y-3 gap-y-2 lg:order-1 order-2">
                <button className="bg-warning-400 uppercase py-1.5 px-3 rounded-sm text-sm text-black font-semibold">
                  introducing new
                </button>
                <div className="text-3xl text-white font-semibold leading-9 capitalize">
                  <h1>xiomi mi 11 ultra</h1>
                  <h1>12GB+256GB</h1>
                </div>

                <div className="text-base text-[#ADB7BC]">
                  <p>Jam-packed with innovation,</p>
                  <p> HomePod mini delivers unexpectedly.</p>
                </div>

                <button className="uppercase rounded-sm px-4 text-white lg:top-3 top-2 right-4  text-sm flex items-center gap-x-2 font-semibold leading-10 bg-primary-500">
                  shop now <RightArrowIcon />
                </button>
              </div>

              <div className="lg:mx-0 mx-auto lg:order-2 order-1 lg:mt-0 mt-6">
                <img
                  src="/assets/HomePage/xeomiPhone.png"
                  alt="homepod mini"
                  className="w-60 h-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
