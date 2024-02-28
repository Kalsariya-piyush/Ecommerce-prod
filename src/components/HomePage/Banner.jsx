import { Button } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';
import LeftArrowIcon from '../Icons/LeftArrowIcon';

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col items-stretch gap-6 my-16">
      <div className="p-5 md:p-7 lg:p-11 bg-gray-50 rounded flex sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-1/2 md:w-2/3">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex flex-col gap-2">
              <div className="bg-secondary-500 w-fit uppercase py-1 md:py-1.5 px-2 md:px-3 rounded-sm text-xs md:text-sm text-white font-semibold">
                introducing
              </div>
              <div className="text-gray-900 text-lg md:text-2xl lg:text-3xl font-semibold leading-5 ms:leading-6 md:leading-8">
                New Apple Homepod Mini
              </div>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-4 md:leading-6">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </div>
          </div>

          <Button
            endIcon={<LeftArrowIcon className="rotate-180" />}
            className="!w-fit px-3 md:!px-4 whitespace-nowrap py-2 md:!py-3 !font-public-sans text-xs md:!text-sm !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
          >
            Shop Now
          </Button>
        </div>

        <div className="w-1/2">
          <Image
            src="/assets/Temp/homepod.png"
            alt="homepod mini"
            className="aspect-square object-cover w-full h-full max-w-[300px]"
            height={1000}
            width={1000}
          />
        </div>
      </div>

      <div className="p-5 md:p-7 lg:p-11 bg-gray-900 rounded flex items-center justify-between gap-3">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-1/2 md:w-2/3">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex flex-col gap-2">
              <div className="bg-secondary-500 w-fit uppercase py-1 md:py-1.5 px-2 md:px-3 rounded-sm text-xs md:text-sm text-white font-semibold">
                introducing new
              </div>
              <div className="text-white text-lg md:text-2xl lg:text-3xl font-semibold leading-5 ms:leading-6 md:leading-8">
                xiomi mi 11 ultra <br /> 12GB+256GB
              </div>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-4 md:leading-6">
              *Data provided by internal laboratories. Industry measurment.
            </div>
          </div>

          <Button
            endIcon={<LeftArrowIcon className="rotate-180" />}
            className="!w-fit px-3 md:!px-4 whitespace-nowrap py-2 md:!py-3 !font-public-sans text-xs md:!text-sm !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
          >
            Shop Now
          </Button>
        </div>

        <div className="w-1/2">
          <Image
            src="/assets/Temp/homepod.png"
            alt="homepod mini"
            className="aspect-square object-cover w-full h-full max-w-[300px]"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
