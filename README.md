Proyecto
E-Commerce relacionado a la compra y alquiler de productos ortopedicos, especializado en rehabilitacion, sujeto a especificaciones de un kinesiologo quien es el que solicita dicha pagina para comercializar sus productos. Este proyecto es el final del curso de react, es una version acotada del que se le va a entregar al cliente ya que falta aplicar estilos especificos. La libreria de estilos que se va a utilizar actualmente es talwind css.

para empezar este proyecto de forma local linkear el repositorio https://github.com/Andres957/ortopediaHorizote e instalar dependecias npm, crear un proyecto en Firebase https://console.firebase.google.com/u/0/project/react-9122c/firestore/data/~2Fproducto~2FKZlSZVLU5BLdaad0iunu?hl=es-419, crear una carpeta db en src del proyecto e importar datos en el archivo js de la misma, al ya estar cargados los productos en la db ahora se puede conectar los componentes con FirebaseConfig.js.

Componentes: la organizacion del proyecto es e varios componentes en sus respectivas carpetas.
Item: componente que tiene en el cada producto con su nombre, stock, precio e imagen ademas de un boton que dirige a otro componente el cual se denomina "detalle".
ItemList:lista de productos.
ItemCount: sirve para que el usuario detalle la cantidad de productos a agregar.
ItemDetail:detalle de producto.
Cart: sirve para que el usuario concluya la compra.
CartItem:muestra articulos en el carrito. se puede reiniciar el carrito o modificar cantidades de productos.
CartContext: contexto de ract que administra el estado del carrito.
CartWidget:mustra numero de articulos del carrito.
CheckoutForm: le permite al usuario completar la compra llenando formulario con datos personales.
Checkout: componente de pago, para revisar el pedido.
FirebaConfig: ajustes de configuracion de conexion con Firebase.
db: acceso a db.