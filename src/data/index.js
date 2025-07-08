import onionRings from "../assets/onionRings.png";
import toastTomato from "../assets/toastTomato.png";
import hamEgg from "../assets/hamEgg.png";
import chickenWrap from "../assets/chickenWrap.png";
import tunaSalad from "../assets/tunaSalad.png";
import pancake from "../assets/pancake.png";
// Explore Recipes
import Green_Godies from "../assets/Green_Godies.jpg";
import Salad from "../assets/Salad.jpg";
import Pizza from "../assets/Pizza.jpg";
import Bowl_Smothie from "../assets/Bowl_Smothie.jpg";
import smothie from "../assets/smothie.jpg";
import Snapper from "../assets/Snapper.jpg";
//Blogs
import clock from "../assets/clock.jpg";
import suger from "../assets/suger.jpg";
//NExt Page Recipes

export const recipes = [
  { id: 1, title: "Onion Rings", img: onionRings, rating: 4, calories: 322 },
  { id: 2, title: "Toast with Tomato, Onion, & Hummus", img: toastTomato, rating: 4, calories: 199 },
  { id: 3, title: "Ham, Egg, and Spinach Roll-Ups", img: hamEgg, rating: 4, calories: 174 },
  { id: 4, title: "Chicken Ranch Wrap", img: chickenWrap, rating: 4, calories: 188 },
  { id: 5, title: "Tuna Mex Tuna Salad", img: tunaSalad, rating: 4, calories: 298 },
  { id: 6, title: "Strawberry and Cherry pancake", img: pancake, rating: 4, calories: 251 },
];

// ExploreRecipe Data
export const Exploreecipes = [
  { id: 1, title: "Green Goodies: Veggie-Packed Power Bowl", img: Green_Godies, rating: 4, calories: 322 },
  { id: 2, title: "Garden Fresh Salad with Herbs & Lemon Dressing", img: Salad, rating: 4, calories: 199 },
  { id: 3, title: "Classic Cheesy Pepperoni Pizza Slice", img: Pizza, rating: 4, calories: 174 },
  { id: 4, title: "Tropical Smoothie Bowl with Fruits & Chia", img: Bowl_Smothie, rating: 4, calories: 188 },
  { id: 5, title: "Berry Blast Smoothie with Yogurt & Oats", img: smothie, rating: 4, calories: 298 },
  { id: 6, title: "Grilled Snapper with Garlic Lemon Butter", img: Snapper, rating: 4, calories: 251 },
];

// Recipe category data
export const Popularcategories = [
    {
      id: 1,
      name: "Breakfast recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c30c2191-f4c3-40b5-bfbb-7824a0657e1a.png",
      alt: "Breakfast plate with eggs and toast",
    },
    {
      id: 2,
      name: "Lunch recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27ec318c-607a-4cdf-8fb1-0d19a57d29eb.png",
      alt: "Pasta lunch",
    },
    {
      id: 3,
      name: "Dinner recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63c4a45f-716c-4518-bdd6-d63c2aae04db.png",
      alt: "Seafood pasta dinner",
    },
    {
      id: 4,
      name: "Appetizer recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73e601fc-f953-4e17-b32f-4ef554b366f3.png",
      alt: "Bruschetta appetizer",
    },
    {
      id: 5,
      name: "Salad recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20819b53-5d83-4d78-89b3-8cf531c9ffe6.png",
      alt: "Garden salad",
    },
    {
      id: 6,
      name: "Pizza recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69e41ede-fb6b-4c8e-aea3-3bb931ec6025.png",
      alt: "Pepperoni pizza",
    },
    {
      id: 7,
      name: "Smoothie recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f912da0-86ce-4e0e-802e-cc95ba21dae0.png",
      alt: "Green smoothie",
    },
    {
      id: 8,
      name: "Pasta recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2d06cc7-ece5-4d47-ad0d-65eaef9f8aef.png",
      alt: "Spaghetti pasta",
    },
  ];

 export const Blogs= [
    {
      id: 1,
      title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management',
      description:
        'Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health.',
      image: clock,
    },
    {
      id: 2,
      title: 'The Impact of Sugar Consumption on Your Health',
      description:
        'Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers.',
      image: suger,
    },
  ];

 export const RecipesPage = {
    title: "Mixed Greens with Sun-Dried Tomato Dressing",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6faaf6ba-745f-4087-a982-e594d19cf089.png",
    description: "This recipe takes a classic and refreshing green salad and combines it with a flavorful sun-dried tomato dressing for a vibrant, healthy meal.",
    ingredients: [
      "Few mixed greens (spinach, kale, romaine)",
      "1 tbsp flax seeds",
      "1 tbsp sunflower seeds",
      "1 tbsp pumpkin seeds",
      "1/4 cup sliced sun-dried tomatoes",
      "1/4 cup chopped walnuts",
      "1/4 cup thinly sliced red onion",
      "Salt & pepper to taste",
    ],
    instructions: [
      "Chop the mixed greens finely, and remove any tough stems.",
      "Slice the red onion, walnuts, and seeds and toss them with the mixed greens.",
      "Add the sun-dried tomatoes and walnuts, toss again to combine with the salad.",
      "Add salt and pepper to taste and serve chilled.",
    ],
  };
  
 export const RecipesImage = [
    {
      title: "Quinoa Salad with Lemon Dressing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91ac8a78-c6e4-4610-acf3-83a98d52808d.png",
    },
    {
      title: "Roasted Veggie Buddha Bowl",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88f842ee-bcd6-4ca4-a05c-d7c5129d47e3.png",
    },
    {
      title: "Avocado and Black Bean Tacos",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2ba7f9f-b390-4e1b-a48f-6929a66833f9.png",
    },
  ];
  
 export const TrendingTags = ["Vegan", "Salads", "Gluten Free", "Healthy", "Quick Meals", "Dairy Free"];
  