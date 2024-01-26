import LeftArrowIcon from '@/components/Icons/LeftArrowIcon';
import { Button } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ARR_LAYOUT = [1, 2, 3];

const Hero = () => {
  return (
    <div className="grid gap-6 py-6 grid-cols-12 w-full h-full">
      <div className="w-full flex justify-center items-center col-span-12 xl:col-span-8 p-6 md:p-8 xl:p-14 h-full bg-gray-50 rounded-md">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: 1000,
          }}
        >
          {ARR_LAYOUT.map((item) => (
            <SwiperSlide key={item} className="!overflow-visible">
              <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:gap-9 w-full">
                <div className="flex flex-col items-start gap-6 max-w-356px">
                  <div>
                    <div className="flex pb-1 justify-start items-center gap-2">
                      <p className="w-3 lg:w-6 h-0.5 bg-secondary-500"></p>
                      <h4 className="text-secondary-600 text-xs lg:text-sm font-semibold leading-5">
                        THE BEST PLACE TO PLAY
                      </h4>
                    </div>

                    <h2 className="text-gray-900 pb-0 lg:pb-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-56">
                      Xbox Consoles
                    </h2>

                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-6 font-normal">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>

                  <Button
                    endIcon={<LeftArrowIcon className="rotate-180" />}
                    className="!w-fit sm:!flex !hidden !px-8 !py-4 !font-public-sans !text-base !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
                  >
                    Shop Now
                  </Button>
                </div>

                <div>
                  <Image
                    src="/assets/Temp/P1.png"
                    alt="Product"
                    width={1000}
                    height={1000}
                    className="h-full w-[368px] min-h-[300px] min-w-[240px]"
                  />
                </div>

                <Button
                  endIcon={<LeftArrowIcon className="rotate-180" />}
                  className="!w-full sm:!hidden !max-w-356px mx-auto !flex whitespace-nowrap !px-8 !py-3 !font-public-sans !text-base !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full col-span-12 xl:col-span-4 h-full flex flex-col sm:flex-row xl:flex-col gap-6">
        <div className="w-full flex gap-4.5 h-full justify-between overflow-hidden rounded-md pt-6 md:pt-10 pl-6 md:pl-10 bg-gray-900">
          <div className="flex flex-col gap-2 pb-6 md:pb-10">
            <div>
              <h5 className="text-warning-500 pb-1.5 text-xs md:text-sm font-medium leading-5 uppercase">
                Summer Sales
              </h5>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-6 md:leading-8 max-w-28 lg:max-w-40">
                New Google Pixel 6 Pro
              </p>
            </div>

            <Button
              endIcon={<LeftArrowIcon className="rotate-180" />}
              className="!w-fit px-3 md:!px-4 whitespace-nowrap py-2 md:!py-3 !font-public-sans text-xs md:!text-sm !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
            >
              Shop Now
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/assets/Temp/P2.png"
              alt="Product"
              width={1000}
              height={1000}
              className="h-full w-full"
            />

            <div className="md:px-4 ms:py-2 px-2 py-1 text-sm md:text-base left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold leading-6 bg-warning-400 rounded-sm w-fit absolute -top-4">
              29% OFF
            </div>
          </div>
        </div>

        <div className="w-full h-full rounded-md pl-4 bg-gray-50 py-4 md:py-10 pr-5 md:pr-10 flex gap-5 justify-between items-center">
          <div>
            <Image
              src="/assets/Temp/P3.png"
              alt="Product"
              width={1000}
              height={1000}
              className="h-40 w-40"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-5">
            <div>
              <h3 className="text-gray-900 pb-1 md:pb-3 text-xl lg:text-2xl font-semibold leading-6 md:leading-8 max-w-[172px]">
                Xiaomi FlipBuds Pro
              </h3>

              <p className="text-secondary-500 text-base lg:text-lg font-semibold leading-6">
                $299 USD
              </p>
            </div>

            <Button
              endIcon={<LeftArrowIcon className="rotate-180" />}
              className="!w-fit px-3 md:!px-4 whitespace-nowrap py-2 md:!py-3 !font-public-sans text-xs md:!text-sm !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
