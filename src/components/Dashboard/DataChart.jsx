import priceFormatter from '@/constants';
import { BarChart } from '@mui/x-charts/BarChart';
import { FaCircle } from 'react-icons/fa';
import UpArrowIcon from '../Icons/UpArrowIcon';

export default function BasicBars() {
  return (
    <>
      <div className="px-4 flex justify-between items-start w-full">
        <div className="flex flex-col gap-3">
          <h4 className="text-base-50 text-base font-bold leading-130">
            Total Revenue
          </h4>
          <div className="flex gap-3 items-center">
            <p className="text-base-50 text-2xl leading-130 font-bold">
              $50.4K
            </p>
            <p className="flex text-green-100 text-xs font-bold items-center gap-2">
              <UpArrowIcon className="!w-2.5 !h-3" />
              <span className="inline-block">5% than last month</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <FaCircle color="#475BE8" className="text-xs" />
            <p className="text-base-75 text-xs font-poppins font-medium leading-130">
              Profit
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaCircle color="#E3E7FC" className="text-xs" />
            <p className="text-base-75 text-xs font-poppins font-medium leading-130">
              Loss
            </p>
          </div>
        </div>
      </div>

      {/* Chart  */}
      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            data: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
        ]}
        series={[
          {
            data: [
              4000, 3000, 6000, 4000, 3000, 1000, 5000, 4000, 2000, 2000, 4000,
              5000,
            ],
            color: '#475BE8',
          },
          {
            data: [
              1000, 6000, 4000, 2000, 3000, 4000, 2000, 6000, 3000, 2000, 4000,
              4000,
            ],
            color: '#E3E7FC',
          },
        ]}
        className="w-full h-full"
        height={300}
        yAxis={[
          {
            valueFormatter: priceFormatter,
          },
        ]}
      />
    </>
  );
}
