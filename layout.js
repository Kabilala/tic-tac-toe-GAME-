import React from 'react';

const Layout = ({ children }) => (
  <div className="bg-slate-800">
    <div className="container mx-auto p-4">{children}</div>
  </div>
);

export default Layout;
