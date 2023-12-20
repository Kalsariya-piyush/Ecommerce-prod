const PageInitialLoader = ({ className }) => {
  return (
    <div className="flex mt-6 justify-center">
      <div
        className={`animate-spin w-8 h-8 border-[3px] border-current border-t-white border-l-white text-gray-800 rounded-full dark:text-white ${className}`}
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
};

export default PageInitialLoader;
