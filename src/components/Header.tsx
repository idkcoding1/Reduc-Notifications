import React from 'react';
import { Button } from './ui/button';
import Notificationsbutton from './Notificationsbutton';

const Header = () => {
  return (
    <header className="px-2 py-1.5 flex justify-between items-center h-12 bg-slate-900">
      <span>Redux Notifications</span>
      <Notificationsbutton />
    </header>
  )
};

export default Header;