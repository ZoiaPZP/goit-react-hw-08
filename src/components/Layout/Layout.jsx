import { Outlet } from 'react-router-dom';
import Header from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;

