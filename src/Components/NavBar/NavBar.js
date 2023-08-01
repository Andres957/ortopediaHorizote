import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h1 className="bg-amber-200 italic hover:not-italic font-extrabold tracking-widest hover:font-serif text-amber-500  p-3   shadow-xl shadow-rose-400 text-center ">
        Ortopedia Horizonte
      </h1>

      <div className=" p-4 shadow-xl flex gap-10">
        <button className="outline outline-offset-2 outline-pink-500 ">Productos </button>
        <button className="outline outline-offset-2 outline-orange-500">Alquileres</button>
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
