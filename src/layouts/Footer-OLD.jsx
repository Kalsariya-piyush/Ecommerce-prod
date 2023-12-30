import Link from 'next/link';

const FooterOLD = () => {
  return (
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

export default FooterOLD;
