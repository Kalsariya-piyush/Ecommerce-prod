import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import SideNav from '@/layouts/SideNav';
import { useRouter } from 'next/router';

const Main = ({ meta, children }) => {
  const router = useRouter();

  const isDashboard = router.asPath.includes('dashboard');

  return (
    <div>
      <div className={`w-full text-black bg-gray-200 antialiased`}>
        {meta}
        <div className={`${isDashboard ? 'flex items-start' : ''}`}>
          {isDashboard ? <SideNav /> : <Header />}
          <div
            className={`w-full min-h-[calc(100vh)] ${
              isDashboard ? 'sm:ml-64 p-4' : ''
            }`}
          >
            <div
              className={`${
                isDashboard ? 'p-4 mt-14' : ''
              } border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}
            >
              {children}
            </div>
          </div>
        </div>
        {!isDashboard && <Footer />}
      </div>
    </div>
  );
};

export { Main };
