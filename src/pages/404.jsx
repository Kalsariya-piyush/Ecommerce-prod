import ExlamationIcon from '@/components/Icons/ExclamationIcon';
import LeftArrowIcon from '@/components/Icons/LeftArrowIcon';
import Link from 'next/link';

const Page404 = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-600 rounded-full bg-blue-50 dark:bg-gray-800">
            <ExlamationIcon />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-400">
            The page you are looking for doesn't exist.
          </p>

          <Link href="/">
            <button className="group flex w-full gap-3 mt-5 !items-center justify-between rounded-lg bg-black !px-4 !py-2 text-base font-medium text-white disabled:cursor-not-allowed sm:w-auto">
              <span className="group-hover:-translate-x-1 translate-x-1 duration-200">
                <LeftArrowIcon />
              </span>
              <span>Go Home</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
