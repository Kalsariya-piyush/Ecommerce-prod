import { useAuth } from '@/context/auth';
import { MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BrowsingHistoryIcon } from '../Icons/Dashaboard/BrowsingHistoryIcon';
import { CardsAddressIcon } from '../Icons/Dashaboard/CardsAddressIcon';
import { CompareIcon } from '../Icons/Dashaboard/CompareIcon';
import { LogoutIcon } from '../Icons/Dashaboard/LogoutIcon';
import { OrderHistoryIcon } from '../Icons/Dashaboard/OrderHistoryIcon';
import { SettingIcon } from '../Icons/Dashaboard/SettingIcon';
import { ShoppingCartIcon } from '../Icons/Dashaboard/ShoppingCartIcon';
import { TrackOrderIcon } from '../Icons/Dashaboard/TrackOrderIcon';
import { WishlistIcon } from '../Icons/Dashaboard/WishlistIcon';
import { DashboardIcon } from '../Icons/Dashaboard/dashboardIcon';

const MENU_ITEMS = [
  {
    id: 1,
    icon: <DashboardIcon />,
    title: 'Dashboard',
    href: '/dashboard',
    allows: ['admin'],
  },
  {
    id: 11,
    icon: <DashboardIcon />,
    title: 'Add Product',
    href: '/dashboard/admin/add-product',
    allows: ['admin'],
  },
  {
    id: 2,
    icon: <OrderHistoryIcon />,
    title: 'Order History',
    href: '/dashboard/order-history',
    allows: ['admin', 'user'],
  },
  {
    id: 3,
    icon: <TrackOrderIcon />,
    title: 'Track Order',
    href: '/dashboard/track-order',
    allows: ['admin', 'user'],
  },
  {
    id: 4,
    icon: <ShoppingCartIcon />,
    title: 'Shopping Cart',
    href: '/dashboard/shopping-cart',
    allows: ['admin', 'user'],
  },
  {
    id: 5,
    icon: <WishlistIcon />,
    title: 'Wishlist',
    href: '/dashboard/wishlist',
    allows: ['admin', 'user'],
  },
  {
    id: 6,
    icon: <CompareIcon />,
    title: 'Compare',
    href: '/dashboard/compare',
    allows: ['admin', 'user'],
  },
  {
    id: 7,
    icon: <CardsAddressIcon />,
    title: 'Cards & Address',
    href: '/dashboard/cards-and-address',
    allows: ['admin', 'user'],
  },
  {
    id: 8,
    icon: <BrowsingHistoryIcon />,
    title: 'Browsing History',
    href: '/dashboard/browsing-history',
    allows: ['admin', 'user'],
  },
  {
    id: 9,
    icon: <SettingIcon />,
    title: 'Setting',
    href: '/dashboard/setting',
    allows: ['admin', 'user'],
  },
  {
    id: 10,
    icon: <LogoutIcon />,
    title: 'Log-out',
    href: '/',
    allows: ['admin', 'user'],
  },
];

export const SideBar = () => {
  const router = useRouter();

  const { LogoutHandler, currentUser } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState('');

  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '');

  const handleChangeCategory = (category, href) => {
    setSelectedCategory(category);

    if (category === 'Log-out') {
      LogoutHandler();
      router?.push('/');
      return;
    }

    if (router.asPath !== href) {
      router?.push(href);
    }
  };

  return (
    <div>
      <div
        menuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className="max-w-[1240px] mx-auto"
      >
        <div className="rounded bg-white border border-gray-100 shadow-2xl w-[264px] py-1">
          {MENU_ITEMS &&
            MENU_ITEMS.length > 0 &&
            MENU_ITEMS?.map(({ id, icon, title, href, allows }) => (
              <>
                {allows?.includes(currentUser?.role) && (
                  <MenuItem
                    key={id}
                    onClick={() => handleChangeCategory(title, href)}
                    className={`!text-gray-600 ${
                      title.toLocaleLowerCase() ===
                      pathSegments[pathSegments.length - 1]
                        .replaceAll('-', ' ')
                        .toLocaleLowerCase()
                        .replace('and', '&')
                        ? '!bg-primary-500 !text-white'
                        : '!bg-gray'
                    } !text-sm !py-2.5 !leading-5 !font-normal`}
                  >
                    <div className="flex gap-3">
                      <div>{icon}</div>
                      <p>{title}</p>
                    </div>
                  </MenuItem>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
