import { db } from "../firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"

const productosCollection = collection(db, "producto")

data.forEach((producto) => {

    addDoc(productoCollection, producto)
    .then((resultado) => {
        console.log("🚀 ~ .then ~ resultado:", resultado)
        return console.log("Producto agregado")
    })
    .catch((error) => {
        console.log("🚀 ~ data.forEach ~ error:", error)
        return console.log("Todo mal")
    })

})