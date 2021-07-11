

  let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

  

     /* si le panier est vide */
     if(productInLocalStorage === null || productInLocalStorage == 0){
        $(document).ready(function(){
            $("div").remove("#cart_container");
            let emptyCart = document.createElement("h5");
            emptyCart.className = "p-4 emptyCart";
            emptyCart.innerHTML = "Le panier est vide!"
            $("#big_cart_container").prepend(emptyCart);
          })

    }else{

        /* Création de la page panier de manière dynamique */
  
      /* Création container */
      let container_cart = document.createElement("div");
      container_cart.className = "container_cart mb-3";
      $("#cart_container").append(container_cart);

      /* Ajout du titre : nombre d'articles dans le panier */
    let title_cart = document.createElement("h5");
    title_cart.className = "mb-4 title_cart";
    title_cart.innerHTML = "Votre panier : ";
    $(".container_cart").append(title_cart);

    /* Ajout des articles */

  for(k= 0; k<productInLocalStorage.length; k++) {

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
      let img_cart_card = document.createElement ("img");
      /* Set image class +alt */
      img_cart_card.className = "card-img-top img-fluid cover h-100 w-100";
      img_cart_card.src = "images/" + productInLocalStorage[k].imageUrl;
        /* Add image*/  
    $(".img_container_cart_card" + k).append(img_cart_card);}

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
    teddy_price_cart.innerHTML = "Prix : " + productInLocalStorage[k].price/100 + "€";
    $(".sub2_item_cart_card" + k).append(teddy_price_cart);

    let teddy_quantity_cart = document.createElement("div");
    teddy_quantity_cart.className = "def-number-input number-input safari_only mb-0 w-100 teddy_quantity_cart" + k;
    $(".sub_item_cart_card" + k).append(teddy_quantity_cart);

    let product_quantity_cart = document.createElement("input");
     product_quantity_cart.className = "quantity form-control text-center me-3 ps-2 pe-1 product_quantity_cart" + k;
     product_quantity_cart.type = "number";
     product_quantity_cart.min = "0";
     product_quantity_cart.value = "1";
     $(".teddy_quantity_cart" + k).append(product_quantity_cart);

     let remove_cart = document.createElement("div");
     remove_cart.className = "d-flex justify-content-between align-items-center remove_cart" + k;
     $(".item_cart_card" + k).append(remove_cart);

     let remove_cart_container = document.createElement("div");
     remove_cart_container.className = "mt-3 remove_cart_container" + k;
     $(".remove_cart" + k).append(remove_cart_container);

     /*Bouton supprimer l'article*/
     let remove_cart_btn = document.createElement("button");
    remove_cart_btn.className = "card-link-secondary small text-uppercase mr-3 p-2 rounded delete_btn remove_cart_btn" + k;
    remove_cart_btn.type = "button";
    remove_cart_btn.href= "#!";
    remove_cart_btn.innerHTML= "Retirer cet ours";
    $(".remove_cart_container" + k).append(remove_cart_btn);

    let remove_cart_icon = document.createElement("i");
     remove_cart_icon.className = "px-3 fas fa-trash-alt mr-1 remove_cart_icon" + k;
     $(".remove_cart_btn" + k).prepend(remove_cart_icon);

    let separationItem = document.createElement("hr");
    separationItem.className = "mb-4" + k;
    $(".sub_container_cart" + k).append(separationItem);

    

      }

    };

    
         
/* Bouton supprimer l'article */
    let remove_btn = document.querySelectorAll(".delete_btn");
    for (let l=0; l < remove_btn.length; l++) {
    remove_btn[l].addEventListener("click", (event)=>{
    let id_delete = productInLocalStorage[l]._id;

    /* Supprimer l'élément sélectionné*/
   productInLocalStorage = productInLocalStorage.filter(el => el._id !== id_delete);
   localStorage.setItem("product", JSON.stringify(productInLocalStorage));
   alert("Votre produit a bien été supprimé");
   window.location.href = "cart.html";
    })
    };

    /****************************************************** Bouton tout supprimer : delete all */
    /* Injection HTML*/
    let remove_all_btn = document.createElement("button");
    remove_all_btn.className = "card-link-secondary small text-uppercase w-100 mr-3 p-3 rounded delete_all_btn remove_all_btn";
    remove_all_btn.type = "button";
    remove_all_btn.href= "#!";
    remove_all_btn.innerHTML= "Vider le panier";
    $("#cart_container").append(remove_all_btn);

    /*Supprimer la key produit du LocalStorage*/
    let delete_all_btn = document.querySelector(".delete_all_btn");
    delete_all_btn.addEventListener("click", (e)=> {
    localStorage.removeItem("product");
    alert("Votre panier a bien été vidé!");
    window.location.href = "cart.html";
    });

/* Insertion du prix total */
/*let cart_price_list = document.createElement("ul");
cart_price_list.className = "list-group list-group-flush cart_price_list";
$("#cart_price").append(cart_price_list);

let total_price = document.querySelectorAll(".teddy_price");

    let cart_price_list_total = document.createElement("li");
cart_price_list_total.className = "list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 cart_price_list_total";
cart_price_list_total.innerHTML = "Prix de vos produits" + total_price;
$(".cart_price_list").append(cart_price_list_total);*/



/* <<ul class="list-group list-group-flush">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Prix de vos produits
                                <span>75 €</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Livraison
                                <span>Gratuite</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Prix total</strong>
                                    <strong>
                                        <p class="mb-0">(dont TVA)</p>
                                    </strong>
                                </div>
                                <span><strong>75 €</strong></span>
                            </li>
                        </ul>
                        <a href="order.html">
                            <button type="button" class="btn btn-primary btn-block">Finaliser ma commande</button>
                        </a>

                        */

