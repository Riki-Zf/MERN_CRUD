import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Link to={"/"}>
              Product Store <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/create"}>
                <button className="btn btn-sm btn-primary">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </Link>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
