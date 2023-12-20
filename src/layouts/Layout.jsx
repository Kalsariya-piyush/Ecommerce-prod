import { Main } from '../templates/Main';
import { Meta } from './Meta';

const Layout = ({ children, className }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next js Presentation"
          description="Build Your App Via Next Js."
        />
      }
      className={className}
    >
      {children}
    </Main>
  );
};

export default Layout;
