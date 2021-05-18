const popularData = [
  {
    id: "1",
    image: require("../images/pizza2.png"),
    title: "Ghanaman Pizza",
    weight: "540 gr",
    rating: "5.0",
    price: 30.99,
    sizeName: "Medium",
    sizeNumber: 14,
    crust: "Thin Crust",
    deliveryTime: 30,
    ingredients: [
      {
        id: "1",
        name: "ham",
        image: require("../images/ham.png"),
      },
      {
        id: "2",
        name: "tomato",
        image: require("../images/tomato.png"),
      },
      {
        id: "3",
        name: "cheese",
        image: require("../images/cheese.png"),
      },
      {
        id: "4",
        name: "garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },

  {
    id: "2",
    image: require("../images/pizza1.png"),
    title: "Meatlovers' Pizza",
    weight: "450 gr",
    rating: "5.0",
    price: 45.99,
    sizeName: "Small",
    sizeNumber: 10,
    crust: "Thick Crust",
    deliveryTime: 40,
    ingredients: [
      {
        id: "1",
        name: "cheese",
        image: require("../images/cheese.png"),
      },
      {
        id: "2",
        name: "garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },

  {
    id: "3",
    image: require("../images/pizza3.png"),
    title: "BBQ Vegan Pizza",
    weight: "700 gr",
    rating: "5.0",
    price: 39.99,
    sizeName: "Large",
    sizeNumber: 18,
    crust: "Thin Crust",
    deliveryTime: 20,
    ingredients: [
      {
        id: "1",
        name: "tomato",
        image: require("../images/tomato.png"),
      },
      {
        id: "2",
        name: "cheese",
        image: require("../images/cheese.png"),
      },
    ],
  },
];

export default popularData;
