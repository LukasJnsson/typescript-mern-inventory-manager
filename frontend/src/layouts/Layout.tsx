
import Navbar from '../components/default/Navbar';
import ILayoutProps from '../types/layout.types';


export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
          <main>{children}</main>
    </>
  );
};