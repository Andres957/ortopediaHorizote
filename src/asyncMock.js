const products= [
    {
        id:'1',
        name: 'Silla de Ruedas',
        price:1000,
        category:'ortopedia',
        img:'http://www.w3.org/1999/xhtml',
        stock:25,
        description:'silla de ruedas para amplia movilidad'
    },
    {
        id:'2',
        name: 'cuello ortopedico',
        price:1500,
        category:'ortopedia',
        img:'16929F113F80CA750BF0B7DD670CDC5697343AAD&thid=OIP.2yzgR9fb9VwxS7vd5CP37QHaF7&mediaurl=https%3a%2f%2fhttp2.mlstatic.com%2fcuello-ortopedico-philadelphia-collar-cervical-filadelfia-D_NQ_NP_682701-MCO27785089835_072018-O.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.db2ce047d7dbf55c314bbbdde423f7ed%3frik%3drTo0l1bcDGfdtw%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d800%26srw%3d1000&exph=400&expw=500&q=cuello+ortopedico&simid=608049790639109306&FORM=IRPRST&ck=0CA19B15AA30A685102C289F38878524&',
        stock:24,
        description:'cuello para reducir movilidad'
    },

]
export const getProducts =() => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductById= (productId)=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve (products.find(prod => prod.id=== productId))
        },500)
    })
}