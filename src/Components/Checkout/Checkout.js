
import 'firebase/auth'; // Importa los servicios de Firebase que necesitas
import 'firebase/firestore'; // Importa servicios adicionales si es necesario
import { getDocs, addDoc, collection, query } from "firebase/firebase";
import {db} from '../../firebase/Firebase'
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { where } from "firebase/firestore";
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);
  const Timestamp = Timestamp;
  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const documentId = "";
      const writeBatch = batch();
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "producto");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("hay productos que estan fuera del stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    if (loading) {
      return <h1>se esta generando su orden</h1>;
    }
    if (orderId) {
      return <h1>el id de su orden es: {orderId}</h1>;
    }
    return (
      <div>
        <h1>checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    );
  };
};
export default Checkout;
