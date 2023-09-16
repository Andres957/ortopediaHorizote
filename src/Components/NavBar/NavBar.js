import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";


import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  let [setOpen] = useState(false);
  return (
    <nav className="NavBar">
      <Link onClick={() => setOpen(false)} to={"/"}>
        <h1 className="bg-amber-200 italic hover:not-italic font-extrabold tracking-widest hover:font-serif text-amber-500  p-3   shadow-xl shadow-rose-400 text-center ">
          Ortopedia Horizonte
        </h1>
      </Link>
      <div className=" p-4 shadow-xl flex gap-10">
        <NavLink
          to={'/category/ortopedia'}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Ortopedia
        </NavLink>
        <NavLink
          to={'/category/alquiler'}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Alquiler
        </NavLink>
        <CartWidget />
      </div>
      
    </nav>
  );
};
export default NavBar;
