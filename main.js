class TeddyBear {


    constructor(name, price, order) {
 
 
       this.name = name; 
 
       this.price = price;

       this.order = order
 
 
    }
 
 
 }

 let teddyFred = new teddyBear (Fred, 830, 123456789);
 let teddyCharlie = new teddyBear (Charlie, 1020, 234567890);
 let teddyMarc = new teddyBear (Marc, 760, 345678901);
 let teddyJean = new teddyBear (Jean, 960, 456789012);
 let teddyMartin = new teddyBear (Martin, 2030, 567890123);

 teddyBought => {
     console.log ("Merci d'avoir acheté l'ours le plus mignon :" + this.name + " à " + this.price + " ; numéro de commande " + this.order);
 };

teddyFred.teddyBought();

const teddys = [

    {
        name: "Fred",

        price: 830,

        order: 123456789,
    },

    {
        name: "Charlie",

        price: 1020,

        order: 234567890,
    },

    
    {
        name: "Marc",

        price: 760,

        order: 345678901,
    },

    
    {
        name: "Jean",

        price: 960,

        order: 456789012,
    },

    
    {
        name: "Martin",

        price: 2030,

        order: 567890123,
    }
]


for (let teddy of teddys) {

 

    console.log('Achat de votre ours ' + teddy.name + ' ; numéro de commande ' + teddy.order);
 
  
 
 }