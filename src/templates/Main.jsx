import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import BreadcrumbsContainer from '@/components/BreadcrumbsContainer/BreadcrumbsContainer';
import { useRouter } from 'next/router';
import { SideBar } from '@/components/Dashboard/SideBar';

const Main = ({ meta, children, className }) => {
  const router = useRouter();

  console.log('sas', router?.asPath);
  return (
    <>
      {meta}

      <Header />
      <BreadcrumbsContainer
        middleArray={[{ href: '/dashboard', name: 'Dashboard' }]}
        lastPage={'Cards & Address'}
      />

      <div
        className={`w-full px-3 sm:px-5 max-w-7xl mx-auto text-black bg-white ${className}`}
      >
        <div
          className={`w-full min-h-[calc(100vh-260px)] ${
            router?.asPath?.includes('dashboard') && 'py-10 flex gap-[72px]'
          } `}
        >
          {router?.asPath?.includes('dashboard') && <SideBar />}
          <div className={`rounded-lg dark:border-gray-700`}>{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export { Main };
