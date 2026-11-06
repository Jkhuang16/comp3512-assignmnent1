import config from './data-minifed.json' with { type: 'json' };

document.addEventListener("DOMContentLoaded", () => {

    //Target HTML element of id=products
    const productSquare = document.querySelector("#products");

    //Isolate the first 20 products to display from the provided JSON file
    const first20Products = config.product.slice(0,20);

    console.log(first20Products);

})