import CallIcon from '@/components/Icons/CallIcon';
import { MsgIcon } from '@/components/Icons/MsgIcon';
import { CiWallet } from 'react-icons/ci';
import { FaNotesMedical } from 'react-icons/fa6';
import { FiHome, FiUnlock } from 'react-icons/fi';
import { LuSquareEqual } from 'react-icons/lu';
import { MdArrowRightAlt, MdPayment } from 'react-icons/md';
import { PiTruckFill, PiUserDuotone } from 'react-icons/pi';
import Layout from '../layouts/Layout';

const CustomerSupport = () => {
  return (
    <Layout>
      <div>
        <div className="bg-[#FFFFFF] text-[#191C1F]">
          <div className="max-w-[1200px] mx-auto pt-4">
            <div className="flex items-center justify-between lg:flex-row flex-col lg:px-4">
              <div className="lg:order-1 order-2">
                <div className="">
                  <button className="bg-[#EFD33D] uppercase rounded-0.5 px-4 py-2 font-semibold">
                    Help center
                  </button>
                  <h1 className="text-3xl font-Public Sans pt-1">
                    How can i help you!
                  </h1>
                </div>
                <div className="relative py-4">
                  <input
                    type="text"
                    placeholder="Enter your questions here"
                    className="h-12 md:w-[348px] w-[250px] px-4 outline-0 border-[#a7a1a1] border-[1px]"
                  />
                  <button className="absolute top-5 right-1.5 rounded-sm  bg-[#FA8232] px-4 py-1.5">
                    search
                  </button>
                </div>
              </div>

              <div className="lg:my-0 pb-4 lg:order-2 order-1">
                <img src="assets/images/girlpng.png" className="" width={300} />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-t-[#E4E7E9] mt-4"></div>

          <div className="max-w-[1200px] mx-auto">
            <div className="">
              <div className="py-16">
                <h1 className="text-3xl text-center pb-7 font-semibold">
                  what can we assist you today ?
                </h1>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 capitalize md:px-4 sm:px-16 px-10">
                  <div className=" hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232] ">
                      <PiTruckFill />
                    </div>
                    <p className="text-base"> track order </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <FiUnlock />
                    </div>
                    <p className="text-base">Reset password </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <MdPayment />
                    </div>
                    <p className="text-base">payment option </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <PiUserDuotone />
                    </div>
                    <p className="text-base"> user & account </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <LuSquareEqual />
                    </div>
                    <p className="text-base"> wishlist & compare </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <FaNotesMedical />
                    </div>
                    <p className="text-base">shipping & billing</p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <CiWallet />
                    </div>
                    <p className="text-base"> shopping cart & wallet </p>
                  </div>

                  <div className="hover:shadow-lg flex gap-x-3 border-[1px] hover:border-[2px] active:border-[2px] rounded-[3px] border-[#FA8232] p-4 drop-shadow-xl">
                    <div className="text-2xl text-[#FA8232]">
                      <FiHome />
                    </div>
                    <p className="text-base">sell on clicon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-t-[#E4E7E9]"></div>

          <div className="max-w-[1200px] mx-auto pt-4">
            <div className="">
              <div className="py-12">
                <h1 className="font-semibold text-2xl text-center pb-4">
                  Popular images
                </h1>

                <div className="flex justify-between flex-wrap lg:px-4 sm:px-16 px-10">
                  <div className="">
                    <ul className="">
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        how do i return my item ?{' '}
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        what is cliclons return policy ?{' '}
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        how long is refund process ?{' '}
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="">
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        What are the 'Delivery Timelines'?{' '}
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        What is 'Discover Your Daraz Campaign 2022'?{' '}
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        What is the Voucher & Gift Offer in this Campaign?{' '}
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="">
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        How to cancel Clicon Order.
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        Ask the Digital and Device Community
                      </li>
                      <li className="py-1 list-disc hover:text-[#FA8232] text-base">
                        How to change my shop name?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F4F5] text-[#191C1F]">
          <div className="py-16">
            <div className="pb-6">
              <h1 className="font-semibold text-2xl text-center">
                Dont find your answer
              </h1>
              <h1 className="font-semibold text-2xl text-center">
                contect with us
              </h1>
            </div>

            <div className="flex justify-center lg:flex-row flex-col lg:gap-x-6">
              <div className="bg-[#FFFFFF] drop-shadow-xl sm:w-[425px] w-[300px] lg:mx-0 mx-auto">
                <div className="flex sm:gap-x-4 gap-x-1 sm:p-5 p-3 sm:flex-row flex-col">
                  <div className="">
                    <CallIcon />
                  </div>
                  <div className="sm:px-2 px-1">
                    <h2 className="text-[18px] font-semibold capitalize">
                      call us now
                    </h2>
                    <p className="text-[14px] pt-1">
                      call us when we are fteefd Lorem.Lorem lorel
                    </p>
                    <p className="text-[14px]"> dolor sit amet..</p>
                    <p className="text-2xl py-2">+1-202-456-4653</p>
                    <button className="flex items-center bg-[#2DA5F3] text-white px-6 py-1.5 rounded-sm uppercase">
                      call now <MdArrowRightAlt />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFFFF] drop-shadow-xl sm:w-[425px] w-[300px] lg:mt-0 mt-5 lg:mx-0 mx-auto">
                <div className="flex sm:gap-x-4 gap-x-1 sm:p-5 p-3 sm:flex-row flex-col">
                  <div className="">
                    <MsgIcon />
                  </div>
                  <div className="sm:px-2 px-1 py-2">
                    <h2 className="text-[18px] font-semibold capitalize">
                      chat us now
                    </h2>
                    <p className="text-[14px] pt-1">
                      call us when we are fteefd Lorem.Lorem dolor
                    </p>
                    <p className="text-[14px]"> dolor sit amet..</p>
                    <p className="text-2xl py-2">Ecommerce@gmail.com</p>
                    <button className="flex items-center bg-[#2DB224] text-white px-6 py-1.5 rounded-sm uppercase">
                      Chat us
                      <MdArrowRightAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerSupport;
