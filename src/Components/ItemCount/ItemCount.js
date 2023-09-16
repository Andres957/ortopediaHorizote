import { useState } from "react";
const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="flex">
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={decrement}>
          -
        </button>
        <h4 className="Number"> {quantity} </h4>
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mb-2" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        > agregar al carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
