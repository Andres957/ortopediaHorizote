import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h2 className="bg-white rounded-lg p-3 shadow-xl text-center">
        Ortopedia Horizonte
      </h2>

      <div className="bg-red rounded-lg p-4 shadow-xl flex gap-10">
        <button>Productos </button>
        <button>Alquileres</button>
        < CartWidget/ >
      </div>
    </nav>
  );
};
export default NavBar;
