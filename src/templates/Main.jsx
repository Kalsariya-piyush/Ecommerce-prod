const Main = ({ meta, children, className }) => {
  return (
    // <div className={`w-full text-black max bg-white antialiased`}>
    //   {meta}
    //   <div className={`${isDashboard ? 'flex items-start' : ''}`}>
    //     {/* {isDashboard ? <SideNav /> : <Header />} */}
    //     <div
    //       className={`w-full min-h-[calc(100vh)] ${
    //         isDashboard ? 'lg:ml-64' : ''
    //       }`}
    //     >
    //       <div
    //         className={`${
    //           isDashboard ? 'p-4 mt-14' : ''
    //         } border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`}
    //       >
    //         {children}
    //       </div>
    //     </div>
    //   </div>
    //   {!isDashboard && <Footer />}
    // </div>
    <>
      <div
        className={`w-full max-w-7xl px-6 mx-auto text-black bg-white ${className}`}
      >
        {meta}
        <div className={`w-full min-h-[calc(100vh)]`}>
          <div className={`rounded-lg dark:border-gray-700`}>{children}</div>
        </div>
        {/* {!isDashboard && <Footer />} */}
      </div>
    </>
  );
};

export { Main };
