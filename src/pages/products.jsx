import { memo, useState } from "react";
import Layout from "../layouts/Layout";
import { Button } from "@mui/material";
import RightTickmartIcon from "@/components/Icons/Dashaboard/RightTickmartIcon";
import { CompareIcon } from "@/components/Icons/Dashaboard/CompareIcon";
import { borders } from '@mui/system';
import { DashboardIcon } from "@/components/Icons/Dashaboard/dashboardIcon";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";

const ProductsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-900">
        <div className="flex flex-col gap-y-5">
          <div className="mx-auto">
            <RightTickmartIcon />
          </div>
          <div className="text-center flex flex-col gap-y-1.5">
            <h1 className="font-semibold text-2xl">
              Your order is successfully place
            </h1>
            <p className="text-gray-600">
              Pellentesque sed lectus nec tortor tristique accumsan quis
              <br /> dictum risus. Donec volutpat mollis nulla non facilisis.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button className="uppercase !border-2 rounded-sm !border-primary-500  text-primary-500 bg-transparent hover:bg-transparent gap-x-2 flex items-center  py-2 px-4">
              <DashboardIcon /> return to shop
            </Button>

            <Button className="uppercase  rounded-sm bg-primary-500  text-white hover:bg-primary-500 gap-x-2 flex items-center  py-2 px-4">
              view order <RightArrowIcon/>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(ProductsPage);
