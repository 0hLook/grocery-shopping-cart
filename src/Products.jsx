import imageProduct1 from './assets/Apple.png' 
import imageProduct2 from './assets/Spinach.png' 
import imageProduct3 from './assets/Chicken.png'
import imageProduct4 from './assets/Beef.png'

export const products = [
    {
        id: 1,
        name: 'Apple',
        price: 0.39,
        image: imageProduct1,
        description: 'Discover the irresistible taste of Pink Lady Apples! It is bursting with a juicy sweetness and a delightful crunch. Perfect for making a drink, a healthy snack or your next flaming recipe idea! Take a bite into freshness today!',
        slug: 'burnice-reference-apples',
        category: "fruitsAndVegetables"
    },
    {
        id: 2,
        name: 'Spinach',
        price: 1.99,
        image: imageProduct2,
        description: 'Are you a vegan who wants to build some strong muscle? If so, you have came to the right spot! We sell protein packed, mouth watering spinach to the highest quality! We will support your journey so you can be built like Dwayne Johnson one day!',
        slug: 'buffed-spinach',
        category: "fruitsAndVegetables"
    },
    {
        id: 3,
        name: 'Chicken',
        price: 4.10,
        image: imageProduct3,
        description: 'If you are wondering why the chicken did not cross the road, it got kidnapped so it can be your next protein rich meal! (We do not endorse kidnapping and murder)',
        slug: 'juicy-breasts',
        category: "meats"
    },
    {
        id: 4,
        name: 'Beef',
        price: 10.99,
        image: imageProduct4,
        description: 'Savor the unparalleled flavor of premium beef sourced from Australia’s finest grass-fed cattle. Raised on lush and nutrient-rich pastures, these top quality Aussie cows are free to roam and graze! This ensures the most TENDER, SUCCULENT and richly marbled cuts bursting with natural (heavenly) goodness!',
        slug: 'kobe-beef',
        category: "meats"
    },
];