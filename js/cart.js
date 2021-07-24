

let productInLocalStorage = JSON.parse(localStorage.getItem("products"));



/* si le panier est vide */
if (productInLocalStorage === null || productInLocalStorage == 0) {
    $(document).ready(function () {
        $("div").remove("#cart_container");
        let emptyCart = document.createElement("h5");
        emptyCart.className = "p-4 text-center display-2 emptyCart";
        emptyCart.innerHTML = "Le panier est vide!"
        $("#big_cart_container").prepend(emptyCart);
    })

} else {

    /**************************************************Création de la page panier de manière dynamique */

    /* Création container */
    let container_cart = document.createElement("div");
    container_cart.className = "container_cart mb-3";
    $("#cart_container").append(container_cart);

    /* Ajout du titre : nombre d'articles dans le panier */
    let title_cart = document.createElement("h5");
    title_cart.className = "mb-4 title_cart";
    title_cart.innerHTML = "Votre panier : " + productInLocalStorage.length + " ours";
    $(".container_cart").append(title_cart);

    /* Ajout des articles */

    for (k = 0; k < productInLocalStorage.length; k++) {

        let sub_container_cart = document.createElement("div");
        sub_container_cart.className = "pt-4 wish-list sub_container_cart" + k;
        $(".container_cart").append(sub_container_cart);


        let container_cart_card = document.createElement("div");
        container_cart_card.className = "row mb-4 container_cart_card" + k;
        $(".sub_container_cart" + k).append(container_cart_card);

        let sub_container_cart_card = document.createElement("div");
        sub_container_cart_card.className = "col-md-5 col-lg-3 col-xl-3 sub_container_cart_card" + k;
        $(".container_cart_card" + k).append(sub_container_cart_card);

        let img_container_cart_card = document.createElement("div");
        img_container_cart_card.className = "view zoom overlay z-depth-1 rounded mb-3 mb-md-0 img_container_cart_card" + k;
        $(".sub_container_cart_card" + k).append(img_container_cart_card);

      /* Create image */ {
            let img_cart_card = document.createElement("img");
            /* Set image class +alt */
            img_cart_card.className = "card-img-top img-fluid cover h-100 w-100";
            img_cart_card.src = productInLocalStorage[k].imageUrl;
            /* Add image*/
            $(".img_container_cart_card" + k).append(img_cart_card);
        }

        /* Carte descriptive du produit ajouté */
        let item_cart_card = document.createElement("div");
        item_cart_card.className = "col-md-7 col-lg-9 col-xl-9 d-flex row item_cart_card" + k;
        $(".container_cart_card" + k).append(item_cart_card);

        let sub_item_cart_card = document.createElement("div");
        sub_item_cart_card.className = "d-flex row sub_item_cart_card" + k;
        $(".item_cart_card" + k).append(sub_item_cart_card);

        let sub2_item_cart_card = document.createElement("div");
        sub2_item_cart_card.className = "justify-content-between sub2_item_cart_card" + k;
        $(".sub_item_cart_card" + k).append(sub2_item_cart_card);

        let teddy_name_cart = document.createElement("h5");
        teddy_name_cart.className = "teddy_name_cart" + k;
        teddy_name_cart.innerHTML = "Votre ours : " + productInLocalStorage[k].name;
        $(".sub2_item_cart_card" + k).append(teddy_name_cart);

        let teddy_price_cart = document.createElement("div");
        teddy_price_cart.className = "py-2 teddy_price teddy_price_cart" + k;
        teddy_price_cart.innerHTML = "Prix : " + productInLocalStorage[k].price * productInLocalStorage[k].quantity / 100 + "€";
        $(".sub2_item_cart_card" + k).append(teddy_price_cart);

        /************Quantité produit */

        let teddy_quantity_cart = document.createElement("div");
        teddy_quantity_cart.className = "def-number-input number-input safari_only mb-0 w-100 teddy_quantity_cart" + k;
        $(".sub_item_cart_card" + k).append(teddy_quantity_cart);

        let product_quantity_cart = document.createElement("input");
        product_quantity_cart.className = "quantity form-control text-center me-3 ps-2 pe-1 product_quantity_cart" + k;
        product_quantity_cart.type = "number";
        product_quantity_cart.min = "0";
        product_quantity_cart.value = (1, productInLocalStorage[k].quantity);
        product_quantity_cart.oninput =  
        $(".teddy_quantity_cart" + k).append(product_quantity_cart);


        /***************Prise en compte de la quantité dans le localStorage */ 
        let productQuantityListener = document.getElementsByClassName("quantity");
        console.log(productQuantityListener); 
        productInLocalStorage.quantity = document.getElementById("product_quantity_cart".value);
        localStorage.setItem("products", JSON.stringify(productInLocalStorage));

        let remove_cart = document.createElement("div");
        remove_cart.className = "d-flex justify-content-between align-items-center remove_cart" + k;
        $(".item_cart_card" + k).append(remove_cart);

        let remove_cart_container = document.createElement("div");
        remove_cart_container.className = "mt-3 remove_cart_container" + k;
        $(".remove_cart" + k).append(remove_cart_container);

        /**********Bouton supprimer l'article : html*/
        let remove_cart_btn = document.createElement("button");
        remove_cart_btn.className = "btn btn-primary btn-block card-link-secondary small text-uppercase mr-3 p-2 rounded delete_btn remove_cart_btn" + k;
        remove_cart_btn.type = "button";
        remove_cart_btn.href = "#!";
        remove_cart_btn.innerHTML = "Retirer cet ours";
        $(".remove_cart_container" + k).append(remove_cart_btn);

        let remove_cart_icon = document.createElement("i");
        remove_cart_icon.className = "px-3 fas fa-trash-alt mr-1 remove_cart_icon" + k;
        $(".remove_cart_btn" + k).prepend(remove_cart_icon);

        let separationItem = document.createElement("hr");
        separationItem.className = "mb-4" + k;
        $(".sub_container_cart" + k).append(separationItem);



    }

};
/*****************************Html du bouton panier */

