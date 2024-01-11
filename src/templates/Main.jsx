import Header from '@/layouts/Header';

const Main = ({ meta, children, className }) => {
  return (
    <div>
      {meta}
      <Header />
      <div
        className={`w-full px-5 max-w-7xl mx-auto text-black bg-white ${className}`}
      >
        <div className={`w-full min-h-[calc(100vh-250px)]`}>
          <div className={`rounded-lg dark:border-gray-700`}>{children}</div>
        </div>
        {/* {!isDashboard && <Footer />} */}
      </div>
    </div>
  );
};

export { Main };
