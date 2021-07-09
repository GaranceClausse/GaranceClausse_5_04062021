

  let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

  

     /* si le panier est vide */
     if(productInLocalStorage === null){
        $(document).ready(function(){
            $("div").remove("#cart_container");
            let emptyCart = document.createElement("h5");
            emptyCart.className = "p-4 emptyCart";
            emptyCart.innerHTML = "Le panier est vide!"
            $("#big_cart_container").append(emptyCart);
          })

    }else{

        /* Création de la page panier de manière dynamique */
  
      /* Création container */
      let container_cart = document.createElement("div");
      container_cart.className = "container_cart mb-3";
      $("#cart_container").append(container_cart);

      

  for(k= 0; k<productInLocalStorage.length; k++) {

    let sub_container_cart = document.createElement("div");
    sub_container_cart.className = "pt-4 wish-list sub_container_cart" + k;
    $(".container_cart").append(sub_container_cart);

    /* Ajout du titre : nombre d'articles dans le panier */
    let title_cart = document.createElement("h5");
    title_cart.className = "mb-4 title_cart" + k;
    title_cart.innerHTML = "Panier : ";
    $(".sub_container_cart" + k).append(title_cart);

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
    teddy_price_cart.className = "py-2 teddy_price_cart" + k;
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
    remove_cart_btn.className = "card-link-secondary small text-uppercase mr-3 delete_btn remove_cart_btn" + k;
    remove_cart_btn.type = "button";
    remove_cart_btn.href= "#!";
    remove_cart_btn.innerHTML= "Retirer cet ours";
    $(".remove_cart_container" + k).append(remove_cart_btn);
/*
    
    remove_cart_btn[k].addEventListener ("onclick", (event)=>{
        $("div").remove(".container_cart_card" + k);
      });
*/
    let remove_cart_icon = document.createElement("i");
     remove_cart_icon.className = "px-3 fas fa-trash-alt mr-1 remove_cart_icon" + k;
     $(".remove_cart_btn" + k).prepend(remove_cart_icon);

    let separationItem = document.createElement("hr");
    separationItem.className = "mb-4" + k;
    $(".sub_container_cart" + k).prepend(separationItem);
      }
    };

    
         
   /* 
    let remove_btn = document.querySelectorAll(".delete_btn");
    for (let l=0; l < remove_btn.length; l++) {
    remove_btn[l].addEventListener("click", (event)=>{
    
    let id_delete = productInLocalStorage[l].id_productSelected;*/

    /* Supprimer l'élément sélectionné*/
   /* productInLocalStorage = productInLocalStorage.filter(el => el.id_productSelected == id_delete);
    });
    }








/*<div class="container px-4 px-lg-5 my-5" id="cart_container">
                    <!-- Card -->
                    <div class="mb-3">
                        <div class="pt-4 wish-list">

                            <h5 class="mb-4">Panier (<span>2</span> produits)</h5>

                            <div class="row mb-4">
                                <div class="col-md-5 col-lg-3 col-xl-3">
                                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img class="img-fluid w-100" src="images/teddy_Arnold.webp" alt="Sample">
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-9 col-xl-9">
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h5>Votre ours :
                                                    <span class="display-5 fw-bolder teddy_name"></span>
                                                </h5>
                                                <p class="mb-2 text-muted text-uppercase small">Couleur: </p>
                                            </div>
                                            <div>
                                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                                    <input class="quantity" min="0" name="quantity" value="1"
                                                        type="number">
                                                </div>
                                                <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                                    (Note, 1 piece)
                                                </small>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button"
                                                    class="card-link-secondary small text-uppercase mr-3"><i
                                                        class="fas fa-trash-alt mr-1"></i> Retirer cet ours </a>

                                            </div>
                                            <p class="mb-0"><span><strong id="summary"><span
                                                            class="teddy_price"></span></strong></span></p class="mb-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="mb-4">
                            <div class="row mb-4">
                                <div class="col-md-5 col-lg-3 col-xl-3">
                                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img class="img-fluid w-100" src="images/teddy_Garfunkel.webp" alt="Sample">
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-9 col-xl-9">
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h5>Votre ours :
                                                    <span class="display-5 fw-bolder teddy_name"></span>
                                                </h5>
                                                <p class="mb-2 text-muted text-uppercase small">Couleur: </p>
                                            </div>
                                            <div>
                                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                                    <input class="quantity" min="0" name="quantity" value="1"
                                                        type="number">
                                                </div>
                                                <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                                    (Note, 1 piece)
                                                </small>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button"
                                                    class="card-link-secondary small text-uppercase mr-3"><i
                                                        class="fas fa-trash-alt mr-1"></i> Retirer cet ours </a>

                                            </div>
                                            <p class="mb-0"><span><strong id="summary"><span
                                                            class="teddy_price"></span></strong></span></p class="mb-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-0"><i class="fas fa-info-circle mr-1"></i> N'attendez pas pour
                                acheter les ours les plus mignons de France!</p>

                        </div>
                    </div>
                    <!-- Card -->

                    <!-- Card -->
                    <div class="mb-3">
                        <div class="pt-4">

                            <h5 class="mb-4">Date de livraison attendue : </h5>

                            <p class="mb-0"> Lundi 12 juillet</p>
                        </div>

                        <!-- Card -->
                    </div>

                    <!-- Card -->
                    <div class="mb-3">
                        <div class="pt-4">

                            <h5 class="mb-4">Vous pouvez payer avec :</h5>

                            <img class="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                alt="Visa">
                            <img class="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                alt="American Express">
                            <img class="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                alt="Mastercard">
                            <img class="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                alt="PayPal acceptance mark">
                        </div>
                    </div>
                    <!-- Card -->
                </div>*/