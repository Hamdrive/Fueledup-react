import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Clothes",
    categoryImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356404/Category%20Cover%20Images/category-clothes.png" ,
    description:
      "Represent your team pride and support in their colors.",
  },
  {
    _id: uuid(),
    categoryName: "Headwear",
    categoryImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356398/Category%20Cover%20Images/category-headwear.png",
    description:
      "Beat the heat while at the grandstand, overlooking the start/finish straight, cheering your team.",
  },
  {
    _id: uuid(),
    categoryName: "Bags",
    categoryImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356392/Category%20Cover%20Images/category-bags.png" ,
    description:
      "Move around in style, strike up a conversation whever you go.",
  },
  {
    _id: uuid(),
    categoryName: "Masks",
    categoryImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356391/Category%20Cover%20Images/category-masks.png" ,
    description:
      "Stay safe and protected while also supporting your team.",
  },
  {
    _id: uuid(),
    categoryName: "Models",
    categoryImage: "https://res.cloudinary.com/fueledup-ecom/image/upload/v1647356391/Category%20Cover%20Images/category-models.png",
    description:
      "Bring the race right to your home, perfect for children and collectors.",
  },
];
