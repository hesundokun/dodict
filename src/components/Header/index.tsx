import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/assets/logo.png';

const Header = () => {
  return (
    <div className="flex flex-row justify-between py-3">
      <img src={Logo} width={46} className="rounded-full hover:cursor-pointer" />
      <ul className="flex flex-row gap-10 self-center">
        <li>
          <NavLink to="/create" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/dictionary" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Dictionary
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
