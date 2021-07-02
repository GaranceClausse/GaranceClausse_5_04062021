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
        img.className = "card-img-top img-fluid cover h-100 w-auto";
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
        $(".reviews" + i).append(stars);

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
        card_link.href= "page-item.html";
        card_link.innerHTML= "Voir plus";
        $(".card-footer" + i).append(card_link);

        
      i++;

      }



/* Mise en page de page-item */


let other_container1 = document.createElement("div");
other_container1.className= "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4";
other_container1.id = "other-container";
$("#other_item_container").append(other_container1);

for ( let i=1; i < teddies.length; i++) for (teddy of teddies) {


  let other_container2 = document.createElement("div");
  other_container2.className= "col-10 col-sm-8 col-md-3 col-lg-2 col-xl-2 mb-5";
  other_container2.id = "container2" + i;
  $("#other-container").append(other_container2);


  /* Create div */
  let other_card = document.createElement("div");
  other_card.className = "card d-flex h-100 justify-content-stretch shadow";
  other_card.id = "other-card" + i;
  $("#container2" + i).append(other_card);

  /*create img container*/
  let other_img_cont = document.createElement("div");
    other_img_cont.className = "w-100 d-flex justify-content-center other_img_cont" + i;
    $("#other-card" + i).append(other_img_cont);

  /* Create image */
  let img = document.createElement ("img");
  /* Set image class +alt */
    img.className = "card-img-top img-fluid cover h-100 w-auto";
    img.src = "images/" + teddy.imageUrl;
    img.alt= teddy.alt;
    /* Add image*/  
    $(".other_img_cont" + i).prepend(img);

    
    i++;

}



/*<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
<div class="col-10 col-sm-8 col-md-3 col-lg-2 col-xl-2 mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="images/teddy_Norbert.webp"
            alt="photo d'un ours en peluche fait main : Norbert" />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">Norbert</h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </div>
                <!-- Product price-->
                <span class="teddy_price"></span>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto stretched-link" href="#">Voir plus</a>
            </div>
        </div>
    </div>
</div>*/






































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
 