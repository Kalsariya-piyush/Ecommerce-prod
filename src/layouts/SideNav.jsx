import { useAuth } from '@/context/auth';
import Link from 'next/link';
import { useState } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';

const NAVIGATIONLIST_ITEMS = [
  {
    id: 1,
    label: 'Dashboard',
    url: '/dashboard',
    Icon: RxDashboard,
  },
  {
    id: 2,
    label: 'Users',
    url: '/dashboard/users',
    Icon: HiUsers,
  },
  {
    id: 3,
    label: 'Add-product',
    url: '/dashboard/add-product',
    Icon: BiSolidAddToQueue,
  },
  {
    id: 4,
    label: 'Products',
    url: '/dashboard/products',
    Icon: FaShoppingBag,
  },
  {
    id: 5,
    label: 'Payments',
    url: '/dashboard/payments',
    Icon: MdPayment,
  },
  {
    id: 6,
    label: 'Profile',
    url: '/dashboard/profile',
    Icon: FaUserCircle,
  },
];

const SideNav = () => {
  const { currentUser, LogoutHandler } = useAuth();

  const [isOpenMenuList, setIsOpenMenuList] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Ecommerce
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => setIsOpenMenuList(!isOpenMenuList)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>

                {isOpenMenuList && (
                  <div
                    className="z-50 my-4 text-base absolute top-10 right-2 list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        {currentUser?.name}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        {currentUser?.email}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => LogoutHandler()}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {NAVIGATIONLIST_ITEMS.map(({ Icon, id, label, url }) => (
              <li key={id}>
                <Link
                  href={`${url}`}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                  <span className="ml-3">{label}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => LogoutHandler()}
                className="flex w-full justify-start items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiLogOut className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
