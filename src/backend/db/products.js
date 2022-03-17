import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "DR3 Hoodie",
    author: "Bclaren",
    price: "2500",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356404/Category%20Cover%20Images/category-clothes.png",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    productRating: "3.6",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "DR3 Hoodie",
    author: "Bclaren",
    price: "2500",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356404/Category%20Cover%20Images/category-clothes.png",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    productRating: "3.6",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "DR3 Hoodie",
    author: "Bclaren",
    price: "2500",
    categoryName: "Clothes",
    productImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356404/Category%20Cover%20Images/category-clothes.png",
    productDescription: "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    productRating: "3.6",
    fastDelivery: false,
    inStock: false
  },

];
