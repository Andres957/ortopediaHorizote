
import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import { useContext } from 'react';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded]= useState(0)
  const { addItem}= useContext (CartContext)
  const handleOnAdd= (quantity) => {
    setQuantityAdded(quantity)
    const item ={
      id,name,price
    }
    addItem(item,quantity)
  }
  return (
    <article className="flex flex-col items-center justify-center border rounded p-4 m-20 CardItem" >
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="w-40 h-40" />
      </picture>
      <section>
        <p className="Info">categoria: {category}</p>
        <p className="Info">Descripcion:{description}</p>
        <p classNmae="Info">precio:{price}</p>
      </section>
      <footer className="ItemFooter">

        {
          quantityAdded > 0?(
            <Link to='/cart' className='Option'>terminar compra</Link>
          ) : (
            <ItemCount initial = {1} stock={stock} onAdd= {handleOnAdd}/>
          )
        }
       
      </footer>
    </article>
  );
};
export default ItemDetail;
