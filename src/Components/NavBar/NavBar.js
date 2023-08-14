import CartWidget from "../CartWidget/CartWidget";

import {NavLink, Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="NavBar">
      <link to='/'>
      <h1 className="bg-amber-200 italic hover:not-italic font-extrabold tracking-widest hover:font-serif text-amber-500  p-3   shadow-xl shadow-rose-400 text-center ">
        Ortopedia Horizonte
      </h1>
      </link>   
      <div className=" p-4 shadow-xl flex gap-10">
        <NavLink to={`/category/alquiler`} className={({isActive})=> isActive ? 'ActiveOption':'Option'}>alquiler</NavLink>
       <NavLink to={`/category/compra`} className={({isActive})=> isActive ? 'ActiveOption':'Option'}>compra</NavLink>
        
      </div>
      <CartWidget/>
    </nav>
  );
};
export default NavBar;
