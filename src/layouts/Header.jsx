import Categories from '@/components/Categories';
import CallIcon from '@/components/Icons/CallIcon';
import CartIcon from '@/components/Icons/CartIcon';
import HeadPhoneIcon from '@/components/Icons/HeadPhoneIcon';
import HeartIcon from '@/components/Icons/HeartIcon';
import InformationIcon from '@/components/Icons/InformationIcon';
import LocationIcon from '@/components/Icons/LocationIcon';
import { Logo } from '@/components/Icons/Logo';
import ProcessIcon from '@/components/Icons/ProcessIcon';
import ProfileIcon from '@/components/Icons/ProfileIcon';
import SearchIcon from '@/components/Icons/SearchIcon';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const NAV_LINKS = [
  {
    id: 1,
    icon: <LocationIcon className="w-5" />,
    label: 'Track Order',
    href: '/track-order',
  },
  {
    id: 2,
    icon: <ProcessIcon className="w-5" />,
    label: 'Compare',
    href: '/compare',
  },
  {
    id: 3,
    icon: <HeadPhoneIcon className="w-5" />,
    label: 'Customer Support',
    href: '/customer-support',
  },
  {
    id: 4,
    icon: <InformationIcon className="w-5" />,
    label: 'Need Help',
    href: '/help',
  },
];

const CATEGORIES = [
  {
    id: 1,
    title: 'Computer & Laptop',
  },
  {
    id: 2,
    title: 'Computer Accessories',
  },
  {
    id: 3,
    title: 'SmartPhone',
  },
  {
    id: 4,
    title: 'Headphone',
  },
  {
    id: 5,
    title: 'Mobile Accessories',
  },
  {
    id: 6,
    title: 'Gaming Console',
  },
  {
    id: 7,
    title: 'Warable Technology',
  },
  {
    id: 8,
    title: 'GPS & Navigation',
  },
  {
    id: 9,
    title: 'Watchs & Accessories',
  },
  {
    id: 10,
    title: 'TV & Homes Appliances',
  },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('seacha >> ', searchQuery);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenCategories = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
    handleClose();
  };
  return (
    <>
      <div className="bg-secondary-700 text-white">
        <div className="shadow-secondary">
          <div className="flex max-w-7xl px-5 mx-auto justify-between py-3 items-center lg:order-1 order-2 lg:flex-row flex-col lg:gap-y-0 gap-y-3">
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

        <div className="flex gap-8 px-5 max-w-7xl mx-auto justify-between py-4 h-20.6 items-center">
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

      <div className="shadow-base w-full">
        <div className="max-w-7xl px-5 flex justify-between items-center mx-auto w-full py-4">
          <div className="flex gap-6 items-center">
            {/* <Button
              className={`!text-gray-900 !font-medium !text-sm`}
              onClick={handleOpenCategories}
            >
              <BiMenu size={'30'} />
            </Button> */}

            <div className="relative">
              <Button
                endIcon={
                  <IoIosArrowDown
                    className={`${open ? 'rotate-180 duration-300' : ''}`}
                  />
                }
                className={`!py-3.5 capitalize !px-6 hover:!bg-primary-500 hover:!text-white ${
                  open
                    ? '!text-white !bg-primary-500'
                    : '!text-gray-900 !bg-gray-50'
                } !leading-5 !font-medium !text-sm`}
                onClick={handleOpenCategories}
              >
                All Category
              </Button>

              <Categories
                anchorEl={anchorEl}
                categories={CATEGORIES}
                handleChangeCategory={handleChangeCategory}
                handleClose={handleClose}
                open={open}
                selectedCategory={selectedCategory}
              />
            </div>

            <div className="md:flex gap-6 hidden items-center">
              {NAV_LINKS &&
                NAV_LINKS?.map(({ href, icon, id, label }) => (
                  <Link
                    href={href}
                    key={id}
                    className="flex items-center gap-1.5 text-sm hover:!text-primary-500 !text-gray-600"
                  >
                    {icon}
                    <p>{label}</p>
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <a
              href="tel:+91 9510449518"
              className="text-lg text-gray-900 leading-6 flex gap-2 items-center font-normal"
            >
              <CallIcon />
              <p className="lg:block hidden">+91 9510449518</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
