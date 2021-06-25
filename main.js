

 for (let teddy of teddies) {

 

    var img = document.createElement ("img");

    img.className = "card-img-top";
    img.src = teddy.imageUrl;
    img.alt= teddy.alt;
    
    $("div.card").prepend(img);
    
   
    $("h5.fw-bolder").html("L'ours " + teddy.name);
    

 
    $("h1.teddy_name").html("Acheter notre ours : " + teddy.name);
    $("span.teddy_price").append(teddy.price/100 + "€");
 
 }

 