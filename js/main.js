/* Mise en page de la page index */
      
      for ( let i=1; i < teddies.length; i++) for (teddy of teddies) {
      

      let container1 = document.createElement("div");
      container1.className= "col-10 mb-5";
      container1.id = "container" + i;
      $("#teddy_container").append(container1);


      /* Create div */
      let card = document.createElement("div");
      card.className = "card d-flex h-100 justify-content-stretch shadow";
      card.id = "card" + i;
      $("#container" + i).append(card);

      /*create img container*/
      let img_cont = document.createElement("div");
        img_cont.className = "w-100 d-flex justify-content-center img_cont" + i;
        $("#card" + i).append(img_cont);

      /* Create image */
      let img = document.createElement ("img");
      /* Set image class +alt */
        img.className = "card-img-top img-fluid cover h-100 w-100";
        img.src = "images/" + teddy.imageUrl;
        img.alt= teddy.alt;
        /* Add image*/  
        $(".img_cont" + i).prepend(img);

        /* Create card_body */

        let card_body = document.createElement("div");
        card_body.className = "p-4 h-100  d-flex flex-column card-body" + i;
        $("#card" + i).append(card_body);

        /* Create text-center */

        let text_center = document.createElement("div");
        text_center.className = "text-center h-100 d-flex flex-column title" + i;
        $(".card-body" + i).append(text_center);

        /* Create Teddy's name */
        let teddy_name =  document.createElement("h5");
        teddy_name.className = "fw-bolder mb-auto teddy_name" + i;
        teddy_name.innerHTML = "L'ours " + teddy.name;
        $(".title" + i).append(teddy_name);

        /* Create reviews */
        let reviews = document.createElement("div");
        reviews.className = "d-flex justify-content-center justify-self-end p-3 mb-0 small text-warning reviews" + i;
        $(".title" + i).append(reviews);

        /*Add stars*/
        let stars = document.createElement("div");
        stars.className = "bi-star-fill";
        $(".reviews" + i).append(stars*5);

        /*Add price*/
        let teddy_price =  document.createElement("div");
        teddy_price.className = "fw-bolder mb-0 teddy_price" + i;
        teddy_price.innerHTML = teddy.price/100 + " €";
        $(".title" + i).append(teddy_price);

        /*Add footer card */

        let card_footer = document.createElement("div");
        card_footer.className = "d-flex flex-row p-2 pb-3 border-bottom-1 mb-0 mt-auto bg-transparent align-self-center card-footer" + i;  
        $("#card" + i).append(card_footer);

        /* Add link */
        let card_link = document.createElement("a");
        card_link.className = "btn btn-outline-dark mt-auto stretched-link card-link" + i;
        card_link.id= teddy._id;
        card_link.href= "page-item.html?"+ teddy._id;
        card_link.innerHTML= "Voir plus";
        $(".card-footer" + i).append(card_link);

        
      i++;

      };



