import React from 'react';

import Header from '@/components/Header';

interface IChildrenNode {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildrenNode) => {
  return (
    <div className="h-screen px-20">
      <header className="h-20 text-font">
        <Header />
      </header>

      <main className='h-4/5 mt-10'>{children}</main>
    </div>
  );
};

export default Layout;
