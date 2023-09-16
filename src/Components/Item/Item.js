import { Link } from "react-router-dom";


const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="flex flex-col justify-between border rounded p-4 m-20">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src="" alt="" />
        <img src= {img} alt={name} className="w-40 h-40" />
      </picture>
      <section>
        <p className="info">precio: $ {price}</p>
        <p className="Info">Stock disponible:{stock}</p>
      </section>
      <Link to={`/item/${id}`}></Link>
      <footer className="ItemFooter">
      <Link to={`/item/${id}`} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ver Detalle</Link>
      </footer>
    </article>
  );
};
export default Item;
