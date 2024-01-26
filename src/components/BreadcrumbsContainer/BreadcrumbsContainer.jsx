import { ArrowVectorIcon } from '@/components/Icons/ArrowVectorIcon';
import HomeIcon from '@/components/Icons/HomeIcon';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadcrumbsContainer = () => {
  const router = useRouter();

  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '');

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

          {pathSegments.map((segment, index) => (
            <span key={segment}>
              <Link
                className={`${
                  pathSegments.length === 1
                    ? `font-public-sans font-medium text-sm leading-5 text-secondary-500`
                    : `${
                        !index < pathSegments.length - 1 &&
                        'font-public-sans font-medium text-sm leading-5 text-secondary-500'
                      }`
                } capitalize`}
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
              >
                {segment.replaceAll('-', ' ')}
              </Link>
            </span>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadcrumbsContainer;
