// External deps
import {Outlet, NavLink} from 'react-router-dom';
import clsx from 'clsx';

// Internal deps
import {ROUTES} from '@/utils/constants/routes.ts';
import WifiIcon from "@/components/ui/Icons/WifiIcon";
import ClockIcon from "@/components/ui/Icons/ClockIcon";
import MainIcon from '@/components/ui/Icons/MainIcon';

// Local deps
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="app">
      <aside className="sidebar">
        <nav className="nav">
          <NavLink
            to={ROUTES.STATE}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <MainIcon />
            Стан
          </NavLink>
          <NavLink
            to={ROUTES.CLOCK_SETTINGS}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <ClockIcon />
            Налаштування годинника
          </NavLink>
          <NavLink
            to={ROUTES.WIFI_SETTINGS}
            className={({ isActive }) => clsx('nav__link', { 'nav__link--active': isActive })}
          >
            <WifiIcon />
            Wifi налаштування
          </NavLink>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
};

export default MainLayout;
