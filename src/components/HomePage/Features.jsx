import { CardIcon } from '../Icons/CardIcon';
import { FastDelivery } from '../Icons/FastDelivery';
import { HeadPhoneIconLg } from '../Icons/HeadPhoneIconlg';
import { TrophyIcon } from '../Icons/TrophyIcon';

const FEATURES = [
  {
    id: 1,
    heading: 'Fasted Delivery',
    desc: 'Delivery in 24/H',
    icon: <FastDelivery />,
  },
  {
    id: 2,
    heading: '24 Hours Return',
    desc: '100% money-back guarantee',
    icon: <TrophyIcon />,
  },
  {
    id: 3,
    heading: 'Secure Payment',
    desc: 'Your money is safe',
    icon: <CardIcon />,
  },
  {
    id: 4,
    heading: 'Support 24/7',
    desc: 'Live contact/message',
    icon: <HeadPhoneIconLg />,
  },
];

const Features = () => {
  return (
    <div className="lg:p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:border border-gray-100 rounded-md">
      

      {FEATURES.map(({ desc, heading, icon, id }) => (
        <div
          key={id}
          className="flex items-center lg:p-0 p-4 lg:rounded-none rounded-lg lg:border-0 border gap-4 px-4 lg:last:!border-r-0 lg:border-r border-gray-100"
        >
          {icon}

          <div className="flex flex-col gap-1">
            <h4 className="text-gray-900 text-sm font-medium leading-5 uppercase">
              {heading}
            </h4>
            <p className="text-sm text-gray-600 font-normal leading-5">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
