import config from './data-minifed.json' with { type: 'json' };

document.addEventListener("DOMContentLoaded", () => {

    //Target HTML element of id=products
    const productSquare = document.querySelector("#products");

    //Isolate the first 20 products to display from the provided JSON file
    const first20Products = config.products.slice(0,20);


    console.log(first20Products);
        // {
        //     "id": 1,
        //     "title": "Essence Mascara Lash Princess",
        //     "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        //     "category": "beauty",
        //     "price": 9.99,
        //     "images": [
        //       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        //     ],
        //     "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        //   },
    //looping through first 20 products object
    for(let eachProduct of first20Products){
        const section = document.createElement("#products")

        //Main cards
        const card = document.createElement("div");
        card.classList.add("product-card");

        //Title
        const title = document.createElement("h3");
        title.textContent = eachProduct.title;

        //Price to 2 decimal points
        const price = document.createElement("p");
        price.textContent = "$" + eachProduct.price.toFixed(2);

        card.appendChild(title);
        card.appendChild(price);

    }
})