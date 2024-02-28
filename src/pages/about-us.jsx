import { memo, useState } from 'react';

import GreenTick from '@/components/Icons/GreenTick';
import PlayIcon from '@/components/Icons/PlayIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import Layout from '@/layouts/Layout';

const TEAM_MEMBERS = [
  {
    id: 1,
    image: '/assets/TeamMembers/t1.png',
    name: 'Kevin Gilbert',
    designation: 'Chief Executive Officer',
  },
  {
    id: 2,
    image: '/assets/TeamMembers/t2.png',
    name: 'Kevin Gilbert',
    designation: 'Assistant of CEO',
  },
  {
    id: 3,
    image: '/assets/TeamMembers/t3.png',
    name: 'Kevin Gilbert',
    designation: 'Head of Designer',
  },
  {
    id: 4,
    image: '/assets/TeamMembers/t4.png',
    name: 'Kevin Gilbert',
    designation: 'UX Designer',
  },
  {
    id: 5,
    image: '/assets/TeamMembers/t5.png',
    name: 'Kevin Gilbert',
    designation: 'Product Designer',
  },
  {
    id: 6,
    image: '/assets/TeamMembers/t6.png',
    name: 'Kevin Gilbert',
    designation: 'Head of Development',
  },
  {
    id: 7,
    image: '/assets/TeamMembers/t7.png',
    name: 'Kevin Gilbert',
    designation: 'Design Engineer',
  },
  {
    id: 8,
    image: '/assets/TeamMembers/t8.png',
    name: 'Kevin Gilbert',
    designation: 'Design Engineer',
  },
];

const FLASH_SALES_PRODS = [
  {
    id: 1,
    image: '/assets/AboutProducts/a1.png',
    company: 'Bose Sport Earbuds - Wireless',
    model: ' Earphones - Bluetooth In Ear...',
    price: '$1,500',
  },
  {
    id: 2,
    image: '/assets/AboutProducts/a2.png',
    company: 'Bose Sport Earbuds - Wireless',
    model: ' Earphones - Bluetooth In Ear...',
    price: '$1,500',
  },
  {
    id: 3,
    image: '/assets/AboutProducts/a3.png',
    company: 'Bose Sport Earbuds - Wireless',
    model: ' Earphones - Bluetooth In Ear...',
    price: '$1,500',
  },
];