let cartBtnPill = document.querySelectorAll("cartBtn");
cartBtnPill = document.createElement("span");
cartBtnPill.className = "badge bg-dark text-white ms-1 rounded-pill cart_item badge-pill";
cartBtnPill.innerHTML = productInLocalStorage.length;
$(".cartBtn").append(cartBtnPill);


/************** Bouton supprimer l'article : fonctionnalité */
let remove_btn = document.querySelectorAll(".delete_btn");
for (let l = 0; l < remove_btn.length; l++) {
    remove_btn[l].addEventListener("click", (event) => {
        let id_delete = productInLocalStorage[l]._id;

        /* Supprimer l'élément sélectionné*/
        productInLocalStorage = productInLocalStorage.filter(el => el._id !== id_delete);
        localStorage.setItem("products", JSON.stringify(productInLocalStorage));
        alert("Votre produit a bien été supprimé");
        window.location.href = "cart.html";
    })
};

/****************************************************** Bouton tout supprimer : delete all */
/* Injection HTML*/
let remove_all_btn = document.createElement("button");
remove_all_btn.className = "btn btn-primary btn-block card-link-secondary small text-uppercase w-100 mr-3 p-3 rounded delete_all_btn remove_all_btn";
remove_all_btn.type = "button";
remove_all_btn.href = "#!";
remove_all_btn.innerHTML = "Vider le panier";
$("#cart_container").append(remove_all_btn);

/*Supprimer la key produit du LocalStorage*/
let delete_all_btn = document.querySelector(".delete_all_btn");
delete_all_btn.addEventListener("click", (e) => {
    localStorage.removeItem("products");
    alert("Votre panier a bien été vidé!");
    window.location.href = "cart.html";
});

/************************************Gestion du prix total */
/***************************Prise en compte quantité choisie */
const quantityChoice = document.querySelector(".product_quantity_cart0").value;

/* *****************************Insertion du prix total */
/***Mettre les valeurs dans une array */
let total_price_calcul = [];
for (let m = 0; m < productInLocalStorage.length; m++) {
    total_price_calcul.push(productInLocalStorage[m].price * productInLocalStorage[m].quantity);
}
/*******Addition des valeurs de la liste */
const reducer = (acc, cur) => acc + cur;
const total_price = total_price_calcul.reduce(reducer, 0);


let cart_price_title = document.createElement("h5");
cart_price_title.className = "mb-3 cart_price_title";
cart_price_title.innerHTML = "Prix total"
$("#cart_price").append(cart_price_title);

let cart_price_list = document.createElement("ul");
cart_price_list.className = "list-group list-group-flush p-3 cart_price_list";
$("#cart_price").append(cart_price_list);


/****************Récapitulatif prix commande */
let cart_price_list_total = document.createElement("li");
cart_price_list_total.className = "list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 cart_price_list_total";
cart_price_list_total.innerHTML = "Prix de vos produits :  ";
$(".cart_price_list").append(cart_price_list_total);

let totalPrice = document.createElement("span");
totalPrice.innerHTML = total_price / 100 + " €";
$(".cart_price_list_total").append(totalPrice);

let cart_delivery = document.createElement("li");
cart_delivery.className = "list-group-item d-flex justify-content-between align-items-center px-0 cart_delivery";
cart_delivery.innerHTML = "Livraison : ";
$(".cart_price_list").append(cart_delivery);

