import Link from 'next/link';

import HomeIcon from '@/components/Icons/HomeIcon';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon';

const NotFoundPage = () => {
  return (
    <div className="max-w-7xl mx-auto text-gray-900">
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <img
          src="/assets/images/404png.png"
          alt="404png_image"
          className="lg:w-[500px] w-[300px]"
        />

        <div className="flex flex-col gap-y-4 text-center xs:mx-0 mx-3">
          <h1 className="font-semibold lg:text-4xl sm:text-3xl text-xl">
            404, Page not founds
          </h1>
          <div className="text-gray-700">
            <p>
              Something went wrong. It’s look that your requested could not be
              found.
            </p>
            <p> It’s look like the link is broken or the page is removed.</p>
          </div>

          <div className="flex gap-x-3 mx-auto">
            <button className="group uppercase rounded-sm sm:px-4 px-2 text-sm text-white top-3 right-4 flex items-center gap-x-2 font-semibold leading-10 bg-primary-500">
              <span className="group-hover:-translate-x-1 translate-x-1 duration-200">
                <LeftArrowIcon />
              </span>
              <span>Go Back</span>
            </button>

            <Link
              href="/"
              className="border text-sm font-semibold border-primary-100 p-2 flex items-center gap-x-1 sm:px-4 px-2 text-primary-500 uppercase"
            >
              <span>
                <HomeIcon />
              </span>
              <span>Go To Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
