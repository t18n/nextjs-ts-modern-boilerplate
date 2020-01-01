import { ReactNode, FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