let totalDelivery = document.createElement("span");
totalDelivery.innerHTML = "Gratuite";
$(".cart_delivery").append(totalDelivery);

let cart_total_price = document.createElement("li");
cart_total_price.className = "list-group-item d-flex bg-primary rounded justify-content-between align-items-center border-2 px-0 mb-3 cart_total_price";
cart_total_price.innerHTML = "Prix total (dont TVA) :  ";
$(".cart_price_list").append(cart_total_price);

let cartTotalPrice = document.createElement("span");
cartTotalPrice.className = "bold";
cartTotalPrice.innerHTML = total_price / 100 + " €";
$(".cart_total_price").append(cartTotalPrice);

/****************************************Formulaire de contact */

let formContainer = document.createElement("article");
formContainer.className = "formContainer";
$("#cart_price").append(formContainer);

let formTitle = document.createElement("h4");
formTitle.className = "formTitle";
formTitle.innerHTML = "Informations de livraison";
$(".formContainer").append(formTitle);

let formField = document.createElement("form");
formField.className = "p-3 formField";
$(".formContainer").append(formField);




/**Nom */
let formGroup1 = document.createElement("div");
formGroup1.className = "p-1 formGroup1";
$(".formContainer").append(formGroup1);

let formName = document.createElement("label");
formName.className = "formName";
formName.htmlFor = "name";
formName.innerHTML = "Nom : ";
$(".formGroup1").append(formName);

let formNameInput = document.createElement("input");
formNameInput.className = "form-control formNameInput";
formNameInput.id = "name";
formNameInput.name = "name";
formNameInput.value = "";
formNameInput.type = "text";
formNameInput.placeholder = "Tapez votre Nom";
$(".formGroup1").append(formNameInput);

/**Prénom */
let formGroup2 = document.createElement("div");
formGroup2.className = "p-1 formGroup2";
$(".formContainer").append(formGroup2);

let formSurName = document.createElement("label");
formSurName.className = "formSurName";
formSurName.htmlFor = "surname";
formSurName.innerHTML = "Prénom : ";
$(".formGroup2").append(formSurName);

let formSurNameInput = document.createElement("input");
formSurNameInput.className = "form-control formSurNameInput";
formSurNameInput.id = "surname";
formSurNameInput.value = "";
formSurNameInput.type = "text";
formSurNameInput.placeholder = "Tapez votre Prénom";
$(".formGroup2").append(formSurNameInput);

/**Adresse email */
let formGroup3 = document.createElement("div");
formGroup3.className = "p-1 formGroup3";
$(".formContainer").append(formGroup3);


let formEmail = document.createElement("label");
formEmail.className = "formEmail";
formEmail.htmlFor = "email";
formEmail.innerHTML = "Email : ";
$(".formGroup3").append(formEmail);

let formEmailInput = document.createElement("input");
formEmailInput.className = "form-control formEmailInput";
formEmailInput.id = "formEmail";
formEmailInput.type = "email";
formEmailInput.placeholder = "Tapez votre Email";
$(".formGroup3").append(formEmailInput);

/****Adresse de livraison */

let formGroup4 = document.createElement("div");
formGroup4.className = "p-1 formGroup4";
$(".formContainer").append(formGroup4);


let formAdress = document.createElement("label");
formAdress.className = "formAdress";
formAdress.htmlFor = "Adress";
formAdress.innerHTML = "Adresse : ";
$(".formGroup4").append(formAdress);

let formAdressInput = document.createElement("textarea");
formAdressInput.className = "form-control formAdressInput";
formAdressInput.id = "formAdress";
formAdressInput.rows = "4";
formAdressInput.cols = "50";
formAdressInput.placeholder = "N°, nom de rue, code postal \u000AExemple : 42 rue du code 42000";
$(".formGroup4").append(formAdressInput);

/****Ville */

let formGroup5 = document.createElement("div");
formGroup5.className = "p-1 formGroup5";
$(".formContainer").append(formGroup5);


let formCity = document.createElement("label");
formCity.className = "formCity";
formCity.htmlFor = "city";
formCity.innerHTML = "Ville :";
$(".formGroup5").append(formCity);

let formCityInput = document.createElement("textarea");
formCityInput.className = "form-control formCityInput";
formCityInput.id = "formCity";
formCityInput.placeholder = "Ville";
$(".formGroup5").append(formCityInput);


/******Bouton de commande */
let orderButton = document.createElement("button");
orderButton.className = "btn btn-primary btn-block p-3 mt-5 w-100 rounded orderButton";
orderButton.type = "submit";
orderButton.id = "orderButton";
orderButton.href = "order.html";
orderButton.innerHTML = "Finaliser ma commande";
$("#cart_price").append(orderButton);

