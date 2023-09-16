import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
      img,
    };
    addItem(item, quantity);
  };
  return (
    <article className="flex flex-col items-center justify-center border rounded p-4 m-20 CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="w-40 h-40" />
      </picture>
      <section>
        <p className="Info">categoria: {category}</p>
        <p className="Info">Descripcion:{description}</p>
        <p classNmae="Info">precio: $ {price}</p>
      </section>
      <div>
        {quantityAdded > 0 ? (
          <div className="mt-5">
            <Link to="/">
              <svg className="inline mr-2 text-black w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continuar comprando
            </Link>
            <Link to="/cart">
              <button className="inline-block ml-4 mt-4 rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
                Ir al carrito
              </button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </article>
  );
};
export default ItemDetail;
