import {useState} from "react";
import {MenuItem} from "@mui/material";
import {DashboardIcon} from "../Icons/Dashaboard/dashboardIcon";
import {OrderHistoryIcon} from "../Icons/Dashaboard/OrderHistoryIcon";
import {TrackOrderIcon} from "../Icons/Dashaboard/TrackOrderIcon";
import {ShoppingCartIcon} from "../Icons/Dashaboard/ShoppingCartIcon";
import {WishlistIcon} from "../Icons/Dashaboard/WishlistIcon";
import {CompareIcon} from "../Icons/Dashaboard/CompareIcon";
import {CardsAddressIcon} from "../Icons/Dashaboard/CardsAddressIcon";
import {BrowsingHistoryIcon} from "../Icons/Dashaboard/BrowsingHistoryIcon";
import {SettingIcon} from "../Icons/Dashaboard/SettingIcon";
import {LogoutIcon} from "../Icons/Dashaboard/LogoutIcon";
import {useRouter} from "next/router";

const CATEGORIES = [
  {
    id: 1,
    icon: <DashboardIcon />,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: <OrderHistoryIcon />,
    title: "Order History",
    href: "/dashboard/order-history",
  },
  {
    id: 3,
    icon: <TrackOrderIcon />,
    title: "Track Order",
    href: "/dashboard/track-order",
  },
  {
    id: 4,
    icon: <ShoppingCartIcon />,
    title: "Shopping Cart",
    href: "/dashboard/shopping-cart",
  },
  {
    id: 5,
    icon: <WishlistIcon />,
    title: "Wishlist",
    href: "/dashboard/wishlist",
  },
  {
    id: 6,
    icon: <CompareIcon />,
    title: "Compare",
    href: "/dashboard/compare",
  },
  {
    id: 7,
    icon: <CardsAddressIcon />,
    title: "Cards & Address",
    href: "/dashboard/cards-&-address",
  },
  {
    id: 8,
    icon: <BrowsingHistoryIcon />,
    title: "Browsing History",
    href: "/dashboard/browsing-history",
  },
  {
    id: 9,
    icon: <SettingIcon />,
    title: "Setting",
    href: "/dashboard/setting",
  },
  {
    id: 10,
    icon: <LogoutIcon />,
    title: "Log-out",
    href: "/dashboard",
  },
];

export const SideBar = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");

  const handleChangeCategory = (category, href) => {
    setSelectedCategory(category);
    if (router.asPath !== href) {
      router?.push(href);
    }
  };

  console.log(
    "sssddd",
    selectedCategory.toLocaleLowerCase(),
    pathSegments[pathSegments.length - 1]
      .replace("-", " " || "and", "&")
      .toLocaleLowerCase()
  );
  return (
    <div>
      <div
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="max-w-[1240px] mx-auto"
      >
        <div className="rounded bg-white border border-gray-100 shadow-2xl w-[264px] py-1">
          {CATEGORIES && CATEGORIES.length > 0 ? (
            CATEGORIES?.map(({id, icon, title, href}) => (
              <MenuItem
                key={id}
                onClick={() => handleChangeCategory(title, href)}
                className={`!text-gray-600 ${
                  title.toLocaleLowerCase() ===
                  pathSegments[pathSegments.length - 1]
                    .replace("-", " ")
                    .toLocaleLowerCase()
                    ? "!bg-primary-500 !text-white"
                    : "!bg-gray"
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
