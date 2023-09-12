import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs,  collection, query, where} from 'firebase/firestore';

import {db} from '../../firebase/Firebase';
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState (true)
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true)

    const collectionRef= categoryId
    ? query (collection(db, 'producto'), where('category','==', categoryId))
    : collection(db,'producto')

    getDocs(collectionRef)
    .then(response=> {
      const productsAdapted=response.docs.map((doc)=>{
        const data= doc.data()
        return{ id:doc.id,...data}
      })
      setProducts(productsAdapted);
      setLoading(false)
      /*.catch (error => {
        console.log(error)
      })
      */
    },[categoryId])
      
  })}
  export default ItemListContainer;
    

  

