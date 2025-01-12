import imageProduct1 from './assets/Apple.png' 
import imageProduct2 from './assets/Spinach.png' 
import imageProduct3 from './assets/Chicken.png'
import imageProduct4 from './assets/Beef.png'
import imageProduct5 from './assets/Pineapple.png'
import imageProduct6 from './assets/Carrot.png'
import imageProduct7 from './assets/Lamb.png'

export const products = [
    {
        id: 1,
        name: 'Apple',
        price: 0.39,
        image: imageProduct1,
        description: 'An apple a day keeps the doctor away and keeps your wallet healthy (regardless this isn\'t America). Anyways, these mouth-watering apples are perfect for making a drink, a healthy snack or your next flaming recipe idea!',
        slug: 'burnice-reference-apples',
        category: "fruitsAndVegetables"
    },
    {
        id: 2,
        name: 'Pineapple',
        price: 1.50,
        image: imageProduct5,
        description: 'You want a tropical getaway but you are broke? Fear not! Our juicy pineapples will bring your Hawaii fantasies into real life in the form of a drink or snack!',
        slug: 'hawaii-pineapple',
        category: "fruitsAndVegetables"
    },
    {
        id: 3,
        name: 'Spinach',
        price: 1.99,
        image: imageProduct2,
        description: 'Are you a vegan who wants to build some strong muscle? If so, you have came to the right spot! We sell protein packed, mouth watering spinach to the highest quality! We will support your journey so you can be built like Dwayne Johnson one day!',
        slug: 'buffed-spinach',
        category: "fruitsAndVegetables"
    },
    {
        id: 4,
        name: 'Carrots',
        price: 0.79,
        image: imageProduct6,
        description: 'We harvested the noses of snowmans after their short lifespan during Christmas. Come get them while they are still fresh! Amazing for boosting eye health!',
        slug: 'snowman-noses',
        category: "fruitsAndVegetables"
    },
    {
        id: 5,
        name: 'Chicken',
        price: 2.99,
        image: imageProduct3,
        description: 'If you are wondering why the chicken did not cross the road, it got kidnapped so it can be your next protein rich meal! (We do not endorse kidnapping and murder)',
        slug: 'juicy-breasts',
        category: "meats"
    },
    {
        id: 6,
        name: 'Beef',
        price: 4.99,
        image: imageProduct4,
        description: 'GenZ often refer to beef as arguments. We can ensure you there will be no beef between us because you will be completly satisfied with this stunning cheap price and amazing taste of Chloe!',
        slug: 'kobe-beef',
        category: "meats"
    },
    {
        id: 7,
        name: 'Lamb',
        price: 6.99,
        image: imageProduct7,
        description: 'Bitzer and the sheeps agreed to sacrifice Shirley for the greater good. They will now live happily ever after and you will too as you enjoy these succulent lamb chops!',
        slug: 'Shirley-lamb',
        category: "meats"
    },
    
];