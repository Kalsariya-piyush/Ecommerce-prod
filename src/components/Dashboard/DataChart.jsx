import priceFormatter from '@/constants';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
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
      height={360}
      yAxis={[
        {
          valueFormatter: priceFormatter,
        },
      ]}
    />
  );
}
