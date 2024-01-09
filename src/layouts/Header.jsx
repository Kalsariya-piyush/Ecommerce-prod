import CartIcon from '@/components/Icons/CartIcon';
import HeartIcon from '@/components/Icons/HeartIcon';
import { Logo } from '@/components/Icons/Logo';
import ProfileIcon from '@/components/Icons/ProfileIcon';
import SearchIcon from '@/components/Icons/SearchIcon';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('seacha >> ', searchQuery);
  };

  return (
    <>
      <div className="bg-secondary-700 text-white">
        <div className="shadow-secondary">
          <div className="flex max-w-7xl mx-auto justify-between py-3 items-center lg:order-1 order-2 lg:flex-row flex-col lg:gap-y-0 gap-y-3">
            <h3 className="text-white text-sm leading-5 font-normal">
              Welcome to Clicon online eCommerce store.
            </h3>
            <div className="flex gap-x-2 items-center">
              <p className="text-white text-sm leading-5 font-normal">
                Follow us:
              </p>

              <div className="flex gap-x-3">
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://github.com/">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 max-w-7xl mx-auto justify-between py-4 h-20.6 items-center lg:order-2 order-1 lg:flex-row flex-col lg:gap-y-0 gap-y-3">
          <div className="w-1/4">
            <Logo />
          </div>

          <div className="w-1/2">
            <form className="relative w-full" onSubmit={handleSearch}>
              <input
                type="type"
                className="outline-none rounded-sm placeholder:text-gray-500 text-sm font-normal leading-5 text-black w-full px-5 py-3.5"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search for anything..."
                value={searchQuery}
              />

              <button
                type="submit"
                className="absolute text-black top-3 right-4  text-xl"
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          <div className="w-1/4 flex gap-6 justify-end items-center">
            <Link href="/cart">
              <CartIcon count={5} />
            </Link>

            <Link href="/wishlist">
              <HeartIcon />
            </Link>

            <Link href="/profile">
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="shadow-base"></div>
    </>
  );
};
export default Header;
