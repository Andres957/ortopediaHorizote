
import Item from '../Item/Item';
const ItemList =({producto}) => {
    return (
        <div className="flex flex-row ...">
            {producto.map(prod =>(<Item key={prod.id}{...prod} />))}
        </div>
    )
}
export default ItemList