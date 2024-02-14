import BreadcrumbsContainer from '@/components/BreadcrumbsContainer';
import { SideBar } from '@/components/Dashboard/SideBar';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { useRouter } from 'next/router';

const Main = ({ meta, children, className }) => {
  const router = useRouter();

  const isDashboard = router?.asPath?.includes('dashboard');

  return (
    <>
      {meta}

      <Header />

      <BreadcrumbsContainer
        middleArray={[{ href: '/dashboard', name: 'Dashboard' }]}
        lastPage={'Cards & Address'}
      />

      <div
        className={`w-full px-3 sm:px-5 max-w-7xl mx-auto text-black bg-white ${
          className || ''
        }`}
      >
        <div
          className={`w-full min-h-[calc(100vh-260px)] ${
            isDashboard && 'py-10 flex gap-[72px]'
          } `}
        >
          {isDashboard && <SideBar />}
          <div className={`rounded-lg dark:border-gray-700 w-full`}>
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export { Main };
