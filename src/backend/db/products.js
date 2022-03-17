import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "MAMG Team T-Shirt",
    author: "Merdeces",
    price: "4500",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647488054/Products%20Images/Clothes/clothes-mercedes-2022-team-shirt.jpg",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "25",
    productRating: "3.9",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "RBR Team T-Shirt",
    author: "RedBall",
    price: "2500",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647490288/Products%20Images/Clothes/clothes-RBR-team-tshirt.webp",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    productRating: "4.7",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "AT Team T-Shirt",
    author: "Beta-Ball",
    price: "2200",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647489009/Products%20Images/Clothes/clothes-AT-team-tshirt.webp",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "15",
    productRating: "3.2",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "AMR Team T-Shirt",
    author: "Anton Marten",
    price: "2700",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647489601/Products%20Images/Clothes/clothes-AMR-team-tshirt.webp",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "5",
    productRating: "4.1",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "SF Team T-Shirt",
    author: "Purrari",
    price: "3100",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647489802/Products%20Images/Clothes/clothes-ferrari-team-tshirt.jpg",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "2",
    productRating: "4.3",
    fastDelivery: false,
    inStock: true
  },

];
