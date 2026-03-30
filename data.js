const items = [
    { 
        id: 1, 
        name: "נעלי אלגנט גברים", 
        price: "₪300", 
        category: "elegant", 
        img: "images/16.jpg", 
        sizes: [],
        desc: "נעלי אלגנט לגברים מעור לשבתות וחגים." 
    },
    { 
        id: 2, 
        name: "נעלי ספורט hoka", 
        price: "₪החל מ-490", 
        category: "sport", 
        img: "images/13.jpg",
        sizes: [],
        desc: "נעלי ריצה קלות ומעוצבות." 
    },
    { 
        id: 3, 
        name: "נעלי שבת לילדות", 
        price: "₪50 בלבד", 
        category: "kids", 
        onSale: true,
        img: "images/18.jpg", 
        sizes: [22,23,24,25,26,27,28,29,30,31,32,33,34,35],
        desc: "נעליים חגיגיות ונוחות. בואו זריז לפני גמר המלאי." 
    },
    { 
        id: 4, 
        name: "סנדלי שורש ילדים", 
        price: "₪220", 
        oldPrice: "₪250",
        category: "sandals",
        onSale: true,
        img: "images/12.jpg", 
        sizes: [],
        desc: "סנדלים נוחות במיוחד עם הדגמים הכי יפים." 
    },
    // הוסף עוד מוצרים כאן לפי אותו מבנה
];

window.items = items;
