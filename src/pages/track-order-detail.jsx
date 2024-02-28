import Layout from "@/layouts/Layout";
import { memo, useState } from "react";
import OrderplacedIcon from "@/components/Icons/OrderplacedIcon";
import PackingIcon from "@/components/Icons/PackingIcon";
import OnroadIcon from "@/components/Icons/OnroadIcon";
import DeliveredIcon from "@/components/Icons/DeliveredIcon";
import DeliveredIcon1 from "@/components/Icons/DeliverdIcon1";
import DeliveredmanIcon from "@/components/Icons/DeliveredmanIcon";
import LocationIcon1 from "@/components/Icons/LocationIcon1";
import OnwayIcon from "@/components/Icons/OnwayIcon";
import VerifiedIcon from "@/components/Icons/VerifiedIcon";
import ConfirmedIcon from "@/components/Icons/ConfirmedIcon";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const STEPS = [
  {
    id: 1,
    label: "Order Placed",
    icon: <OrderplacedIcon />,
  },
  {
    id: 2,
    label: "Packaging",
    icon: <PackingIcon />,
  },
  {
    id: 3,
    label: "On The Road",
    icon: <OnroadIcon />,
  },
  {
    id: 4,
    label: "Delivered",
    icon: <DeliveredIcon />,
  },
];

const trackOrderDetail = () => {
   return (
    <Layout>
      <div className="my-16 border-[1px] border-gray-500">
        <div className="p-6 border-b-[1px] border-gray-500">
          <div className="p-6 bg-warning-50 border-[1px] border-warning-200 flex justify-between items-center">
            <div>
              <h3 className="text-xl leading-7 text-gray-900 pb-1">
                #96459761
              </h3>
              <p className="md:text-sm text-xs leading-5 text-gray-700">
                4 Products •{" "}
                <span>Order Placed in 17 Jan, 2021 at 7:32 PM</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[28px] leading-8 text-secondary-500">
                $1199.00
              </h3>
            </div>
          </div>
          <div className="my-6">
            <p className="text-sm leading-5 text-gray-700">
              Order expected arrival{" "}
              <span className="font-medium text-gray-900">23 Jan, 2021</span>
            </p>
          </div>
          <div>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Stepper
                activeStep={0}
                alternativeLabel
                sx={{
                  "& .MuiStepConnector-line": {
                    borderColor: "#FFE7D6",
                    borderTopWidth: "8px",
                  }
                }}
              >
                {STEPS.map(({ label, icon }) => (
                  <Step key={label}>
                    <StepLabel>
                      <div className="w-100 flex flex-col items-center pt-2">
                        {icon}
                        <p className="font-medium	smz:text-sm  text-xs leading-5 text-gray-900 pt-3">
                          {label}
                        </p>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-medium text-lg leading-6">Order Activity</h3>
          <div className="flex gap-x-4 items-center pt-6">
            <DeliveredIcon1/>
            <div className="h-full">
              <h4 className="text-sm leading-5 text-gray-900">
                Your order has been delivered. Thank you for shopping at Clicon!
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                23 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center py-4">
            <DeliveredmanIcon />
            <div>
              <h4 className="text-sm leading-5 text-gray-900">
                Our delivery man (John Wick) Has picked-up your order for
                delvery.
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                23 Jan, 2021 at 2:00 PM
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <LocationIcon1 />
            <div>
              <h4 className="text-sm leading-5 text-gray-900">
                Your order has reached at last mile hub.
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                22 Jan, 2021 at 8:00 AM
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 items-center py-4">
            <OnwayIcon />
            <div>
              <h4 className="text-sm leading-5 text-gray-900">
                Your order on the way to (last mile) hub.
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                21, 2021 at 5:32 AM
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <VerifiedIcon />
            <div>
              <h4 className="text-sm leading-5 text-gray-900">
                Your order is successfully verified.
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                20 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center pt-4">
            <ConfirmedIcon />
            <div>
              <h4 className="text-sm leading-5 text-gray-900">
                Your order has been confirmed.
              </h4>
              <p className="text-sm leading-5 text-gray-500 pt-2">
                19 Jan, 2021 at 2:61 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(trackOrderDetail);
