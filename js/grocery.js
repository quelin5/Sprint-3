//acceder al archivo json: //los datos con los que trabajamos
//crear constante fetch
document.addEventListener('DOMContentLoaded', () => {
fetchData();
})
const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

// Exercise 11

//VARIABLES 
var cartList = []; //carrito de la compra
var cart = [];
var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;
let subtotalGrocery = 0;
let subtotalBeauty = 0;
let subtotalClothes = 0;

// Move this variable to a json file and load the data in this js
//esto es un array de objetos
var products = [ 
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]


//FUNCIONES

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart.

    cartList.push(products[id - 1]);
    console.log('El carrito ', cartList);
    calculateSubtotals();
    console.log('Cálculo del subtotal ', subtotal);
    calculateTotal();
    generateCart();   
}

// Exercise 2. Empty the shopping cart. 
function cleanCart() {
    cartList.length = 0; //set the array to 0. 
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    subtotalGrocery = 0; 
    subtotalClothes = 0;
    subtotalBeauty = 0; 
    for (let i = 0; i < cartList.length; i++) {
        switch (cartList[i].type) {
            case 'grocery':
                //get the price + añadir a subtotalGrocery
                subtotalGrocery += cartList[i].price;
                break;
            case 'beauty':
                subtotalBeauty += cartList[i].price;
                break;
            case 'clothes':
                subtotalClothes += cartList[i].price;
                break;
        }
    }
    subtotal.grocery.value = subtotalGrocery;
    subtotal.beauty.value = subtotalBeauty;
    subtotal.clothes.value = subtotalClothes;
}

// Exercise 4
function calculateTotal() {
    //applyPromotionsSubtotals(); Si lo descomento aparece error RangeTotal en consola. 

    total = 0;
    // Calculate total price of the cart.
    for (let x in subtotal) { //new way of expressing a condition. Looked up on the Internet! 
        total += subtotal[x].value;
        total -= subtotal[x].discount;
    }
    console.log('Cálculo del total ', total);
}

// Exercise 5
function applyPromotionsSubtotals() {
    let totalCookingOil = 0;
    let totalCupcakeMix = 0;
    subtotal.grocery.discount = 0; 
    //método find. encuentra num de cooking oils + cupcake mix
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].name === 'cooking oil') {
            totalCookingOil += 1;
        } else if (cartList[i].name === 'Instant cupcake mixture') {
            totalCupcakeMix += 1;
        }
    }

    if (totalCookingOil >= 3){
        subtotal.grocery.discount += (totalCookingOil*10.50 - totalCookingOil*10);
    } 

    if (totalCupcakeMix >= 10){
        subtotal.grocery.discount += ((totalCupcakeMix*5) - (totalCupcakeMix*(5*2/3)));
    }

    calculateTotal();
}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = [];
    for (let i = 0; i < cartList.length; i++) {
        if(cart.length > 0){ 
            let existe = false;
            for(let j = 0; j < cart.length; j++) {
                if(cartList[i].name === cart[j].name){ //ya existe? 
                    existe = true;
                    cart[j].quantity++;
                    cart[j].subtotal = cart[j].quantity*cart[j].price; 
                    break; //cuando lo encuentre sale. Se lleva la posición donde lo ha encontrado al siguiente paso. 
                }
            }

            if (!existe) {
                cart.push(cartList[i]);
                cart[cart.length-1].quantity = 1;
                cart[cart.length-1].subtotal = cart[cart.length-1].quantity*cart[cart.length-1].price;
            }

        } else {
            cart.push(cartList[i]);
            cart[0].quantity = 1;
            cart[0].subtotal = cart[0].quantity*cart[0].price;
        }
    }

    applyPromotionsCart();

    console.log('Cart :', cart);
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for(let i = 0; i < cart.length; i++) {
        if (cart[i].name === 'cooking oil'){
            if (cart[i].quantity >= 3){
                cart[i].subtotalWithDiscount = cart[i].quantity*10;
            }
        }

        if(cart[i].name === 'Instant cupcake mixture'){
            if (cart[i].quantity >= 10){
                cart[i].subtotalWithDiscount = cart[i].quantity*(5*(2/3));
            }
        }
    }
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    if (cart.length > 0){ 
        for (let i = 0; i < cart.length; i++){
            if (products[id-1].name === cart[i].name){
                cart[i].quantity++;
                cart[i].subtotal = cart[i].quantity*cart[i].price; 
            } else { 
                cart.push(products[id-1]);
                cart[0].quantity = 1;
                cart[0].subtotal = cart[0].quantity*cart[0].price;
            }
        } 
    } else {
        cart.push(products[id-1]);
        cart[0].quantity = 1;
        cart[0].subtotal = cart[0].quantity*cart[0].price;
    }

    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++){
        
    }
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}