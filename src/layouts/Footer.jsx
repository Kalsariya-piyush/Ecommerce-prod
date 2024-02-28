import CliconIcon from "@/components/Icons/CliconIcon";
import MacStoreIcon from "@/components/Icons/MacStoreIcon";
import PlayStoreIcon from "@/components/Icons/PlaystoreIcon";

const Footer = () => {
  let PopularTag = [
    {
      id: 1,
      name: "game",
    },
    {
      id: 2,
      name: "iphone",
    },
    {
      id: 3,
      name: "tv",
    },
    {
      id: 4,
      name: "asus laptop",
    },
    {
      id: 5,
      name: "macbook",
    },
    {
      id: 6,
      name: "ssd",
    },
    {
      id: 7,
      name: "graphics card",
    },
    {
      id: 8,
      name: "power bank",
    },
    {
      id: 9,
      name: "smart tv",
    },
    {
      id: 10,
      name: "speaker",
    },
    {
      id: 11,
      name: "tablet",
    },
    {
      id: 12,
      name: "microwave",
    },
    {
      id: 13,
      name: "samsung",
    },
  ];
  return (
    <div className="bg-black text-white capitalize">
      <div className="max-w-7xl mx-auto">
        <div className="py-[72px] xl:mx-0 mx-8">
          <div className="flex items-start flex-wrap gap-x-6 xl:gap-y-0 gap-y-5">
            <div className="w-60">
              <div className="flex flex-col gap-y-3">
                <CliconIcon />
                <div className="text-base">
                  <p className="text-gray-500 font-normal text-sm pb-1">
                    customer supports
                  </p>
                  <p className="font-medium text-lg text-white">
                    (629) 555-0129
                  </p>
                </div>
                <div className="text-base">
                  <p className="text-gray-300 leading-6">43,western plaza</p>
                  <p className="text-gray-300 leading-6">surat,gujarat</p>
                </div>
                <div className="text-base font-medium">
                  <p>Ecomm@gmail.com</p>
                </div>
              </div>
            </div>

            {/* <div className="flex lg:justify-evenly justify-between sm:flex-row flex-col"> */}
            <div className="w-48">
              <div className="flex flex-col items-start gap-y-3">
                <h1 className="font-medium text-base uppercase">
                  Top Category
                </h1>
                <div className="leading-7">
                  <p className="text-gray-400 hover:text-white font-medium text-sm ">
                    computer & science
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    smartphone{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    headphone{" "}
                  </p>
                  <p className="text-white flex items-center gap-x-2 font-medium text-sm">
                    <span className="bg-warning-500 w-6 h-0.5"></span>Accesories
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    camera & photo{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    tv & Homes{" "}
                  </p>
                  <p className="text-warning-500 font-medium text-sm">
                    Browse all products{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-48">
              <div className="flex flex-col items-start gap-y-3">
                <h1 className="font-medium text-base uppercase">quike links</h1>
                <div className="leading-7">
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    shop and product
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    shopping cart{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    wishlist{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    compare
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    track order{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    Customer Help{" "}
                  </p>
                  <p className="text-gray-400 hover:text-white font-medium text-sm">
                    aboutUs{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-48">
              <div className="flex flex-col gap-y-4">
                <h1 className="font-medium text-base uppercase">
                  download app
                </h1>

                <div className="leading-7">
                  <PlayStoreIcon />
                  <MacStoreIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-4 w-80">
              <h1 className="font-medium text-base uppercase">purchase tag</h1>
              <div className="flex flex-wrap gap-2">
                {PopularTag.map(({ id, name }) => (
                  <p
                    key={id}
                    className="hover:bg-gray-800 px-2.5 py-1.5 border-[1px] border-gray-800 rounded-sm w-fit"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-800"></div>
      <div className="text-center text-gray-300 py-6 sm:px-0 font-normal text-sm leading-5">
        @copyright 2024 Ecommerce All rights reserved
      </div>
    </div>
  );
};

export default Footer;
