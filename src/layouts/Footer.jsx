import CliconIcon from '@/components/Icons/CliconIcon';
import MacStoreIcon from '@/components/Icons/MacStoreIcon';
import PlayStoreIcon from '@/components/Icons/PlaystoreIcon';

const Footer = () => {
  let PopularTag = [
    {
      id: 1,
      name: 'game',
    },
    {
      id: 2,
      name: 'iphone',
    },
    {
      id: 3,
      name: 'tv',
    },
    {
      id: 4,
      name: 'asus laptop',
    },
    {
      id: 5,
      name: 'macbook',
    },
    {
      id: 6,
      name: 'ssd',
    },
    {
      id: 7,
      name: 'graphics card',
    },
    {
      id: 8,
      name: 'power bank',
    },
    {
      id: 9,
      name: 'smart tv',
    },
    {
      id: 10,
      name: 'speaker',
    },
    {
      id: 11,
      name: 'tablet',
    },
    {
      id: 12,
      name: 'microwave',
    },
    {
      id: 13,
      name: 'samsung',
    },
  ];
  return (
    <div className="bg-black text-white capitalize">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 xl:mx-0 mx-8">
          <div className="flex items-start flex-wrap gap-x-6 xl:gap-y-0 gap-y-5">
            <div className="w-60">
              <div className="flex flex-col gap-y-2">
                <CliconIcon />
                <div className="pt-2 text-base">
                  <p className="text-[#77878F] text-sm">customer supports</p>
                  <p className="font-medium text-lg">(069)-963-7454</p>
                </div>
                <div className="py-1 text-base">
                  <p className="text-[#ADB7BC]">43,western plaza</p>
                  <p className="text-[#ADB7BC]">surat,gujarat</p>
                </div>
                <div className="text-base">
                  <p>Ecomm@gmail.com</p>
                </div>
              </div>
            </div>

            {/* <div className="flex lg:justify-evenly justify-between sm:flex-row flex-col"> */}
            <div className="w-48">
              <div className="flex flex-col items-start gap-y-2">
                <h1 className="font-medium text-base  uppercase">
                  top category
                </h1>
                <div className="leading-7">
                  <p className="text-[#929FA5] hover:text-white">
                    computer & science
                  </p>
                  <p className="text-[#929FA5] hover:text-white">smartphone </p>
                  <p className="text-[#929FA5] hover:text-white">headphone </p>
                  <p className="text-white font-medium flex items-center gap-x-2">
                    <span className="bg-[#EBC80C] w-6 h-0.5"></span>Accesories
                  </p>
                  <p className="text-[#929FA5] hover:text-white">
                    camera & photo{' '}
                  </p>
                  <p className="text-[#929FA5] hover:text-white">tv & Homes </p>
                  <p className="text-[#EBC80C]">Browse all products </p>
                </div>
              </div>
            </div>

            <div className="w-48">
              <div className="flex flex-col items-start gap-y-2">
                <h1 className="font-medium text-base uppercase">quike links</h1>
                <div className="leading-7">
                  <p className="text-[#929FA5] hover:text-white">
                    shop and product
                  </p>
                  <p className="text-[#929FA5] hover:text-white">
                    shopping cart{' '}
                  </p>
                  <p className="text-[#929FA5] hover:text-white">wishlist </p>
                  <p className="text-[#929FA5] hover:text-white">compare</p>
                  <p className="text-[#929FA5] hover:text-white">
                    track order{' '}
                  </p>
                  <p className="text-[#929FA5] hover:text-white">
                    customer support{' '}
                  </p>
                  <p className="text-[#929FA5] hover:text-white">aboutUs </p>
                </div>
              </div>
            </div>

            <div className="w-48">
              <div className="flex flex-col gap-y-2">
                <h1 className="font-medium text-base uppercase">
                  download app
                </h1>

                <div className="leading-7">
                  <PlayStoreIcon />
                  <MacStoreIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-2 w-80">
              <h1 className="font-medium text-base uppercase">purchase tag</h1>

              <div className="flex flex-wrap gap-2">
                {PopularTag.map(({ id, name }) => (
                  <p
                    key={id}
                    className="hover:bg-gray-800 px-2.5 py-1.5 border-[1px] border-[#303639] rounded-sm w-fit"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#303639] py-2"></div>
      <div className="text-center text-[#ADB7BC] pb-3 sm:px-0 px-3">
        @copyright 2024 kaushik shamajibhai bhikadiya All rights reserved
      </div>
    </div>
  );
};

export default Footer;
