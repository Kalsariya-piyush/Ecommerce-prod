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

const CATEGORIES = [
  {
    id: 1,
    icon: <DashboardIcon />,
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    id: 2,
    icon: <OrderHistoryIcon />,
    title: 'Order History',
    href: '/dashboard/order-history',
  },
  {
    id: 3,
    icon: <TrackOrderIcon />,
    title: 'Track Order',
    href: '/dashboard/track-order',
  },
  {
    id: 4,
    icon: <ShoppingCartIcon />,
    title: 'Shopping Cart',
    href: '/dashboard/shopping-cart',
  },
  {
    id: 5,
    icon: <WishlistIcon />,
    title: 'Wishlist',
    href: '/dashboard/wishlist',
  },
  {
    id: 6,
    icon: <CompareIcon />,
    title: 'Compare',
    href: '/dashboard/compare',
  },
  {
    id: 7,
    icon: <CardsAddressIcon />,
    title: 'Cards & Address',
    href: '/dashboard/cards-and-address',
  },
  {
    id: 8,
    icon: <BrowsingHistoryIcon />,
    title: 'Browsing History',
    href: '/dashboard/browsing-history',
  },
  {
    id: 9,
    icon: <SettingIcon />,
    title: 'Setting',
    href: '/dashboard/setting',
  },
  {
    id: 10,
    icon: <LogoutIcon />,
    title: 'Log-out',
    href: '/dashboard',
  },
];

export const SideBar = () => {
  const router = useRouter();

  const { LogoutHandler } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState('');
  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '');

  const handleChangeCategory = (category, href) => {
    setSelectedCategory(category);

    if (category === 'Log-out') {
      LogoutHandler();
    }

    if (router.asPath !== href) {
      router?.push(href);
    }
  };

  console.log(
    'sssddd',
    pathSegments[pathSegments.length - 1]
      .replaceAll('-', ' ')
      .toLocaleLowerCase()
      .replace('and', '&')
  );
  return (
    <div>
      <div
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className="max-w-[1240px] mx-auto"
      >
        <div className="rounded bg-white border border-gray-100 shadow-2xl w-[264px] py-1">
          {CATEGORIES && CATEGORIES.length > 0 ? (
            CATEGORIES?.map(({ id, icon, title, href }) => (
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
            ))
          ) : (
            <p>No categories</p>
          )}
        </div>
      </div>
    </div>
  );
};
