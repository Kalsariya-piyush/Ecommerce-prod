import LeftArrowIcon from '@/components/Icons/LeftArrowIcon';
import { Button } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';
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

import Layout from '../layouts/Layout';

const Index = () => {
  return (
    <Layout className="my-6">
      <div className="grid gap-6 grid-cols-12 w-full h-full">
        <div className="w-full flex justify-center items-center col-span-8 p-14 h-full bg-gray-50 rounded-md">
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
            <SwiperSlide className="!overflow-visible">
              <div className="flex justify-center items-center gap-9 w-full">
                <div className="flex flex-col items-start gap-6 max-w-356px">
                  <div>
                    <div className="flex pb-1 justify-start items-center gap-2">
                      <p className="w-6 h-0.5 bg-secondary-500"></p>
                      <h4 className="text-secondary-600 text-sm font-semibold leading-5">
                        THE BEST PLACE TO PLAY
                      </h4>
                    </div>

                    <h2 className="text-gray-900 pb-4 text-5xl font-semibold leading-56">
                      Xbox Consoles
                    </h2>

                    <p className="text-gray-700 text-lg leading-6 font-normal">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>

                  <Button
                    endIcon={<LeftArrowIcon className="rotate-180" />}
                    className="!w-fit !px-8 !py-4 !font-public-sans !text-base !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
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
                    className="h-full w-[368px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!overflow-visible">
              <div className="flex justify-center items-center gap-9 w-full">
                <div className="flex flex-col items-start gap-6 max-w-356px">
                  <div>
                    <div className="flex pb-1 justify-start items-center gap-2">
                      <p className="w-6 h-0.5 bg-secondary-500"></p>
                      <h4 className="text-secondary-600 text-sm font-semibold leading-5">
                        THE BEST PLACE TO PLAY
                      </h4>
                    </div>

                    <h2 className="text-gray-900 pb-4 text-5xl font-semibold leading-56">
                      Xbox Consoles
                    </h2>

                    <p className="text-gray-700 text-lg leading-6 font-normal">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>

                  <Button
                    endIcon={<LeftArrowIcon className="rotate-180" />}
                    className="!w-fit !px-8 !py-4 !font-public-sans !text-base !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
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
                    className="h-full w-[368px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full col-span-4 h-full flex flex-col gap-6">
          <div className="w-full h-full rounded-md bg-gray-50"></div>
          <div className="w-full h-full rounded-md bg-gray-50"></div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Index);
