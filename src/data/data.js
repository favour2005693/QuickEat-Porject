

import FoodData1 from "../assets/DataFile/FoodData1.jpg"
import FoodData2 from "../assets/DataFile/FoodData2.jpg"
import FoodData3 from "../assets/DataFile/FoodData3.jpg"
import FoodData4 from "../assets/DataFile/FoodData4.jpg"
import FoodData5 from "../assets/DataFile/FoodData5.jpg"
import FoodData6 from "../assets/DataFile/FoodData6.jpg"
import FoodData7 from "../assets/DataFile/FoodData7.jpg"
import FoodData8 from "../assets/DataFile/FoodData8.jpg"
// import FoodData9 from "../assets/DataFile/FoodData9.jpg"
// import FoodData10 from "../assets/DataFile/FoodData10.jpg"
import FoodData11 from "../assets/DataFile/FoodData11.jpg"

import FoodData20 from "../assets/DataFile/FoodData20.jpg"

// Rating Images Import 
import rating0 from '../assets/ratings/rating-0.png'
import rating5 from '../assets/ratings/rating-5.png'
import rating10 from '../assets/ratings/rating-10.png'
import rating15 from '../assets/ratings/rating-15.png'
import rating20 from '../assets/ratings/rating-20.png'
import rating25 from '../assets/ratings/rating-25.png'
import rating30 from '../assets/ratings/rating-30.png'
import rating35 from '../assets/ratings/rating-35.png'
// import rating40 from '../assets/ratings/rating-40.png'
// import rating45 from '../assets/ratings/rating-45.png'
// import rating50 from '../assets/ratings/rating-50.png'

const categories = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Burger" },
  { id: 3, name: "Drinks" },
  { id: 4, name: "Desserts" },
];

const productsData = [
  {
    id: 101,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 4500,
    quantity: 1,
    totalPrice: 4500,
    discount: 10,
    rating: 4.5,
    ratingImage: rating0,
    restaurant: "Italiano Kitchen",
    deliveryTime: "25-35 mins",
    image: FoodData1,
    description: "Classic pepperoni pizza with mozzarella cheese",
    isPopular: true,
    reviews: [
      {
        user: "David",
        comment: "Very tasty and fresh!",
        rating: 5,
      },
      {
        user: "Ada",
        comment: "Loved the cheese but a bit oily",
        rating: 4,
      },
    ],
  },

  {
    id: 102,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 5000,
    quantity: 1,
    totalPrice: 5000,
    discount: 5,
    rating: 4.7,
    ratingImage: rating5,
    restaurant: "Grill House",
    deliveryTime: "30-40 mins",
    image: FoodData2,
    description: "Grilled chicken with BBQ sauce and onions",
    isPopular: false,
    reviews: [
      {
        user: "John",
        comment: "Perfect BBQ flavor 🔥",
        rating: 5,
      },
    ],
  },

  {
    id: 201,
    name: "Cheese Burger",
    category: "Burger",
    price: 3000,
    quantity: 1,
    totalPrice: 3000,
    discount: 0,
    ratingImage: rating10,
    rating: 4.3,
    restaurant: "Burger Hub",
    deliveryTime: "15-25 mins",
    image:  FoodData3,
    description: "Juicy beef burger with cheese and lettuce",
    isPopular: true,
    reviews: [
      {
        user: "Mike",
        comment: "Soft bun and juicy meat",
        rating: 4,
      },
    ],
  },

  {
    id: 202,
    name: "Double Beef Burger",
    category: "Burger",
    price: 4000,
    quantity: 1,
    totalPrice: 4000,
    discount: 15,
    rating: 4.6,
    ratingImage: rating15,
    restaurant: "Burger Hub",
    deliveryTime: "20-30 mins",
    image: FoodData4,
    description: "Double layered beef burger with special sauce",
    isPopular: true,
    reviews: [
      {
        user: "Faith",
        comment: "Worth every naira!",
        rating: 5,
      },
    ],
  },

  {
    id: 301,
    name: "Coca Cola",
    category: "Drinks",
    price: 800,
    quantity: 1,
    totalPrice: 800,
    discount: 0,
    rating: 4.2,
    ratingImage: rating20,
    restaurant: "Cool Drinks Spot",
    deliveryTime: "10-15 mins",
    image:  FoodData20,
    description: "Chilled soft drink",
    isPopular: false,
    reviews: [
      {
        user: "Emma",
        comment: "Cold and refreshing",
        rating: 4,
      },
    ],
  },

  {
    id: 302,
    name: "Orange Juice",
    category: "Drinks",
    price: 1200,
    quantity: 1,
    totalPrice: 1200,
    discount: 5,
    rating: 4.4,
    ratingImage: rating25,
    restaurant: "Fresh Juice Bar",
    deliveryTime: "10-20 mins",
    image: FoodData6,
    description: "Freshly squeezed orange juice",
    isPopular: true,
    reviews: [
      {
        user: "Sarah",
        comment: "Natural taste, no sugar added!",
        rating: 5,
      },
    ],
  },

  {
    id: 401,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 2500,
    quantity: 1,
    totalPrice: 2500,
    discount: 10,
    rating: 4.8,
    ratingImage: rating30,
    restaurant: "Sweet Tooth",
    deliveryTime: "20-30 mins",
    image:  FoodData7,
    description: "Rich chocolate layered cake",
    isPopular: true,
    reviews: [
      {
        user: "Grace",
        comment: "Best cake I’ve had!",
        rating: 5,
      },
    ],
  },

  {
    id: 402,
    name: "Ice Cream",
    category: "Desserts",
    price: 1500,
    quantity: 1,
    totalPrice: 1500,
    discount: 0,
    rating: 4.5,
    ratingImage: rating35,  
    restaurant: "Cold Treats",
    deliveryTime: "15-20 mins",
    image:  FoodData11,
    description: "Vanilla ice cream scoop",
    isPopular: false,
    reviews: [
      {
        user: "Daniel",
        comment: "Smooth and creamy",
        rating: 4,
      },
    ],
  },
];


export default productsData
