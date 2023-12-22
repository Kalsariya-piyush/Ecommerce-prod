import AverageCard from '@/components/Cards/AverageCard';
import Barchart from '@/components/Dashboard/Barchart';
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

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-3 max-w-6xl">
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
          <div className="col-span-2">
            <Barchart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

// export const getServerSideProps = IsAuthenticated;