/* Mise en page de page-item */


      /* Récupération de la chaine de requête dans l'url */

      const queryString_url_id = window.location.search;

      /*extraction id */
      const realId = queryString_url_id.slice(1);

      /*affichage du produit sélectionné par l'id*/
     /* let teddy_selected = fetch(`http://localhost:3000/api/teddies/${realId}`);*/

     const productSelected = teddies.find((element) => element._id === realId);
     console.log(productSelected);


     /* Code HTML de la partie décrivant le produit sélectionné */
      /* Création container */
     let container_item = document.createElement("div");
     container_item.className = "container container_page_item px-4 px-lg-5 my-5";
     $("#container_page_item").append(container_item);

     let sub_container = document.createElement("div");
     sub_container.className = "row sub_container gx-4 gx-lg-5";
     $(".container_page_item").append(sub_container);

     /* Ajout de l'image */
     let product_pic = document.createElement("div");
     product_pic.className = "product_pic col-md-6";
     $(".sub_container").append(product_pic);

     let product_img = document.createElement("img");
     product_img.className = "card-img-top product_img mb-5 mb-md-0";
     product_img.src= "images/" + productSelected.imageUrl;
     product_img.alt = productSelected.alt;
     $(".product_pic").append(product_img);

      /*Ajout du bandeau descriptif*/
     let product_description = document.createElement("div");
     product_description.className = "product_description col-md-6";
     $(".sub_container").append(product_description);

     let product_name = document.createElement("h1");
     product_name.className = "display-5 fw-bolder teddy_name";
     product_name.innerHTML = "Votre ours " + productSelected.name;
     $(".product_description").append(product_name);

     let product_price = document.createElement("div");
     product_price.className = "product_price fs-5 mb-5";
     product_price.innerHTML = productSelected.price/100 + "€";
     $(".product_description").append(product_price);

     let product_explain = document.createElement("p");
     product_explain.className = "product_explain lead";
     product_explain.innerHTML = "Tous nos ours sont faits mains en France par des artisans formés par nos soins. Notre maison existe depuis plus de 200 ans et s'assure de la qualité de chacun de nos produits. Notre charte qualité est à votre disposition en bas de page, ainsi que nos garanties et conditions d'envoie";
     $(".product_description").append(product_explain);

      /* Choix des options*/
     let product_form_container = document.createElement("div");
     product_form_container.className = "product_form_container mb-5";
     $(".product_description").append(product_form_container);

     let product_form = document.createElement("form");
     product_form.className = "product_form";
     $(".product_form_container").append(product_form);

     let product_form_label = document.createElement("label");
     product_form_label.className = "product_form_label";
     product_form_label.for = "product_option";
     product_form_label.innerHTML = "Choisir une option  ";
     $(".product_form").append(product_form_label);

     let product_form_select = document.createElement("select");
     product_form_select.className = "product_form_select";
     product_form_select.name = "product_option";
     product_form_select.id = "product_option"
     $(".product_form").append(product_form_select);

     let product_form_option1 = document.createElement("select");
     product_form_option1.value = "";
     product_form_option1.innerHTML = productSelected.color;
     $(".product_form_select").append(product_form_option1);

      /* Bouton d'ajout au panier + choix nombre articles*/
     let product_add_to_cart_container = document.createElement("div");
     product_add_to_cart_container.className = "d-flex flex-row product_add_to_cart_container";
     $(".product_description").append(product_add_to_cart_container);


     let product_quantity = document.createElement("input");
     product_quantity.className = "form-control text-center me-3 ps-2 pe-1 product_quantity";
     product_quantity.id= "inputQuantity";
     product_quantity.type = "number";
     product_quantity.min = "0";
     product_quantity.value = "1";
     $(".product_add_to_cart_container").append(product_quantity);

     
     let product_add_to_cart = document.createElement("button");
     product_add_to_cart.className = "btn btn-outline-dark flex-shrink-0 add-to-cart position-relative product_add_to_cart";
     product_add_to_cart.name= "btn-order";
     product_add_to_cart.type = "submit";
     $(".product_add_to_cart_container").append(product_add_to_cart);

     let cart_icon = document.createElement("i");
     cart_icon.className = "bi-cart-fill me-1";
     $(".product_add_to_cart").append(cart_icon);

     let cart_link = document.createElement("a");
     cart_link.className = "stretched-link cart_link";
     cart_link.href = "cart.html";
     cart_link.innerHTML = "Ajouter au panier";
     $(".product_add_to_cart").append(cart_link);




