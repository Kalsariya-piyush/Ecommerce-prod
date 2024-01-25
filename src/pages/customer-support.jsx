import CallIcon from '@/components/Icons/CallIcon';
import { MsgIcon } from '@/components/Icons/MsgIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import Layout from '@/layouts/Layout';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { CiWallet } from 'react-icons/ci';
import { FaNotesMedical } from 'react-icons/fa6';
import { FiHome, FiUnlock } from 'react-icons/fi';
import { LuSquareEqual } from 'react-icons/lu';
import { MdPayment } from 'react-icons/md';
import { PiTruckFill, PiUserDuotone } from 'react-icons/pi';

let SERVICES = [
  {
    icon: <PiTruckFill />,
    label: 'track order',
  },
  {
    icon: <FiUnlock />,
    label: 'reset password',
  },
  {
    icon: <MdPayment />,
    label: 'payment option',
  },
  {
    icon: <PiUserDuotone />,
    label: ' user & account',
  },
  {
    icon: <LuSquareEqual />,
    label: 'wishlist & compare',
  },
  {
    icon: <FaNotesMedical />,
    label: 'shipping & billing',
  },
  {
    icon: <CiWallet />,
    label: ' shopping cart & wallet',
  },
  {
    icon: <FiHome />,
    label: 'sell on clicon',
  },
];

const CustomerSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('search >> ', searchQuery);
  };

  return (
    <Layout>
      <div>
        <div className="bg-white text-gray-900">
          <div className="max-w-7xl mx-auto my-3">
            <div className="flex items-center justify-between lg:flex-row flex-col lg:px-4">
              <div className="lg:order-1 order-2">
                <div className="">
                  <Button className="bg-warning-400 hover:bg-warning-400 text-gray-900 uppercase rounded-sm px-4 py-2 font-semibold">
                    Help center
                  </Button>
                  <h1 className="font-Public text-3xl font-Public Sans py-3 font-semibold">
                    How can i help you!
                  </h1>
                </div>

                <div className="border border-gray-100 rounded-sm p-2">
                  <form
                    className={`flex items-center gap-x-2`}
                    onSubmit={handleSearch}
                  >
                    <input
                      type="type"
                      className="outline-none sm:w-72 xs:w-auto  placeholder:text-gray-500 text-sm font-normal leading-5 rounded-sm text-black w-full px-2 py-2.5"
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      placeholder="Enter your question or keyword"
                      value={searchQuery}
                    />
                    <Button
                      type="submit"
                      className="uppercase rounded-sm px-4 text-white   text-sm flex items-center font-semibold leading-10 bg-primary-500 hover:bg-orange-500"
                    >
                      Search
                    </Button>
                  </form>
                </div>
              </div>

              <div className="lg:my-0 pb-4 lg:order-2 order-1 lg:w-1/3 xs:w-96 w-auto">
                <img
                  src="assets/customerSupport/139320-using-girl-laptop-happy-free-hq-image.png"
                  alt="girlwithlaptop"
                />
              </div>
            </div>

            <div className="lg:my-0 pb-4 lg:order-2 order-1 lg:w-1/3 xs:w-96 w-auto">
              <img
                src="/assets/customerSupport/customer-support-img.png"
                alt="girlwithlaptop"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-t-gray-100 mt-4"></div>

        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="py-16">
              <h1 className="font-Public text-3xl text-center pb-7 font-semibold">
                what can we assist you today ?
              </h1>

              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 capitalize md:px-4 sm:px-16 px-10">
                {SERVICES.map(({ icon, label }, index) => (
                  <>
                    <Link
                      href="/"
                      key={index}
                      className=" hover:shadow-lg flex gap-x-3 border hover:border active:border-2 rounded-sm border-primary-500 p-4 drop-shadow-xl"
                    >
                      <div className="text-2xl text-primary-500 ">{icon}</div>
                      <p className="text-base">{label}</p>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-t-gray-100"></div>

        <div className="max-w-7xl mx-auto pt-4">
          <div className="">
            <div className="py-12">
              <h1 className="font-Public font-semibold text-2xl text-center pb-4">
                Popular Images
              </h1>

              <div className="flex justify-between flex-wrap lg:px-4 sm:px-16 px-10">
                <div className="">
                  <ul className="">
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      how do i return my item ?
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      what is cliclons return policy ?
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      how long is refund process ?
                    </li>
                  </ul>
                </div>

                <div className="">
                  <ul className="">
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      What are the 'Delivery Timelines?
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      What is 'Discover Your Daraz Campaign 2022?
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      What is the Voucher & Gift Offer in this Campaign?
                    </li>
                  </ul>
                </div>

                <div className="">
                  <ul className="">
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      How to cancel Clicon Order.
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      Ask the Digital and Device Community
                    </li>
                    <li className="py-1 list-disc hover:text-primary-500 text-base">
                      How to change my shop name?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-gray-900">
        <div className="py-16">
          <div className="pb-4 flex flex-col items-center">
            <Button
              href=""
              className="bg-secondary-500 hover:bg-secondary-500 px-4 py-1.5 rounded-sm my-3 lg:mt-0  text-white font-semibold"
            >
              connect us
            </Button>
            <h1 className="font-Public font-semibold text-3xl">
              Dont find your answer
            </h1>
            <h1 className="font-Public font-semibold text-3xl">
              Contect with us
            </h1>
          </div>

          <div className="flex justify-center lg:flex-row flex-col lg:gap-x-6">
            <div className="bg-white drop-shadow-xl lg:mx-0 mx-auto">
              <div className="flex sm:gap-x-4 gap-x-1 sm:p-5 p-3 sm:flex-row flex-col">
                <div className="">
                  <CallIcon />
                </div>
                <div className="sm:px-2 px-1 py-2">
                  <h2 className="font-Public text-lg font-semibold capitalize">
                    call us now
                  </h2>
                  <p className="text-blue-600 text-sm pt-1">
                    we are available online from 9:00 AM to 5:00 PM
                  </p>
                  <p className="text-blue-600 text-sm mb-2">
                    (GMT95:45) Talk with use now
                  </p>
                  <a className="text-2xl" href="tel:+91 9510449518">
                    +91 9510449518
                  </a>
                  <Button
                    href="tel:+91 9510449518"
                    className="flex items-center  bg-secondary-500 hover:bg-secondary-500 text-white px-6 my-2 py-1.5 gap-x-2 rounded-sm uppercase"
                  >
                    call now <RightArrowIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white drop-shadow-xl  lg:mt-0 mt-5 lg:mx-0 mx-auto">
        <div className="flex sm:gap-x-4 gap-x-1 sm:p-5 p-3 sm:flex-row flex-col">
          <MsgIcon />

          <div className="sm:px-2 px-1 py-2">
            <h2 className="font-Public text-lg font-semibold capitalize">
              chat us now
            </h2>

            <p className="text-blue-600 text-sm pt-1">
              we are available online from 9:00 AM to 5:00 PM
            </p>
            <p className="text-blue-600 text-sm mb-2">
              (GMT95:45) Talk with use now
            </p>
            <p className="text-2xl py-1">Ecomm@gmail.com</p>

            <Button className="flex items-center bg-success-500 hover:bg-success-500 text-white px-6 py-1.5 gap-x-2 rounded-sm uppercase">
              Chat us
              <RightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerSupport;
