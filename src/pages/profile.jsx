import PageInitialLoader from '@/components/Loaders/PageLoader';
import { useAuth } from '@/context/auth';
import { LinksArr, LinksArrLoggedOut } from '@/layouts/Header';
import Link from 'next/link';

const ProfilePage = () => {
  const { currentUser, LogoutHandler, isLoadingUser } = useAuth();

  return (
    <>
      {isLoadingUser && <PageInitialLoader />}

      {currentUser && !isLoadingUser && (
        <>
          <div className="h-screen w-full bg-gray-950 max-w-xs">
            <h1 className="text-white font-bold text-3xl mx-4 pt-4 italic">
              Ecommerce
            </h1>
            <div className="mt-5">
              {currentUser
                ? LinksArr.map(({ label, path }, index) => (
                    <Link
                      key={index}
                      href={`${path}`}
                      className="rounded-md mb-3 block mx-2 p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))
                : LinksArrLoggedOut.map(({ label, path }, index) => (
                    <Link
                      key={index}
                      href={`${path}`}
                      className="rounded-md block mx-2 p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
              {currentUser?.role === 'admin' && (
                <>
                  <Link
                    className="rounded-md mb-3 block mx-2 p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                    href="/add-product"
                  >
                    Add Product
                  </Link>
                  <Link
                    className="rounded-md block mb-3 mx-2 p-3 py-2 text-sm lg:text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                    href="/admin"
                  >
                    Admin
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="Pcontainer absolute top-[30%] left-[50%]">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="profile-head">
                <div className="flex items-center">
                  <img
                    src="/assets/images/pic.png"
                    alt=""
                    className="w-[50px] h-[50px] rounded-[50%]"
                  />
                  <div className="ml-5">
                    <h1 className="font-bold text-[20px]">
                      {currentUser.name}
                    </h1>
                    <p className="opacity-50">
                      make your profile page complete
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-[15%_auto] grid-cols-1 py-[20px] gap-[28px]">
                <div className="">
                  <Link
                    href={'/'}
                    className="px-2 border-[1px] bg-[#eee9e9]  border-[eee9e9] rounded-[3px] active:bg-[#d1c6c6]"
                  >
                    Go Home
                  </Link>
                  <br />
                  <button
                    onClick={() => LogoutHandler()}
                    className="px-2 border-[1px]  bg-[#eee9e9] border-[eee9e9] rounded-[3px] active:bg-[#d1c6c6] my-3"
                  >
                    Logout
                  </button>
                </div>

                <div className="">
                  <form className="pt-[10px] w-[480px]">
                    <div className="mb-4">
                      <label className="block text-gray-700">First name</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 md:w-[30pc] w-auto"
                        value={currentUser.name.split(' ')[0]}
                        disabled
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Last Name</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 md:w-[30pc] w-auto"
                        value={currentUser.name.split(' ')[1]}
                        disabled
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="border border-gray-300 rounded-md p-2 md:w-[30pc] w-auto"
                        value={currentUser.email}
                        disabled
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* <button
                  type="submit"
                  className="bg-[#ff4d79] text-white rounded-md py-1 px-4"
                >
                  Save Profile
                </button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
