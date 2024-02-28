import { Button } from '@mui/material';
import Image from 'next/image';
import LeftArrowIcon from '../Icons/LeftArrowIcon';

const MacbookPro = () => {
  return (
    <div className="my-16">
      <div>
        <div className="bg-primary-100 px-5 sm:px-6 md:px-9 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            <div className="flex w-1/2 flex-col items-start gap-y-3 md:gap-y-4">
              <div className="bg-secondary-500 uppercase py-1.5 px-3 rounded-sm text-sm text-white font-semibold">
                save upto $200
              </div>

              <div className="lg:text-5xl md:text-3xl text-xl sm:text-2xl font-semibold leading-6 md:leading-9 capitalize">
                <h1>Macbook Pro</h1>
              </div>

              <div className="lg:text-2xl md:text-lg sm:text-base text-xs leading-4 md:leading-5 lg:leading-7">
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage.
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
                src="/assets/Temp/MacbookPro.png"
                alt="homepod mini"
                className="max-w-96 ml-auto w-full h-full aspect-square object-contain"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacbookPro;
