const items = [
    { 
        id: 1, 
        name: "נעלי אלגנט גברים מעור", 
        price: "₪300", 
        oldPrice: "₪400", 
        onSale: true, 
        category: ["elegant", "adults"], 
        img: "images/16.jpg", 
        sizes: [40, 41, 42, 43, 44, 45, 46], 
        desc: "נעלי אלגנט גברים מעור איכותי, מושלמות לשבתות, חגים ואירועים." 
    },
    { 
        id: 2, 
        name: "סנדלי שורש ילדים", 
        price: "₪220", 
        oldPrice: "₪250", 
        onSale: true, 
        category: ["sandals", "kids"], 
        img: "images/12.jpg", 
        sizes: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 
        desc: "סנדלים נוחות במיוחד בדגמים הכי יפים, עמידות לטיולים ולמים." 
    },
    { 
        id: 3, 
        name: "סנדלי שורש מבוגרים", 
        price: "₪320", 
        oldPrice: "₪350", 
        onSale: true, 
        category: ["sandals", "adults"], 
        img: "images/11.jpg", 
        sizes: [36,37,38,39,40,41,42,43,44,45,46,47,48], 
        desc: "סנדלי שורש קלאסיות למבוגרים, נוחות מקסימלית ועמידות לאורך שנים." 
    },
    { 
        id: 4, 
        name: "מגפי דמוי בלנדסטון - תינוקות", 
        price: "₪190", 
        oldPrice: "₪240", 
        onSale: true, 
        category: ["boots", "kids"], 
        img: "images/17.jpg", 
        sizes: [23, 24, 25, 26, 27], 
        desc: "מגפיים דמוי בלנסטון מעור חברת פאפאיה ופאמה, איכותיות ועמידות." 
    },
    { 
        id: 5, 
        name: "מגפי דמוי בלנדסטון - ילדים ", 
        price: "₪220", 
        oldPrice: "₪260", 
        onSale: true, 
        category: ["boots", "kids"], 
        img: "images/17.jpg", 
        sizes: [28, 29, 30, 31, 32, 33, 34, 35], 
        desc: "מגפיים דמוי בלנסטון מעור חברות פאפאיה ופאמה, איכותיות ועמידות ." 
    },
    { 
        id: 6, 
        name: "נעלי שבת לבנות", 
        price: "₪50", 
        oldPrice: "", 
        onSale: true, 
        category: ["elegant", "kids"], 
        img: "images/18.jpg", 
        sizes: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 
        desc: "נעלי שבת חגיגיות לבנות במחיר חיסול - עד גמר המלאי!" 
    },
    { 
        id: 7, 
        name: "נעלי ספורט HOKA", 
        price: "₪490החל מ-", 
        oldPrice: "", 
        onSale: false, 
        category: ["sport", "adults"], 
        img: "images/13.jpg", 
        sizes: [36,37,38,39,40,41,42,43,44,45,46,47], 
        desc: "נעלי ספורט HOKA נשים וגברים, נוחות ללא פשרות לריצה והליכה." 
    },
    { 
        id: 8, 
        name: "נעלי הרים מקצועיות", 
        price: "₪380החל מ-", 
        oldPrice: "", 
        onSale: false, 
        category: ["hiking", "adults"], 
        img: "images/1.jpg", 
        sizes: [], 
        desc: "נעלי הרים עמידות ומקצועיות לטיולים בכל תנאי שטח." 
    },
    { 
        id: 9, 
        name: "סנדלי בנים מעור", 
        price: "₪160", 
        oldPrice: "", 
        onSale: false, 
        category: ["sandals", "kids"], 
        img: "images/10.jpg", 
        sizes: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 
        desc: "סנדלי עור איכותיות לבנים, חזקות ונוחות." 
    },
    { 
        id: 10, 
        name: "דמוי נאות", 
        price: "₪70", 
        oldPrice: "", 
        onSale: false, 
        category: ["sandals", "adults"], 
        img: "images/3.jpg", 
        sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], 
        desc: "כפכפים נוחים בסגנון דמוי נאות (לא מעור)." 
    },
    { 
        id: 11, 
        name: "כפכפים לבנות", 
        price: "₪35", 
        oldPrice: "", 
        onSale: false, 
        category: ["slippers","flipflops"], 
        img: "images/8.jpg", 
        sizes: [28, 29, 30, 31, 32, 33, 34, 35], 
        desc: "כפכפים נוחים לבריכה, לים או לבית." 
    },
    { 
        id: 12, 
        name: "נעלי ספורט Reelife", 
        price: "₪280", 
        oldPrice: "", 
        onSale: false, 
        category: ["sport", "adults"], 
        img: "images/9.jpg", 
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
        desc: "נעלי ספורט של Reelife ברמה בינלאומית במחיר מצוין." 
    },
    { 
        id: 13, 
        name: "כפכפי", 
        price: "₪35", 
        oldPrice: "", 
        onSale: false, 
        category: ["flipflops"], 
        img: "images/7.jpg", 
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
        desc: "כפכים לבית לחופשה בנוחות מקסימלית" 
    },
    { 
        id: 14, 
        name: "מגפי דמוי בלנדסטון - נוער", 
        price: "₪240", 
        oldPrice: "₪280", 
        onSale: true, 
        category: ["boots", "kids"], 
        img: "images/17.jpg", 
        sizes: [36,37,38,39,40], 
        desc: "מגפיים דמוי בלנסטון מעור חברות פאפאיה ופאמה, איכותיות ועמידות ." 
    }
];

window.items = items;
