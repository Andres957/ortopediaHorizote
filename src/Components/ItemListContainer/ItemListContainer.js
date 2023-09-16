import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../db/firebaseConfig";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "producto"), where("category", "==", categoryId))
      : collection(db, "producto");

    getDocs(collectionRef)
      .then((response) => {
        const productoAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducto(productoAdapted);
        
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  if (loading) {
    return (
      <>
        <h2 className="text-center py-4 text-5xl bg-[#F3F4F6] mt-16 lg:mt-20">
          Cargando...
        </h2>
        
      </>
    );
  } else {
    return <ItemList producto={producto} />;
  }
};
export default ItemListContainer;