const AboutUs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searchdata  >> ', searchQuery);
  };

  return (
    <Layout className={'!max-w-none !p-0'}>
      <div className="my-6 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-start xl:mx-0 mx-3">
            <div className="lg:w-1/2 smz:w-[500px] w-auto   order-2 lg:order-1">
              <div className="bg-secondary-500 px-4 py-2 rounded-sm my-2 lg:mt-0 mt-4 text-white font-semibold">
                WHO WE ARE
              </div>

              <div className="flex flex-col lg:gap-y-5 gap-y-4">
                <h1 className="lg:text-[40px] text-3xl font-semibold lg:leading-56 leading-10">
                  Kinbo - largest electronics retail shop in the world.
                </h1>
                <p className="text-disabled-500">
                  Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                  vestibulum risus, ac tincidunt diam lectus id magna. Praesent
                  maximus lobortis neque sit amet rhoncus. Nullam tempus lectus
                  a dui aliquet, non ultricies nibh elementum. Nulla ac nulla
                  dolor.{' '}
                </p>
                <div className="">
                  <span className="flex gap-x-2 text-base">
                    <GreenTick />
                    Great 24/7 customer services.
                  </span>
                  <span className="flex gap-x-2 text-base">
                    <GreenTick />
                    600+ Dedicated employe.
                  </span>
                  <span className="flex gap-x-2 text-base">
                    <GreenTick />
                    50+ Branches all over the world.
                  </span>
                  <span className="flex gap-x-2 text-base">
                    <GreenTick />
                    Over 1 Million Electronics Products
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="/assets/AboutProducts/about-us.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-gray-100"></div>

      <div className="my-16 text-gray-900 capitalize">
        <div className="max-w-7xl mx-auto">
          <h2 className="lg:text-3xl text-2xl font-semibold text-center pb-5">
            Our core team member
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 xl:mx-0 mx-3">
            {TEAM_MEMBERS.map(({ image, name, designation }, index) => (
              <div
                key={index}
                className="flex items-center  border-[1px] border-gray-100  p-6 rounded-sm gap-x-4 boxShadow-secondary"
              >
                <img src={image} alt="" height={64} width={64} />
                <div className="leading-7">
                  <h3 className="font-semibold text-base">{name}</h3>
                  <p className="text-disabled-500">{designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="bg-cover bg-center w-full h-96"
          style={{ backgroundImage: 'url("/assets/images/bg.jpeg")' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center h-96">
              <div className="leading-9">
                <h1 className="text-3xl font-semibold">Your trusted and</h1>
                <h1 className="text-3xl font-semibold">reliable retail shop</h1>
              </div>

              <div className="my-3">
                <p className="text-lg">
                  Praesent sed semper metus. Nunc aliquet dolor
                </p>
                <p className="text-lg">
                  mauris, et fringilla elit gravida eget. Nunc
                </p>
                <p className="text-lg">consequat auctor urna a placerat.</p>
              </div>
              <div className="w-6 h-6 bg-primary-500 p-6 flex items-center justify-center rounded-full">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 xl:mx-0 mx-3">
            <div className="">
              <h3 className="uppercase font-semibold py-3">FLASH SALE TODAY</h3>
              <div className="flex flex-col  justify-center gap-y-3 ">
                {FLASH_SALES_PRODS.map(
                  ({ image, product, model, price }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-2.5  border-[1px] border-gray-100  p-3 rounded-sm  boxShadow-secondary"
                    >
                      <img src={image} alt="" height={64} width={64} />
                      <div className="leading-5">
                        <p className="font-semibold text-base">{product}</p>
                        <p className="font-semibold text-base">{model}</p>
                        <p className="text-secondary-500 font-semibold">
                          {price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="">
              <h3 className="uppercase font-semibold py-3">best sellers</h3>
              <div className="flex flex-col  justify-center gap-y-3 ">
                {FLASH_SALES_PRODS.map(
                  ({ image, product, model, price }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-2.5  border-[1px] border-gray-100  p-3 rounded-sm  boxShadow-secondary"
                    >
                      <img src={image} alt="" height={64} width={64} />
                      <div className="leading-5">
                        <p className="font-semibold text-base">{product}</p>
                        <p className="font-semibold text-base">{model}</p>
                        <p className="text-secondary-500 font-semibold">
                          {price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="">
              <h3 className="uppercase font-semibold py-3">top rated</h3>
              <div className="flex flex-col  justify-center gap-y-3 ">
                {FLASH_SALES_PRODS.map(
                  ({ image, product, model, price }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-2.5  border-[1px] border-gray-100  p-3 rounded-sm  boxShadow-secondary"
                    >
                      <img src={image} alt="" height={64} width={64} />
                      <div className="leading-5">
                        <p className="font-semibold text-base">{product}</p>
                        <p className="font-semibold text-base">{model}</p>
                        <p className="text-secondary-500 font-semibold">
                          {price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="">
              <h3 className="uppercase font-semibold py-3">new arrival</h3>
              <div className="flex flex-col  justify-center gap-y-3 ">
                {FLASH_SALES_PRODS.map(
                  ({ image, product, model, price }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-x-2.5  border-[1px] border-gray-100 p-3 rounded-sm boxShadow-secondary"
                    >
                      <img src={image} alt="" height={64} width={64} />
                      <div className="leading-5">
                        <p className="font-semibold text-base">{product}</p>
                        <p className="font-semibold text-base">{model}</p>
                        <p className="text-secondary-500 font-semibold">
                          {price}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-700">
        <div className="py-16">
          <div className="flex flex-col items-center">
            <div className="text-white text-center">
              <h2 className="text-3xl py-2">Subscribe to our newsletter</h2>
              <p className="text-base text-gray-400">
                Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
                libero state
              </p>
              <p className="text-base text-gray-400">
                {' '}
                cursus. Donec non quam urna. Quisque vitae porta ipsum.
              </p>
            </div>

            <div className="py-5 xs:mx-0 mx-3">
              <div className="bg-white rounded-sm p-2">
                <form
                  className={`flex items-center gap-x-2`}
                  onSubmit={handleSearch}
                >
                  <input
                    type="type"
                    className="outline-none sm:w-96 xs:w-auto  placeholder:text-gray-500 text-sm font-normal leading-5 rounded-sm text-black w-full px-2 py-2.5"
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                    placeholder="Email address"
                    value={searchQuery}
                  />
                  <button
                    type="submit"
                    className="uppercase rounded-sm px-4 text-white top-3 right-4  text-sm flex items-center gap-x-2 font-semibold leading-10 bg-primary-500"
                  >
                    subscribe <RightArrowIcon />
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t-[1px] border-t-gray-600 w-80"></div>

            <div className="">
              <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-x-10 gap-y-0">
                <img src="/assets/companyLogo/google.png" alt="googleicon" />
                <img src="/assets/companyLogo/amazon.png" alt="amazonicon" />
                <img src="/assets/companyLogo/philips.png" alt="philipsicon" />
                <img src="/assets/companyLogo/toshiba.png" alt="toshibaicon" />
                <img src="/assets/companyLogo/samsung.png" alt="samsungicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(AboutUs);
