// רשימת המוצרים המלאה של "נעלי שני"
const items = [
    { 
        id: 1, 
        name: "סנדלי בנים חומות", 
        price: "₪160", 
        category: "sandals", // תואם לאפשרות בתפריט
        img: "images/brown_sandals.jpg", 
        desc: "סנדלי עור איכותיים עם סגירה נוחה. מושלם ליום-יום ולשבת." 
    },
    { 
        id: 2, 
        name: "נעלי ריצה נייק", 
        price: "₪450", 
        category: "sport", 
        img: "images/nike_sport.jpg", 
        desc: "נעלי ספורט קלות משקל עם בלימת זעזועים מתקדמת." 
    },
    { 
        id: 3, 
        name: "מגפי עור שחורות", 
        price: "₪280", 
        category: "boots", 
        img: "images/black_boots.jpg", 
        desc: "מגפיים חזקות ועמידות למים, מתאימות לחורף הישראלי." 
    },
    { 
        id: 4, 
        name: "נעלי שבת לילדים", 
        price: "₪120", 
        category: "kids", 
        img: "images/kids_shabbat.jpg", 
        desc: "נעליים חגיגיות ונוחות במיוחד לילדים, עמידות לאורך זמן." 
    },
    { 
        id: 5, 
        name: "סנדלי שורש מקוריים", 
        price: "₪320", 
        category: "sandals", 
        img: "images/shoresh_classic.jpg", 
        desc: "הסנדלים המוכרים והאהובים, מתאימים לטיולים ולמים." 
    },
    { 
        id: 6, 
        name: "נעלי הרים מקצועיות", 
        price: "₪580", 
        category: "hiking", 
        img: "images/hiking_pro.jpg", 
        desc: "אחיזת שטח מעולה והגנה מלאה על הקרסול לטיולים אתגריים." 
    }
];

// הפיכת הנתונים לזמינים לכל הקבצים באתר
window.items = items;
