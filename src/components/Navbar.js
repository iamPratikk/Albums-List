import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-title"><Link to={'/'} >Albums List</Link></div>
        <div className="navbar-links">
          <Link to={'/add'} >Add Album</Link>
        </div>
      </div>
      <Outlet />
      <div className="footer">
        <p>2024 Albums List. All rights reserved.</p>
      </div>
    </>
  );
};

export default Navbar;
