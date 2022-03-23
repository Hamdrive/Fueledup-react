import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "MAMG Team T-Shirt",
    team: "Merdeces",
    price: "4500",
    categoryName: "Clothes",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539121/Products%20Images/Clothes/clothes-MAMG.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "25",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "RBR Team T-Shirt",
    team: "Red-Ball",
    price: "2500",
    categoryName: "Clothes",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539145/Products%20Images/Clothes/clothes-RBR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AT Team T-Shirt",
    team: "Alpha-Ball",
    price: "2200",
    categoryName: "Clothes",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539225/Products%20Images/Clothes/clothes-AT.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "15",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AMR Team T-Shirt",
    team: "Anton Marten",
    price: "2700",
    categoryName: "Clothes",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539203/Products%20Images/Clothes/clothes-AMR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "5",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "SF Team T-Shirt",
    team: "Purrari",
    price: "3100",
    categoryName: "Clothes",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539178/Products%20Images/Clothes/clothes-SF.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "2",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "WR Team Mask",
    team: "Welleams",
    price: "1199",
    categoryName: "Masks",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538501/Products%20Images/Masks/masks-FWR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "20",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AMR Team Mask",
    team: "Anton Marten",
    price: "1299",
    categoryName: "Masks",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538469/Products%20Images/Masks/masks-AMR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MAMG Team Mask",
    team: "Merdeces",
    price: "999",
    categoryName: "Masks",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538429/Products%20Images/Masks/masks-MAMG.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "40",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "RBR Team Mask",
    team: "Red-Ball",
    price: "1099",
    categoryName: "Masks",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538188/Products%20Images/Masks/masks-RBR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MCL Team Mask",
    team: "BcLaren",
    price: "1350",
    categoryName: "Masks",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538401/Products%20Images/Masks/masks-MCL.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "30",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MCL Backpack",
    team: "BcLaren",
    price: "4550",
    categoryName: "Bags",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538910/Products%20Images/Bags/bags-MCL.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "SF Backpack",
    team: "Purrari",
    price: "5450",
    categoryName: "Bags",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538735/Products%20Images/Bags/bags-SF.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "5",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AMR Trolley Bag",
    team: "Anton Marten",
    price: "6899",
    categoryName: "Bags",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538758/Products%20Images/Bags/bag-AMR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "20",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "BWTA Backpack",
    team: "Alpeene",
    price: "3750",
    categoryName: "Bags",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538631/Products%20Images/Bags/bags-BWTA.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "25",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AT Backpack",
    team: "Alpha-Ball",
    price: "6025",
    categoryName: "Bags",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647538886/Products%20Images/Bags/bags-AT.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "15",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "SF Model Car",
    team: "Purrari",
    price: "7590",
    categoryName: "Models",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647537785/Products%20Images/Models/model-SF.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "12",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MAMG Model Car",
    team: "Merdeces",
    price: "9550",
    categoryName: "Models",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647537859/Products%20Images/Models/models-MAMG.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "25",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "BWTA Model Car",
    team: "Alpeene",
    price: "7325",
    categoryName: "Models",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647536336/Products%20Images/Models/models-BWTA.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "33",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MCL Model Car",
    team: "BcLaren",
    price: "8740",
    categoryName: "Models",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647536249/Products%20Images/Models/models-MCL.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "10",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "RBR Model Car",
    team: "Red-Ball",
    price: "7980",
    categoryName: "Models",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647537947/Products%20Images/Models/models-RBR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "12",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "RBR Headwear",
    team: "Red-Ball",
    price: "3290",
    categoryName: "Headwear",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539750/Products%20Images/Headwear/headwear-RBR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "5",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MCL Headwear",
    team: "BcLaren",
    price: "2995",
    categoryName: "Headwear",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539638/Products%20Images/Headwear/headwear-MCL.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "12",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "SF Headwear",
    team: "Purrari",
    price: "3755",
    categoryName: "Headwear",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539722/Products%20Images/Headwear/headwear-SF.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "8",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "AMR Headwear",
    team: "Anton Marten",
    price: "2650",
    categoryName: "Headwear",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539693/Products%20Images/Headwear/headwear-AMR.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "17",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "MAMG Headwear",
    team: "Merdeces",
    price: "3830",
    categoryName: "Headwear",
    productImage:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647539670/Products%20Images/Headwear/headwear-MAMG.webp",
    productDescription:
      "This comfortable Replica Team McLaren hoodie is a perfect outer layer for any McLaren fan. This lightweight and breathable hoodie is engineered to perform at the highest level.",
    productDiscount: "20",
    get productDiscountPrice() {
      return Math.ceil(
        Number(this.price) * (1 - Number(this.productDiscount / 100))
      ).toString();
    },
    productRating: (Math.random() * 4 + 1).toFixed(1),
    fastDelivery: false,
    inCart: false,
    inWishlist: false,
    inStock: true,
  },
];
