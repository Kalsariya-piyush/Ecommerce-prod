import { useState } from 'react';
import { MenuItem } from '@mui/material';
import { DashboardIcon } from '../Icons/Dashaboard/dashboardIcon';
import { OrderHistoryIcon } from '../Icons/Dashaboard/OrderHistoryIcon';
import { TrackOrderIcon } from '../Icons/Dashaboard/TrackOrderIcon';
import { ShoppingCartIcon } from '../Icons/Dashaboard/ShoppingCartIcon';
import { WishlistIcon } from '../Icons/Dashaboard/WishlistIcon';
import { CompareIcon } from '../Icons/Dashaboard/CompareIcon';
import { CardsAddressIcon } from '../Icons/Dashaboard/CardsAddressIcon';
import { BrowsingHistoryIcon } from '../Icons/Dashaboard/BrowsingHistoryIcon';
import { SettingIcon } from '../Icons/Dashaboard/SettingIcon';
import { LogoutIcon } from '../Icons/Dashaboard/LogoutIcon';

const CATEGORIES = [
  {
    id: 1,
    icon: <DashboardIcon />,
    title: 'Dashboard',
  },
  {
    id: 2,
    icon: <OrderHistoryIcon />,
    title: 'Order History',
  },
  {
    id: 3,
    icon: <TrackOrderIcon />,
    title: 'Track Order',
  },
  {
    id: 4,
    icon: <ShoppingCartIcon />,
    title: 'Shopping Cart',
  },
  {
    id: 5,
    icon: <WishlistIcon />,
    title: 'Wishlist',
  },
  {
    id: 6,
    icon: <CompareIcon />,
    title: 'Compare',
  },
  {
    id: 7,
    icon: <CardsAddressIcon />,
    title: 'Cards & Address',
  },
  {
    id: 8,
    icon: <BrowsingHistoryIcon />,
    title: 'Browsing History',
  },
  {
    id: 9,
    icon: <SettingIcon />,
    title: 'Setting',
  },
  {
    id: 10,
    icon: <LogoutIcon />,
    title: 'Log-out',
  },
];

export const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };
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
            CATEGORIES?.map(({ id, icon, title }) => (
              <MenuItem
                key={id}
                onClick={() => handleChangeCategory(title)}
                className={`!text-gray-600 ${
                  selectedCategory === title
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
