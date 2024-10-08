import Categories from '@/components/Categories';
import CallIcon2 from '@/components/Icons/CallIcon2';
import CartIcon from '@/components/Icons/CartIcon';
import CloseIcon from '@/components/Icons/CloseIcon';
import HeadPhoneIcon from '@/components/Icons/HeadPhoneIcon';
import HeartIcon from '@/components/Icons/HeartIcon';
import InformationIcon from '@/components/Icons/InformationIcon';
import LocationIcon from '@/components/Icons/LocationIcon';
import { Logo } from '@/components/Icons/Logo';
import ProcessIcon from '@/components/Icons/ProcessIcon';
import ProfileIcon from '@/components/Icons/ProfileIcon';
import SearchIcon from '@/components/Icons/SearchIcon';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const NAV_LINKS = [
  {
    id: 1,
    icon: <LocationIcon className="w-5" />,
    label: 'Track Order',
    href: '/dashboard/track-order',
  },
  {
    id: 2,
    icon: <ProcessIcon className="w-5" />,
    label: 'Compare',
    href: '/dashboard/compare',
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
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('seacha >> ', searchQuery);
  };

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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <>
      <div className="bg-secondary-700 text-white">
        <div className="shadow-secondary">
          <div className="max-w-7xl sm:px-5 mx-auto justify-between sm:flex hidden py-3 items-center order-2 sm:flex-row flex-col gap-y-3">
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

        <div className="flex gap-8 px-3 sm:px-5 max-w-7xl mx-auto justify-between py-4 h-20.6 items-center">
          <div className="w-1/4">
            <Logo />
          </div>

          <div className="w-1/2">
            <form
              className={`relative sm:!block !hidden w-full`}
              onSubmit={handleSearch}
            >
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

          <div className="w-1/4 flex gap-3 md:gap-5 lg:gap-6 justify-end items-center">
            <Link href="/dashboard/shopping-cart">
              <CartIcon count={5} />
            </Link>

            <Link href="/dashboard/wishlist">
              <HeartIcon />
            </Link>

            <Link href="/dashboard/profile">
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="shadow-base w-full">
        <div className="max-w-7xl px-3 sm:px-5 flex justify-between items-center mx-auto w-full py-4">
          <div className="flex gap-6 items-center">
            <Button
              className={`!text-gray-900 md:!hidden block !font-medium !text-sm !p-1`}
              style={{ minWidth: 10 }}
              disableFocusRipple
              onClick={toggleDrawer(true)}
            >
              <BiMenu size={'30'} className="text-gray-900" />
            </Button>

            {/* Mobile sidebar */}
            <Drawer
              anchor={'left'}
              open={isOpen}
              onClose={toggleDrawer(false)}
              SlideProps={{
                className: '!w-[300px] px-4 py-12 relative',
              }}
            >
              <Button
                style={{ minWidth: 10 }}
                className={`!text-gray-900 !rounded-full bg-gray-50 !absolute !top-5 !right-5 md:hidden block !font-medium !text-sm !p-1`}
                onClick={toggleDrawer(false)}
              >
                <CloseIcon />
              </Button>

              <div className="flex flex-col gap-6 md:hidden items-start">
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
            </Drawer>

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
                    key={id}
                    href={href}
                    className="flex items-center gap-1.5 text-sm hover:!text-primary-500 !text-gray-600"
                  >
                    {icon}
                    <p>{label}</p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+91 7698026049"
              className="text-lg text-gray-900 leading-6 flex gap-2 items-center font-normal"
            >
              <CallIcon2 />
              <p className="lg:block hidden">+91 7698026049</p>
            </a>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-5 !block sm:!hidden">
        <form
          className={`relative border-2 mx-auto rounded-lg overflow-hidden my-4 w-full`}
          onSubmit={handleSearch}
        >
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
    </>
  );
};
export default Header;
