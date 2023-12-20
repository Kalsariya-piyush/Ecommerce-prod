import Link from 'next/link';
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
    <Layout className={'max-w-full'}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="bg-[#fbfbfb] md:min-h-[calc(80vh-10px)] md:max-h-[calc(600px)] min-h-[400px]"
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          waitForTransition: 1000,
        }}
      >
        <SwiperSlide className="">
          <div className="flex h-full justify-center py-[100px] max-w-7xl md:mx-auto mx-0 items-center">
            <div className=" md:w-1/3 w-[72%] ">
              <h3 className="font-bold text-[red] font-serif">
                Sale upto 30% off
              </h3>
              <h1 className="text-[30px] font-bold py-[5px]">
                Apple Watch 1 Series
              </h1>
              <p className="pb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                voluptatem molestiae voluptatum{' '}
              </p>
              <Link
                href={'/products'}
                className="bg-[#E52E06] rounded-xl px-3 py-1 text-white"
              >
                Shop now →
              </Link>
            </div>
            <img
              className="w-2/5 h-full md:block hidden"
              src="/assets/images/slider1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex h-full justify-center max-w-7xl md:mx-auto mx-0 items-center">
            <div className="md:w-1/3 w-[72%] md:py-0 pt-[100px]">
              <h3 className="font-bold text-[red] font-serif">
                Sale upto 30% off
              </h3>
              <h1 className="text-[30px] font-bold py-[5px]">
                Apple iphone 14 pro
              </h1>
              <p className="pb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                voluptatem molestiae voluptatum{' '}
              </p>
              <Link
                href={'/products'}
                className="bg-[#E52E06] rounded-xl px-3 py-1 text-white"
              >
                Shop now →
              </Link>
            </div>
            <img
              className="w-2/5 h-full md:block hidden"
              src="/assets/images/slider2.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mx-auto">
        <div className="discount-sec w-full my-[20px]">
          <div className="md:pt-[50px] pt-[90px] md:pr-[300px] text-center">
            <button className="bg-[#E52E06] px-2 font-bold text-[white]">
              Hurry up !
            </button>
            <h1 className="text-[40px] font-bold">
              Up To 25% Discount <br /> Check it Out
            </h1>
            <h2 className="font-serif font-bold">shop now</h2>
          </div>
        </div>

        <section className="mx-auto max-w-7xl">
          <h1 className="font-bold text-[25px] text-center py-7 redunderline">
            Blog and Event
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[20px] px-[70px]">
            <div className="Blog">
              <div className="image-container">
                <img src="assets/images/blog1.jpeg" className="blogimg" />
                <div className="overlay"></div>
              </div>
              <div className="">
                <p className="text-[15px] font-mono">january 23,2023</p>
                <p className="text-[15px] font-mono">
                  blog the ecommerce site hurry up
                </p>
              </div>
            </div>
            <div className="Blog">
              <div className="image-container">
                <img src="assets/images/blog2.jpeg" className="blogimg" />
                <div className="overlay"></div>
              </div>
              <div className="">
                <p className="text-[15px] font-mono">january 23,2023</p>
                <p className="text-[15px] font-mono">
                  blog the ecommerce site hurry up
                </p>
              </div>
            </div>
            <div className="Blog">
              <div className="image-container">
                <img src="assets/images/blog3.jpeg" className="blogimg" />
                <div className="overlay"></div>
              </div>
              <div className="">
                <p className="text-[15px] font-mono">january 23,2023</p>
                <p className="text-[15px] font-mono">
                  blog the ecommerce site hurry up
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="discount ">
          <img src="assets/images/banner3.jpg" className="image" />
          <div className="discount-content">
            <p className="font-bold">big Discount</p>
            <h2 className="text-[30px] font-serif">BIg discount this week</h2>
            <Link
              href={'/products'}
              className="bg-[#E52E06] rounded-xl px-3 py-1 text-white"
            >
              Shop now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
