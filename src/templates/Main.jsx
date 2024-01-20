import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const Main = ({ meta, children, className }) => {
  return (
    <>
      {meta}

      <Header />

      <div
        className={`w-full px-3 sm:px-5 max-w-7xl mx-auto text-black bg-white ${className}`}
      >
        <div className={`w-full min-h-[calc(100vh-260px)]`}>
          <div className={`rounded-lg dark:border-gray-700`}>{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export { Main };
