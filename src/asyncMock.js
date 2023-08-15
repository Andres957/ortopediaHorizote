const products = [
  {
    id: "1",
    name: "Silla de Ruedas",
    price: 1000,
    category: "ortopedia",
    img: "https://th.bing.com/th/id/OIP.G4R0I0XWB8J3XHVFeUYEgQHaHa?pid=ImgDet&rs=1",
    stock: 25,
    description: "silla de ruedas para amplia movilidad",
  },
  {
    id: "2",
    name: "cuello ortopedico",
    price: 1500,
    category: "alquiler",

    img: "https://http2.mlstatic.com/cuello-ortopedico-philadelphia-collar-cervical-filadelfia-D_NQ_NP_682701-MCO27785089835_072018-O.jpg",
    stock: 24,
    description: "cuello para reducir movilidad",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
