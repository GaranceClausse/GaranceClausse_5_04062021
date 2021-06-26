

 for ( let teddy of teddies) {

 
   /* Create image */
    var img = document.createElement ("img");
   /* Set image class +alt */
    img.className = "card-img-top";
    img.src = teddy.imageUrl;
    img.alt= teddy.alt;
    /* Add image*/
    $("div.card-body").prepend(img);
    
   /* Add teddy name*/
    $("h5.fw-bolder").html("L'ours " + teddy.name);
    

   /* Add teddy name + price */
    $("h1.teddy_name").html("Acheter notre ours : " + teddy.name);
    $("span.teddy_price").append(teddy.price/100 + "€");
 
 }


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
 