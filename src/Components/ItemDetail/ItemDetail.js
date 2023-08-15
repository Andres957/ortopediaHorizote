
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="flex flex-col items-center justify-center border rounded p-4 m-20">
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
        <ItemCount
          initial={0}
          stock={stock}
          onAdd={(quantity) => console.log("cantidad agregada")}
        />
      </footer>
    </article>
  );
};
export default ItemDetail;
