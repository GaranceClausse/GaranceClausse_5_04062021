

  let productInLocalStorage = JSON.parse(localStorage.getItem("product"));

  /* Création de la page panier de manière dynamique */
  
      /* Création container */
      let container_cart = document.createElement("div");
      container_cart.className = "container_cart mb-3";
      $("#cart_container").append(container_cart);

      let sub_container_cart = document.createElement("div");
      sub_container_cart.className = "pt-4 sub_container_cart wish-list";
      $(".container_cart").append(sub_container_cart);

      /* Ajout du titre : nombre d'articles dans le panier */
      let title_cart = document.createElement("h5");
      title_cart.className = "title_cart mb-4";
      title_cart.innerHTML = "Panier : ";
      $(".sub_container_cart").append(title_cart);

      let container_cart_card = document.createElement("div");
      container_cart_card.className = "row mb-4 container_cart_card";
      $(".sub_container_cart").append(container_cart_card);

      let sub_container_cart_card = document.createElement("div");
      sub_container_cart_card.className = "col-md-5 col-lg-3 col-xl-3 sub_container_cart_card";
      $(".container_cart_card").append(sub_container_cart_card);

      let img_container_cart_card = document.createElement("div");
      img_container_cart_card.className = "view zoom overlay z-depth-1 rounded mb-3 mb-md-0 img_container_cart_card";
      $(".sub_container_cart_card").append(img_container_cart_card);

      /* Create image */ {
      let img_cart_card = document.createElement ("img");
      /* Set image class +alt */
      img_cart_card.className = "card-img-top img-fluid cover h-100 w-100";
      img_cart_card.src = "images/teddy_Arnold.webp";
        /* Add image*/  
    $(".img_container_cart_card").append(img_cart_card);}

    /* Carte descriptive du produit ajouté */
    let item_cart_card = document.createElement("div");
    item_cart_card.className = "item_cart_card col-md-7 col-lg-9 col-xl-9 d-flex row";
    $(".container_cart_card").append(item_cart_card);

    let sub_item_cart_card = document.createElement("div");
    sub_item_cart_card.className = "sub_item_cart_card d-flex row";
    $(".item_cart_card").append(sub_item_cart_card);

    let sub2_item_cart_card = document.createElement("div");
    sub2_item_cart_card.className = "sub2_item_cart_card justify-content-between";
    $(".sub_item_cart_card").append(sub2_item_cart_card);

    let teddy_name_cart = document.createElement("h5");
    teddy_name_cart.className = "teddy_name_cart";
    teddy_name_cart.innerHTML = "Votre ours : ";
    $(".sub2_item_cart_card").append(teddy_name_cart);

    let teddy_quantity_cart = document.createElement("div");
    teddy_quantity_cart.className = "def-number-input number-input safari_only mb-0 w-100 teddy_quantity_cart";
    $(".sub_item_cart_card").append(teddy_quantity_cart);

    let product_quantity_cart = document.createElement("input");
     product_quantity_cart.className = "quantity form-control text-center me-3 ps-2 pe-1 product_quantity_cart";
     product_quantity_cart.type = "number";
     product_quantity_cart.min = "0";
     product_quantity_cart.value = "1";
     $(".teddy_quantity_cart").append(product_quantity_cart);

     let remove_cart = document.createElement("div");
     remove_cart.className = "remove_cart d-flex justify-content-between align-items-center";
     $(".item_cart_card").append(remove_cart);

     let remove_cart_container = document.createElement("div");
     remove_cart_container.className = "remove_cart_container mt-auto";
     $(".remove_cart").append(remove_cart_container);

     let remove_cart_btn = document.createElement("a");
    remove_cart_btn.className = "card-link-secondary remove_cart_btn small text-uppercase mr-3";
    remove_cart_btn.type = "button";
    remove_cart_btn.href= "#!";
    remove_cart_btn.innerHTML= "Retirer cet ours";
    $(".remove_cart_container").append(remove_cart_btn);

    let remove_cart_icon = document.createElement("i");
     remove_cart_icon.className = "remove_cart_icon px-3 fas fa-trash-alt mr-1";
     $(".remove_cart_btn").prepend(remove_cart_icon);









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