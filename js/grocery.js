// Exercise 11
// Move this variable to a json file and load the data in this js
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
var cartList = [];
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

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart.
    
    cartList.push(products[id-1]);
    console.log(cartList);
    calculateSubtotals();
    console.log(subtotal);
    calculateTotal();
    console.log(total);
}

// Exercise 2. Empty the shopping cart. 
function cleanCart() {
    cartList.length = 0; //set the array to 0. 
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    let subtotalGrocery = 0;
    let subtotalBeauty = 0;
    let subtotalClothes = 0;

    for (let i = 0; i < cartList.length; i++){
        switch(cartList[i].type){
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
    total = 0;
    // Calculate total price of the cart either using the "cartList" array.
    for (let x in subtotal) {
        total += subtotal[x].value;
    }
    console.log(total);
}

// Exercise 5
function applyPromotionsSubtotals() {

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
    addToCartList(id); //esta funcion llama a CartList. 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}