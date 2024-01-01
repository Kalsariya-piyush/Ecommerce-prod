import { useAuth } from '@/context/auth';
import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';

import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const LinksArr = [
  {
    label: 'shop',
    path: '/',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'Cart',
    path: '/cart',
  },
  {
    label: 'Orders',
    path: '/orders',
  },
];

export const LinksArrLoggedOut = [
  {
    label: 'shop',
    path: '/',
  },
  {
    label: 'Products',
    path: '/products',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, LogoutHandler, isLoadingUser } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="bg-gray-950">
        <div className="mx-auto px-4 lg:max-w-7xl sm:px-6 xl:px-0">
          <div className="relative flex h-20 items-center justify-between">
            <div className="">
              <h1 className="text-white font-bold text-3xl italic">
                Ecommerce
              </h1>
            </div>
            <div className="flex flex-1 items-center  sm:items-stretch  justify-end px-3">
              {isOpen ? (
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-white md:hidden text-2xl"
                />
              ) : (
                <AiOutlineMenu
                  onClick={() => setIsOpen(true)}
                  className="text-white md:hidden text-2xl"
                />
              )}
              <div className="ml-6 md:flex hidden">
                <div className="flex space-x-4">
                  {currentUser
                    ? LinksArr.map(({ label, path }, index) => (
                        <Link
                          key={index}
                          href={`${path}`}
                          className="rounded-md p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                        >
                          {label}
                        </Link>
                      ))
                    : LinksArrLoggedOut.map(({ label, path }, index) => (
                        <Link
                          key={index}
                          href={`${path}`}
                          className="rounded-md p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                        >
                          {label}
                        </Link>
                      ))}

                  {currentUser?.role === 'admin' && (
                    <>
                      <Link
                        className="rounded-md p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                        href="/add-product"
                      >
                        Add Product
                      </Link>
                      <Link
                        className="rounded-md p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                        href="/admin"
                      >
                        Admin
                      </Link>
                    </>
                  )}
                  <div className="relative flex group py-2">
                    {!isLoadingUser && currentUser ? (
                      <>
                        <div className="flex h-full gap-2 cursor-pointer text-white capitalize justify-center items-center">
                          <MdAccountCircle size={26} color="white" />
                          <p>{currentUser?.name}</p>
                        </div>
                        <ul className="bg-gray-100 hidden group-hover:block shadow-custom rounded-lg py-2 z-50 w-48 h-auto absolute top-10">
                          <li className="py-1 text-base font-medium cursor-pointer px-5 hover:bg-gray-200">
                            <Link href={'/profile'}>Profile</Link>
                          </li>
                          <li
                            onClick={() => LogoutHandler()}
                            className="py-1 text-base font-medium cursor-pointer px-5 hover:bg-gray-200"
                          >
                            Logout
                          </li>
                        </ul>
                      </>
                    ) : (
                      <Link
                        className="text-white bg-gray-800 px-3 -mt-1 pt-1 py-[5px] rounded-lg"
                        href="/login"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
                {/* {currentUser ? (
                  <button
                    onClick={() => LogoutHandler()}
                    className="text-white bg-gray-800 px-3 pt-[0px] rounded-lg"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className="text-white bg-gray-800 px-3 pt-[5px] rounded-lg"
                    href="/login"
                  >
                    Login
                  </Link>
                )} */}
              </div>

              {/* Mobile view of header  */}
              <div
                className={`duration-300 md:hidden fixed top-[64px] bg-gray-950 w-full h-screen z-[40] p-5 ${
                  isOpen ? 'left-0' : '-left-full'
                }`}
              >
                {currentUser
                  ? LinksArr.map(({ label, path }, index) => (
                      <Link
                        key={index}
                        href={`${path}`}
                        className="rounded-md px-5 py-5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white block"
                      >
                        {label}
                      </Link>
                    ))
                  : LinksArrLoggedOut.map(({ label, path }, index) => (
                      <Link
                        key={index}
                        href={`${path}`}
                        className="rounded-md px-5 py-5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white block"
                      >
                        {label}
                      </Link>
                    ))}
                {currentUser?.role === 'admin' && (
                  <>
                    <Link
                      href="/add-product"
                      className="rounded-md px-5 py-5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white block"
                    >
                      Add-product
                    </Link>

                    <Link
                      href="/admin"
                      className="rounded-md px-5 py-5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white block"
                    >
                      Admin
                    </Link>
                  </>
                )}
                <div className="ml-4">
                  {currentUser ? (
                    <button
                      onClick={() => LogoutHandler()}
                      className="text-white bg-gray-800 px-3 py-[5px] rounded-lg"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="rounded-md px-[6px] py-5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white block"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <form></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
