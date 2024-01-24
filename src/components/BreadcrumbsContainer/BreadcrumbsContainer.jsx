import Link from 'next/link';
import HomeIcon from '@/components/Icons/HomeIcon';
import { ArrowVectorIcon } from '@/components/Icons/ArrowVectorIcon';
import { Breadcrumbs } from '@mui/material';
const BreadcrumbsContainer = ({ middleArray, lastPage }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-[1240px] mx-auto">
        <Breadcrumbs separator={<ArrowVectorIcon />} aria-label="breadcrumb">
          <Link
            underline="hover"
            key="1"
            className="flex items-center gap-2"
            color="inherit"
            href="/"
          >
            <HomeIcon fill={'#5F6C72'} /> Home
          </Link>
          {middleArray.map((item) => (
            <Link underline="hover" key="2" color="inherit" href={item?.href}>
              {console.log(item?.name)}
              {item?.name}
            </Link>
          ))}
          <p
            key="3"
            className="font-public-sans font-medium text-sm leading-5 text-secondary-500"
          >
            {lastPage}
          </p>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadcrumbsContainer;
