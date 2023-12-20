import Link from 'next/link';

const Footer = () => {
  return (
    // <>
    //   <div className="bg-gray-950 md:px-4 px-11 text-white">
    //     <div className="max-w-[1240px] mx-auto">
    //       <div className="grid md:grid-cols-3 grid-cols-1 py-[25px]">
    //         <div className="">
    //           <div className="py-[5px]">
    //             <h1 className="text-[30px] text-white italic">Find us</h1>
    //             <p>1001,chandighar,panjab</p>
    //           </div>
    //         </div>
    //         <div className="py-[5px]">
    //           <div className="">
    //             <h1 className="text-[30px] text-white italic">call us</h1>
    //             <p>968571412</p>
    //           </div>
    //         </div>
    //         <div className="py-[5px]">
    //           <div className="">
    //             <h1 className="text-[30px] text-white italic">mail us</h1>
    //             <p>rhpk@ecommerce.com</p>
    //           </div>
    //         </div>
    //       </div>
    //       <hr />

    //       <div className="grid md:grid-cols-3 grid-cols-1 py-[15px]">
    //         <div>
    //           <h1 className="text-white text-[25px] py-[5px] italic">Logo</h1>
    //           <p className="pr-[24px]">
    //             Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
    //             do eiusmod tempor incididuntut consec tetur adipisicing
    //             elit,Lorem ipsum dolor sit amet.
    //           </p>
    //           {/* <h2 className="text-white text-[25px] py-3 italic">Follow us</h2>
    //           <p>Instagram</p>
    //           <p>Youtube</p>
    //           <p>Facebook</p> */}
    //         </div>

    //         <div>
    //           <h1 className="text-white text-[25px] py-[5px] italic">
    //             Usefull links
    //           </h1>
    //           <div className="grid grid-cols-[25%_25%]">
    //             <div>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //             </div>
    //             <div>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //               <li className="list-none underline">
    //                 <a href="">Home</a>
    //               </li>
    //             </div>
    //           </div>
    //         </div>

    //         <div>
    //           <h1 className="text-white text-[25px] py-[5px] italic">
    //             Subscribe
    //           </h1>
    //           <p>
    //             lorem ever you do so the time line lorem ever you do so the time
    //             line
    //           </p>
    //           {/* <div className="py-[10px] ">
    //           <input type="text" placeholder="enter text" className="p-3 bg-black border"/>&nbsp;<button className="bg-[red] p-3 text-white ">click</button>
    //           </div> */}
    //         </div>
    //       </div>
    //       <hr />
    //       <div className="!py-5 text-center text-white">
    //         <p>
    //           &copy; Copyright 2018, All Right Reserved
    //           <span> @ecommerce</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <footer className="bg-gray-950 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Your E-commerce Store</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