/******************************Envoie du formulaire dans localStorage */

/*******************Add event listener du boutton commande */
const btnSendFrom = document.querySelector("#orderButton");
btnSendFrom.addEventListener("click", (e) => {
    e.preventDefault();
    const contact = {
        firstName: document.getElementById("surname").value,
        lastName: document.getElementById("name").value,
        address: document.getElementById("formAdress").value,
        city: document.getElementById("formCity").value,
        email: document.getElementById("formEmail").value,
    };

    /************************************Vérification des données du formulaire */
    /*************Vérification nom et prénom */
    const regExNoNumber = (value) => {
        return /^[A-Za-z]{2,20}$/.test(value);
    };

    function nameControl() {
        const nameCheck = contact.name;
        if (regExNoNumber(nameCheck)) {
            return true;
        } else {
            alert("Le Nom doit être constitué de 2 à 20 lettres \n Ne pas utiliser de caractères spéciaux")
            return false
        };
    };

    function surnameControl() {
        const surnameCheck = contact.surname;
        if (regExNoNumber(surnameCheck)) {
            return true;
        } else {
            alert("Le Prénom doit être constitué de 2 à 20 lettres \n Ne pas utiliser de caractères spéciaux")
            return false
        };
    };

    function cityControl() {
        const cityCheck = contact.city;
        if (regExNoNumber(cityCheck)) {
            return true;
        } else {
            alert("La ville doit être constitué uniquement de lettres \n Ne pas utiliser de caractères spéciaux")
            return false
        };
    };

    /******************Vérification email */
    const regExEmail = (value) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    };

    function emailControl() {
        const emailCheck = contact.email;
        if (regExEmail(emailCheck)) {
            return true;
        } else {
            alert("L'email n'est pas valide")
            return false
        };
    };

    /************Vérification adresse */
    const regExAdress = (value) => {
        return /^([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/.test(value);
    };

    function adressControl() {
        const adressCheck = contact.address;
        if (regExAdress(adressCheck)) {
            return true;
        } else {
            alert("L'adresse n'est pas valide. Veuillez indiquer le numéro le nom de rue et le code postal.")
            return false
        };
    };


    /**************************Envoie des données si tous les champs sont bons */
    if (nameControl() && surnameControl() && emailControl() && adressControl() && cityControl()) {

        /****Envoie dans localStorage */
        localStorage.setItem("contact", JSON.stringify(contact));

        /*****************************************Confirmer la commande */

        /*************************Fenêtre popup de confirmation */

        const popupConfirmOrder = () => {
            if (window.confirm(`Confirmer votre commande ou continuer vos achats?`)) {
                window.location.href = "order.html";
            } else {
                window.location.href = "index.html";
            }
        };

        popupConfirmOrder();

    } else {
        alert("Le formulaire n'est pas correctement rempli");
        
        /****Envoie dans localStorage */
        localStorage.setItem("contact", JSON.stringify(contact));
    };

    /**********************************Envoie vers le serveur */
    let products = [];
    for (let n = 0; n < productInLocalStorage.length; n++) {
        products.push(productInLocalStorage[n]._id);
    };

    const formToServer = {
        contact,
        products,
    };
    const promise01 = fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: JSON.stringify(formToServer),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(formToServer);

    promise01.then(async (response) => {
        try {
            const content = await response.json();
            console.log(content.orderId);
            if (response.ok) {
                console.log(`OrderId = ${content.orderId}`)
                /*****************Récupération de l'orderId */
                localStorage.setItem("orderId", content.orderId);
            } else {
                console.log(`Réponse du serveur : ${reponse.status}`);
                alert(`Problème avec le serveur : erreur ${reponse.status}`)
            };

        } catch (e) {
            console.log(e);
        }
    });





});


/***Laisser les valeurs du localStorage dans le formulaire */
/**Récupérer la key : value  */
const dataLocalStorage = localStorage.getItem("contact");
const dataLocalStorageJS = JSON.parse(dataLocalStorage);

/**Mettre les values dans les champs */
/*function fillFormInputFromLocalStorage(input) {
 document.querySelector(`#${input}`).value = dataLocalStorageJS.input;
};
fillFormInputFromLocalStorage("prénom");*/
document.querySelector("#name").value = dataLocalStorageJS.lastName;
document.querySelector("#surname").value = dataLocalStorageJS.firstName;
document.querySelector("#formEmail").value = dataLocalStorageJS.email;
document.querySelector("#formAdress").value = dataLocalStorageJS.address;
document.querySelector("#formCity").value = dataLocalStorageJS.city;