/* Mise en page des produits supplémentaires */

     for ( let i=1; i < teddies.length; i++) for (teddy of teddies) {
      

      let item_container1 = document.createElement("div");
      item_container1.className= " col-10 col-sm-8 col-md-3 col-lg-2 col-xl-2 mb-5";
      item_container1.id = "item_container" + i;
      $("#other_item_container").append(item_container1);


      /* Create div */
      let item_card = document.createElement("div");
      item_card.className = "card d-flex h-100 justify-content-stretch shadow";
      item_card.id = "item_card" + i;
      $("#item_container" + i).append(item_card);

      /*create img container*/
      let item_img_cont = document.createElement("div");
        item_img_cont.className = "w-100 d-flex justify-content-center item_img_cont" + i;
        $("#item_card" + i).append(item_img_cont);

      /* Create image */
      let item_img = document.createElement ("img");
      /* Set image class +alt */
      item_img.className = "card-img-top img-fluid cover h-100 w-100";
      item_img.src = "images/" + teddy.imageUrl;
      item_img.alt= teddy.alt;
        /* Add image*/  
        $(".item_img_cont" + i).prepend(item_img);

        /* Create card_body */

        let item_card_body = document.createElement("div");
        item_card_body.className = "p-4 h-100  d-flex flex-column item_card-body" + i;
        $("#item_card" + i).append(item_card_body);

        /* Create text-center */

        let item_text_center = document.createElement("div");
        item_text_center.className = "text-center h-100 d-flex flex-column item_title" + i;
        $(".item_card-body" + i).append(item_text_center);

        /* Create Teddy's name */
        let item_teddy_name =  document.createElement("h5");
        item_teddy_name.className = "fw-bolder mb-auto item_teddy_name" + i;
        item_teddy_name.innerHTML = "L'ours " + teddy.name;
        $(".item_title" + i).append(item_teddy_name);

        /* Create reviews */
        let item_reviews = document.createElement("div");
        item_reviews.className = "d-flex justify-content-center justify-self-end p-3 mb-0 small text-warning item_reviews" + i;
        $(".item_title" + i).append(item_reviews);

        /*Add stars*/
        let item_stars = document.createElement("div");
        item_stars.className = "bi-star-fill";
        $(".item_reviews" + i).append(item_stars*5);

        /*Add price*/
        let item_teddy_price =  document.createElement("div");
        item_teddy_price.className = "fw-bolder mb-0 item_teddy_price" + i;
        item_teddy_price.innerHTML = teddy.price/100 + " €";
        $(".item_title" + i).append(item_teddy_price);

        /*Add footer card */

        let item_card_footer = document.createElement("div");
        item_card_footer.className = "d-flex flex-row p-2 pb-3 border-bottom-1 mb-0 mt-auto bg-transparent align-self-center item_card-footer" + i;  
        $("#item_card" + i).append(item_card_footer);

        /* Add link */
        let item_card_link = document.createElement("a");
        item_card_link.className = "btn btn-outline-dark mt-auto stretched-link item_card-link" + i;
        item_card_link.id= teddy._id;
        item_card_link.href= "page-item.html?"+ teddy._id;
        item_card_link.innerHTML= "Voir plus";
        $(".item_card-footer" + i).append(item_card_link);

        
      i++;

      };

      if (productSelected._id === "5beaacd41c9d440000a57d97") {
        $(document).ready(function(){
          $("div").remove("#item_container5");
        })
      };
      if (productSelected._id === "5be9c8541c9d440000665243") {
        $(document).ready(function(){
          $("div").remove("#item_container1");
        })
      };
      if (productSelected._id === "5beaa8bf1c9d440000a57d94") {
        $(document).ready(function(){
          $("div").remove("#item_container2");
        })
      };
      if (productSelected._id === "5beaaa8f1c9d440000a57d95") {
        $(document).ready(function(){
          $("div").remove("#item_container3");
        })
      };
      if (productSelected._id === "5beaabe91c9d440000a57d96") {
        $(document).ready(function(){
          $("div").remove("#item_container4");
        })
      };
      




































 /* Add to cart : Ajout au panier */

 $('.add-to-cart').on('click', (e) => {
   addToCart(e.currentTarget)
 })
 
 const addToCart = (teddy) => {
   const teddyId = $(teddy).attr('teddy._id');
   const isAlreadyInCart = $.grep(teddysInCart, el => {return el.id == teddy._id}).length;
 
   if (isAlreadyInCart) {
     $.each(storageData, (i, el) => {
       if (teddy._id == el.id) {
         el.itemsNumber += 1;
       }
     })
   } else {
     const newteddy = {
       id: Number(teddy._id),
       itemsNumber: 1
     }
 
     storageData.push(newteddy);
   }
 
   updateCart();
   updateteddyList();
 }


 /* Import teddy : importer les teddies */

 $(document).ready(() => {
   let storageData = [];
 
   $.get("Teddy.js", (res) => {
     teddyList = res;
 
     const isStorageEmpty = Cookies.getStorage('cart').length === 0;
 
     if (!isStorageEmpty) {
       storageData = Cookies.getStorage('cart');
     }
 
     updateCart();
     buildteddyList();
     buildDropdownCart();
     bindteddyEvents();
   });
 });


 /* Update cart : mettre le panier à jour */

 const updateCart = () => {
   Cookies.setStorage('cart', storageData);
   teddysInCart = [];
 
   parseStorageDataWithTeddy();
   updatePill();
   updateTotalAmount();
 }
 
 const parseStorageDataWithTeddy = () => {
   $.each(storageData, (i, el) => {
     const id = el.id;
     const itemsNumber = el.itemsNumber;
 
     $.each(teddyList, (i, el) => {
       if (id == el.id) {
         el.itemsNumber = itemsNumber;
         teddysInCart.push(el)
       }
     });
   });
 }
 
 const updatePill = () => {
   let itemsInCart = 0;
 
   $.each(teddysInCart, (i, el) => {
     itemsInCart += el.itemsNumber;
   });
 
   $('.badge-pill').html(itemsInCart);
 }
 
 const updateTotalAmount = () => {
   let total = 0;
   const shippingCost = 0;
   let summary = (total + shippingCost).toFixed(2);
 
   $.each(teddysInCart, (i, el) => {
     total += el.itemsNumber * el.price;
   });
 
   $('#total-price').html(`$${total.toFixed(2)}`);
   $('#shipping-price').html(shippingCost === 0 ? 'Free' : `$${shippingCost}`);
   $('#summary').html(`$${summary}`);
 }


 /* teddy list : liste de produits */
 const dropdownteddysTemplate = (teddy) => {
   return `
     <div id="${teddy.id}-dropdown" class="teddy row">
       <div class="col-4 px-2">
         <div class="view zoom overlay z-depth-1 rounded mb-md-0">
           <img class="img-fluid w-100" src="${teddy.image}" alt="Sample">
         </div>
       </div>
       <div class="col-5 px-2">
         <span>${teddy.name}</span>
         <p class="mb-0"><span><strong class="price">$${(teddy.price * teddy.itemsNumber).toFixed(2)}</strong></span></p>
       </div>
       <div class="col-2 pl-0 pr-2">
         <a href="#!" type="button" class="remove-teddy"><i class="fas fa-trash-alt"></i></a>
       </div>
     </div>
     </div>
     <hr class="mb-4">
   `
 }
 
 const teddysTemplate = (teddy) => {
   return `
     <div id="${teddy._id}" class="teddy row mb-4">
       <div class="col-md-5 col-lg-3 col-xl-3">
         <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
           <img class="img-fluid w-100" src="${teddy.imageUrl}" alt="Sample">
           <a href="#!">
             <div class="mask waves-effect waves-light">
               <img class="img-fluid w-100" src="${teddy.imageUrl}">
               <div class="mask rgba-black-slight waves-effect waves-light"></div>
             </div>
           </a>
         </div>
       </div>
       <div class="col-md-7 col-lg-9 col-xl-9">
         <div>
           <div class="d-flex justify-content-between">
             <div>
               <h5>${teddy.name}</h5>
               <p class="mb-3 text-muted text-uppercase small">${teddy.category} - ${teddy.color}</p>
               <p class="mb-2 text-muted text-uppercase small">Color: ${teddy.color}</p>
             </div>
             <div>
               <div class="def-number-input number-input safari_only mb-0 w-100">
                 <button class="minus decrease"></button>
                 <input class="quantity" min="0" name="quantity" value="${teddy.itemsNumber}" type="number">
                 <button class="plus increase"></button>
               </div>
               <small id="passwordHelpBlock" class="form-text text-muted text-center"> (Note, 1 piece) </small>
             </div>
           </div>
           <div class="d-flex justify-content-between align-items-center">
             <div>
               <a href="#!" type="button" class="remove-teddy card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
               <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i> Move to wish list </a>
             </div>
             <p class="mb-0"><span><strong class="price">$${(teddy.price * teddy.itemsNumber).toFixed(2)}</strong></span></p>
           </div>
         </div>
       </div>
     </div>
     <hr class="mb-4">
   `
 };


 /* build teddy list : construire la liste de produits */

 const buildTeddyList = () => {
   $.each(teddysInCart, (i, el) => {
     const teddy = renderteddys(el)
     $('#teddy-list').append(teddy);
   })
 }
 
 const buildDropdownCart = () => {
   $.each(teddysInCart, (i, el) => {
     const teddy = renderDropdownteddys(el);
     $('#dropdown-cart').append(teddy)
   })
 }
 
 const bindteddyEvents = () => {
   $('button.increase').on('click', (e) => {
     increaseteddyQuantity(e.currentTarget);
   });
 
   $('button.decrease').on('click', (e) => {
     subtractteddyQuantity(e.currentTarget);
   });
 
   $('a.remove-teddy').on('click', (e) => {
     removeteddy(e.currentTarget);
   });
 }

 /* Ajouter supprimer des produits */

 const increaseTeddyQuantity = (teddy) => {
   const teddyId = $(teddy).parents('.teddy').get(0).id
   const price = $.grep(teddysInCart, el => { return el.id == teddyId })[0].price;
 
   $.each(storageData, (i, el) => {
     if (el.id == teddyId) {
       el.itemsNumber += 1
       $(teddy).siblings('.quantity').val(el.itemsNumber);
       $(`#${teddyId}`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
       $(`#${teddyId}-dropdown`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
     }
   });
 
   updateCart();
 }
 
 const subtractteddyQuantity = (teddy) => {
   const teddyId = $(teddy).parents('.teddy').get(0).id
   const price = $.grep(teddysInCart, el => { return el.id == teddyId })[0].price;
   let itemsInCart = $.grep(teddysInCart, el => { return el.id == teddyId })[0].itemsNumber;
 
   if (itemsInCart > 0 ) {
     storageData.map( el => {
       if (el.id == teddyId) {
         el.itemsNumber -= 1
         $(teddy).siblings('.quantity').val(el.itemsNumber)
         $(`#${teddyId}`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
         $(`#${teddyId}-dropdown`).find('.price').html(`$${(price * el.itemsNumber).toFixed(2)}`);
       }
     });
 
     updateCart();
   };
 }
 
 const removeteddy = (teddy) => {
   const teddyId = $(teddy).parents('.teddy').get(0).id
 
   storageData = $.grep(storageData, (el, i) => {
     return el.id != teddyId
   });
 
   updateCart();
   updateteddyList();
 }

 const updateTeddyList = () => {
   $('#teddy-list').empty();
   buildTeddyList();
   $('#dropdown-cart').empty();
   buildDropdownCart();
   bindTeddyEvents();
 }
 