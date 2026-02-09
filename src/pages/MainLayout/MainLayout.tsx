// External deps
import {Outlet, NavLink} from 'react-router-dom';
import clsx from 'clsx';

// Internal deps
import {ROUTES} from '@/utils/constants/routes.ts';
import WifiIcon from "@/components/ui/Icons/WifiIcon";
import ClockIcon from "@/components/ui/Icons/ClockIcon";
import MainIcon from '@/components/ui/Icons/MainIcon';
import MenuIcon from '@/components/ui/Icons/MenuIcon';
import useApp from "@/hooks/useApp.ts";

// Local deps
import './MainLayout.css';

const MainLayout = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useApp();

  return (
    <div className="app">
      <aside className={clsx('sidebar', isDrawerOpen ? 'sidebar__show' : 'sidebar__hidden')}>
        <header className="sidebar__header" />
        <nav className="nav">
          <NavLink
            to={ROUTES.STATE}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <MainIcon />
            {isDrawerOpen && <span>Стан</span>}
          </NavLink>
          <NavLink
            to={ROUTES.CLOCK_SETTINGS}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <ClockIcon />
            {isDrawerOpen && <span>Налаштування годинника</span>}
          </NavLink>
          <NavLink
            to={ROUTES.WIFI_SETTINGS}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <WifiIcon />
            {isDrawerOpen && <span>Wifi налаштування</span>}
          </NavLink>
        </nav>
      </aside>
      <main className="main">
        <header className="main__header" onClick={() => setIsDrawerOpen(prev => !prev)}>
          <MenuIcon isOpen={isDrawerOpen} />
        </header>
        <div className="main__content">
          <Outlet />
        </div>
      </main>
      <div
        className={clsx("main__overlay", isDrawerOpen ? 'main__overlay--show' : 'main__overlay--hidden')}
        onClick={() => setIsDrawerOpen(false)}
      />
    </div>
  )
};

export default MainLayout;
