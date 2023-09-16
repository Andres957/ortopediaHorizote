import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "producto", itemId);
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProducto(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  if (loading) {
    return (
      <>
        <h2 className="text-center py-4 text-5xl bg-[#F3F4F6]">
          Cargando...
        </h2>
        
      </>
    );
  } else {
    return (
      <div>
        <ItemDetail {...producto} />
      </div>
    );
  }
};
export default ItemDetailContainer;
