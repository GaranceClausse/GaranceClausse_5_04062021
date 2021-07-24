
/************************************* Mise en page de la confirmation de commande*/

let productInLocalStorage = JSON.parse(localStorage.getItem("products"));

/* *****************************Insertion du prix total */
/***Mettre les valeurs dans une array */
let totalPriceFinal = [];
for (let p = 0; p < productInLocalStorage.length; p++) {
    totalPriceFinal.push(productInLocalStorage[p].price * productInLocalStorage[p].quantity);
}
/*******Addition des valeurs de la liste */
const reducer = (acc, cur) => acc + cur;
const total_price_order = totalPriceFinal.reduce(reducer, 0);

let total_price_final = document.createElement("span");
total_price_final.innerHTML = total_price_order/100 + " €";
$(".totalPriceOrder").append(total_price_final);

/***********************Numéro de commande */
let idInLocalStorage = localStorage.getItem("orderId");

let orderNumber = document.createElement("span");
orderNumber.innerHTML = idInLocalStorage;
$(".orderNumber").append(orderNumber);