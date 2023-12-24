import AverageCard from '@/components/Cards/AverageCard';
import DataChart from '@/components/Dashboard/DataChart';
import Layout from '@/layouts/Layout';

const DATA = [
  {
    id: 1,
    title: 'Todays Sales',
    avgPrice: '$20.4K',
    description: 'We have sold 123 items',
    fillColor: '#475BE8',
  },
  {
    id: 2,
    title: 'Todays Revenue',
    avgPrice: '$8.2K',
    description: 'Availabale to payout',
    fillColor: '#4CE13F',
  },
  {
    id: 3,
    title: 'In Escrow',
    avgPrice: '$18.2K',
    description: 'Availabale to payout',
    fillColor: '#F29A2E',
  },
];

const MOST_SOLD_ITEMS = [
  {
    id: 1,
    title: 'Jeans',
    persantage: '70%',
  },
  {
    id: 2,
    title: 'Shirts',
    persantage: '40%',
  },
  {
    id: 3,
    title: 'Belts',
    persantage: '60%',
  },
  {
    id: 4,
    title: 'Caps',
    persantage: '80%',
  },
  {
    id: 5,
    title: 'Mobiles',
    persantage: '90%',
  },
  {
    id: 6,
    title: 'Others',
    persantage: '20%',
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-3 max-w-7xl">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <div className="grid grid-cols-3 gap-5">
          {DATA.map(({ id, avgPrice, description, fillColor, title }) => (
            <AverageCard
              key={id}
              avgPrice={avgPrice}
              description={description}
              fillColor={fillColor}
              title={title}
            />
          ))}

          {/* Graph  */}
          <div className="col-span-2 bg-white flex flex-col rounded-md py-5 w-full">
            <DataChart />
          </div>

          {/* Most sold Items  */}
          <div className="bg-white flex flex-col items-start gap-5 rounded-md py-5 px-4 w-full">
            <h3 className="text-base-50 text-lg font-bold leading-130">
              Most Sold Items{' '}
            </h3>

            <div className="flex flex-col gap-5 w-full">
              {MOST_SOLD_ITEMS.map(({ id, persantage, title }) => (
                <div key={id} className="flex w-full flex-col gap-1.5">
                  <div className="text-base-50 w-full flex justify-between items-center text-sm font-bold leading-130">
                    <p>{title}</p>
                    <p>{persantage}</p>
                  </div>
                  <div className="w-full bg-blue-25 h-2 rounded-lg">
                    <div
                      style={{ width: `${persantage}` }}
                      className="h-full bg-blue-950 rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest orders */}
          <div className="col-span-3 w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="rounded-t-md px-6 py-3 w-1/5">Products</th>
                  <th className="px-6 py-3 w-[10%]">Order ID</th>
                  <th className="px-6 py-3 w-[10%]">Date</th>
                  <th className="px-6 py-3 w-1/5">Customer name</th>
                  <th className="px-6 py-3 w-[10%]">Status</th>
                  <th className="px-6 py-3 w-1/5">Amount</th>
                  <th className="rounded-t-md px-6 py-3 w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="rounded-t-md px-6 py-3 w-1/5">Products</td>
                  <td className="px-6 py-3 w-[10%]">Order ID</td>
                  <td className="px-6 py-3 w-[10%]">Date</td>
                  <td className="px-6 py-3 w-1/5">Customer name</td>
                  <td className="px-6 py-3 w-[10%]">Status</td>
                  <td className="px-6 py-3 w-1/5">Amount</td>
                  <td className="rounded-t-md px-6 py-3 w-[10%]">Action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

// export const getServerSideProps = IsAuthenticated;
