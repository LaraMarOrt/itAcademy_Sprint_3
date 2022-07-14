// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: "Zapa",
        price: 10.5,
        type: "grocery",
        offer: {
            number: 3,
            percent: 20,
        },
    },
    {
        id: 2,
        name: "Tilla",
        price: 6.25,
        type: "grocery",
    },
    {
        id: 3,
        name: "Zas",
        price: 5,
        type: "grocery",
        offer: {
            number: 10,
            percent: 30,
        },
    },
    {
        id: 4,
        name: "Camis-a",
        price: 260,
        type: "beauty",
    },
    {
        id: 5,
        name: "Camiset-a",
        price: 20.5,
        type: "beauty",
    },
    {
        id: 6,
        name: "Cami-sa",
        price: 12.75,
        type: "beauty",
    },
    {
        id: 7,
        name: "Lawn Dress",
        price: 15,
        type: "clothes",
    },
    {
        id: 8,
        name: "Lawn-Chiffon Combo",
        price: 19.99,
        type: "clothes",
    },
    {
        id: 9,
        name: "Toddler Frock",
        price: 9.99,
        type: "clothes",
    },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let productTemp = products.find((product) => product.id == id);
    // 2. Add found product to the cartList array
    cartList.push(productTemp);
    // console.log(cartList);
}

// Exercise 2
function cleanCart() {
    // Utilizamos un pop para ir quitado uno a uno todos los elementos
    // Primera versión antes del ejercicio 7
    // while (cartList.length > 0) {
    //     cartList.pop();
    // }
    // console.log(cartList);

    // Segunda versión después de ejercicio 7
    while (cart.length > 0) {
        cart.pop();
    }
    calculateTotal();
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //     Primera versión antes del nivel 7
    // total = 0;
    //     for (let i = 0; i < cartList.length; i++) {
    //         total += cartList[i].price;
    //     }
    //     console.log(total);
    //     return total;

    // Segunda versión después del ejercicio 7
    total = 0;
    let Tquantity = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].subtotalWithDiscount;
        Tquantity += cart[i].quantity;
        
    }
    console.log(total);
    document.getElementById('total_price').innerHTML = total.toFixed(2);
    document.getElementById('count_product').innerHTML = Tquantity;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i < cartList.length; i++) {
        let productTemp = cart.find((product) => product.id == cartList[i].id);

        if ((productTemp == undefined)) {
            let pTemp = products.find((product) => product.id == id);
            pTemp.quantity = 1;
            pTemp.subtotal = pTemp.price;
            pTemp.subtotalWithDiscount = pTemp.price;
            cart.push(pTemp);
            break;

        } else {
            let productIndex = cart.indexOf(productTemp);
            cart[productIndex].quantity++;
            cart[productIndex].subtotal = cart[productIndex].quantity * cart[productIndex].price;
            cart[productIndex].subtotalWithDiscount = cart[productIndex].quantity * cart[productIndex].price;
            applyPromotionsCart();
            break;
        }
    }
    console.log(cart);

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {

        if ((cart[i].id == 1 && cart[i].quantity > 2)) {
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
        }

        if ((cart[i].id == 3 && cart[i].quantity > 9)) {
            cart[i].subtotalWithDiscount = (((cart[i].price * 2) / 3) * cart[i].quantity).toFixed(2);;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // document.getElementById("cart_list").forEach(function(c){ c.parentNode.removeChild(c);});

    const cart_list = document.getElementById("cart_list");
    cart_list.innerHTML="";
    const fragment = document.createDocumentFragment();
    console.log(cart_list);
    // Object.values(cart).forEach((item) 
    cart.forEach(({ name, price, quantity, subtotalWithDiscount }) => {

        const tr = document.createElement('tr');
        fragment.appendChild(tr);

        const th = document.createElement('th');
        th.textContent = name;
        fragment.appendChild(th);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = price;
        fragment.appendChild(tdPrice);

        const tdQuantity = document.createElement('td');
        tdQuantity.textContent = quantity;
        fragment.appendChild(tdQuantity);

        const tdDiscount = document.createElement('td');
        tdDiscount.textContent = subtotalWithDiscount;
        fragment.appendChild(tdDiscount);
        console.log(cart_list);
    });
    
    console.log(cart_list);
    cart_list.appendChild(fragment);
    console.log(cart_list);
}



// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {

        // 2. Add found product to the cart array or update its quantity in case it has been added previously.    
        let productTemp = cart.find((product) => product.id == id);

        if ((productTemp == undefined)) {
            let pTemp = products.find((product) => product.id == id);
            pTemp.quantity = 1;
            pTemp.subtotal = pTemp.price;
            pTemp.subtotalWithDiscount = pTemp.price;
            cart.push(pTemp);

        } else {
            let productIndex = cart.indexOf(productTemp);
            cart[productIndex].quantity++;
            cart[productIndex].subtotal = cart[productIndex].quantity * cart[productIndex].price;
            cart[productIndex].subtotalWithDiscount = cart[productIndex].quantity * cart[productIndex].price;
            applyPromotionsCart();
        }
        break;
    }
    applyPromotionsCart();
    calculateTotal();
    // printCart();
    // console.log(cart);
}


// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        // 2. Add found product to the cartList array
        let productTemp = cart.find((product) => product.id == id);

        if ((productTemp == undefined)) {
            alert("This product does not exist in the cart");

        } else {
            let productIndex = cart.indexOf(productTemp);

            if (cart[productIndex].quantity == 1) {
                cart.splice(productIndex, 1);

            } else {
                cart[productIndex].quantity--;
                cart[productIndex].subtotal = cart[productIndex].quantity * cart[productIndex].price;
                cart[productIndex].subtotalWithDiscount = cart[productIndex].quantity * cart[productIndex].price;
                applyPromotionsCart();
            }
        }
        break;
    }
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}




