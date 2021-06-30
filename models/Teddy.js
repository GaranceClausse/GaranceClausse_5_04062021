const teddies = [
  {
    "colors": ["Tan", "Chocolate", "Black", "White"],
    "_id": "5be9c8541c9d440000665243",
    "name": "Norbert",
    "price": 2900,
    "imageUrl": "teddy_Norbert.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "alt": "photo d'un ours en peluche fait main : Norbert",
  },
  {
    "colors": [
      "Pale brown",
      "Dark brown",
      "White"
    ],
    "_id": "5beaa8bf1c9d440000a57d94",
    "name": "Arnold",
    "price": 3900,
    "imageUrl": "teddy_Arnold.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "alt": "photo d'un ours en peluche fait main : Arnold",
  },
  {
    "colors": [
      "Brown"
    ],
    "_id": "5beaaa8f1c9d440000a57d95",
    "name": "Lenny et Carl",
    "price": 5900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "teddy_Lenny-and-Carl.jpg",
    "alt": "photo de deux ours en peluche faits main : Lenny et Carl",
  },
  {
    "colors": [
      "Brown",
      "Blue",
      "Pink"
    ],
    "_id": "5beaabe91c9d440000a57d96",
    "name": "Gustav",
    "price": 4500,
    "imageUrl": "teddy_Gustav.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "alt": "photo d'un ours en peluche fait main : Gustav",
  },
  {
    "colors": [
      "Beige",
      "Tan",
      "Chocolate"
    ],
    "_id": "5beaacd41c9d440000a57d97",
    "name": "Garfunkel",
    "price": 5500,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "teddy_Garfunkel.jpg",
    "alt": "photo d'un ours en peluche fait main : Garfunkel",
  }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(teddies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(teddies)).find(teddy =>
      teddy._id == id)
    )
  );
}