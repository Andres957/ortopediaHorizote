import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart} = useContext(CartContext);
  const totalQuantity= cart.reduce((total,item)=>total+item.quantity,0);
  const total=cart.reduce((total,item)=>total+item.price*item.quantity,0);
  if (totalQuantity === 0) {
    return (
      <section>
        <h1>No hay productos en tu carrito</h1>
        
        <Link to="/" className="Option">
          <button>Productos</button>
        </Link>
        </section>
    );
  }
  return (
    <section className="container mx-auto mt-10 lg:mb-36 lg:mt-10">
      <div className="flex flex-wrap shadow-md my-5">
        <div className="w-full bg-white lg:w-3/4 px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Carrito de compras</h1>
            <h2 className="font-semibold text-2xl">{totalQuantity} Items</h2>
          </div>
          <div className="flex justify-between mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/8 lg:w-2/5">
              Detalle del Producto
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/8 lg:w-1/5 text-center">
              Cantidad
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/8 lg:w-1/5 text-center">
              Precio
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/8 lg:w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <Link
            to="/"
            className="inline-flex font-semibold text-black text-sm mt-10 mr-3"
          >
            <svg className="inline mr-2 text-black w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            vuelve a la tienda
          </Link>
          <button
            className="inline-flex rounded-full border border-[#E5E7EB] mt-3 py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={() => clearCart()}
          >
            Borrar  todos los productos
          </button>
        </div>

        <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Resumen del pedido
          </h1>
          <div className="flex lg:inline-flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              {totalQuantity} Items
            </span>
            <span className="font-semibold text-sm">{total} $</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Envio
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Envio estandar - 10.00$</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo 
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="rounded-full border border-[#E5E7EB] px-5 py-2 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
            Aplicar
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Costo total</span>
              <span>{total + 10} $</span>
            </div>
            <Link to="/checkout">
              <button className="rounded-full border border-[#E5E7EB] py-3 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white uppercase w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
