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
        name: "נעלי שבת בנות כסופות", 
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
        price: "₪490 החל מ-", 
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
        price: "₪380 החל מ-", 
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
        name: "כפכפי אצבע", 
        price: "₪35", 
        oldPrice: "", 
        onSale: false, 
        category: ["flipflops"], 
        img: "images/19.jpg", 
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
        desc: "כפכפים לבית ולחופשה בנוחות מקסימלית." 
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
    },
    { 
        id: 15, 
        name: "נעלי שבת בנות לבנות", 
        price: "₪50", 
        oldPrice: "", 
        onSale: true, 
        category: ["elegant", "kids"], 
        img: "images/20.jpg", 
        sizes: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 
        desc: "נעלי שבת חגיגיות לבנות במחיר חיסול - עד גמר המלאי!" 
    }
// --- נתונים וניהול גלובלי ---
window.items = items;

// --- לוגיקת שעות פעילות וחגים ---

function isSummerTime() {
    const now = new Date();
    const year = now.getFullYear();
    const startSummer = new Date(year, 2, 31);
    startSummer.setDate(31 - (startSummer.getDay() + 2) % 7);
    const endSummer = new Date(year, 9, 31);
    endSummer.setDate(31 - endSummer.getDay());
    return now >= startSummer && now < endSummer;
}

function updateOpeningHours() {
    const now = new Date();
    const day = now.getDay(); // 0=ראשון, 5=שישי, 6=שבת
    const dateStr = `${now.getMonth() + 1}-${now.getDate()}`; // פורמט חודש-יום
    
    // רשימת ערבי חג (ניתן להוסיף תאריכים לפי הצורך)
const holidayEves = [
    '4-1',  // ערב פסח (י"ד בניסן) - הוספתי כי זה חסר לך!
    '4-7',  // ערב שביעי של פסח
    '5-21', // ערב שבועות
    '9-11', // ערב ראש השנה (א' בתשרי תשפ"ז)
    '9-20', // ערב יום כיפור
    '9-25', // ערב סוכות
    '10-2'  // ערב שמחת תורה / שמיני עצרת
];
    
    const fridayClosing = isSummerTime() ? "14:00" : "13:00";
    const holidayClosing = "13:30";

    // עדכון הטקסט בתפריט הצדי
    const friDesc = document.getElementById('friHours'); // שים לב שזה תואם ל-ID ב-HTML
    if (friDesc) friDesc.innerText = `09:30 - ${fridayClosing}`;
    
    const statusBox = document.getElementById('todayStatus');
    if (statusBox) {
        if (holidayEves.includes(dateStr)) {
            statusBox.innerHTML = `<span style="color: #ffcc00; font-weight:800;">ערב חג:</span> פתוחים 09:30 - ${holidayClosing}`;
        } else if (day === 5) {
            statusBox.innerHTML = `פתוחים היום (ו'): 09:30 - ${fridayClosing}`;
        } else if (day === 6) {
            statusBox.innerHTML = 'היום (מוצ"ש): סגור. נתראה בראשון!';
        } else {
            statusBox.innerHTML = 'פתוחים היום: 09:30 - 20:00';
        }
    }
}

// --- ניהול ממשק וניווט ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}

function openNavMenu() {
    const navModal = document.getElementById('navModal');
    if (navModal) navModal.style.display = 'flex';
}

function closeNavMenu() {
    const navModal = document.getElementById('navModal');
    if (navModal) navModal.style.display = 'none';
}

function showAccessibilityStatement() {
    const accMenu = document.getElementById('accMenu');
    if (accMenu) accMenu.style.display = 'none'; 
    const statement = document.getElementById('statementModal');
    if (statement) statement.style.display = 'flex'; // שינוי ל-flex להתמרכזות
}

// --- לוגיקת רינדור וסינון מוצרים ---

function renderProducts(list) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    if (!list || list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 60px; opacity:0.6;">
                <i class="fa-solid fa-magnifying-glass-minus" style="font-size:3rem; margin-bottom:15px;"></i>
                <p>לא נמצאו דגמים תואמים לחיפוש שלך...</p>
            </div>`;
        return;
    }

    grid.innerHTML = list.map(p => {
        // בדיקה אם יש מבצע או מחיר ישן
        const priceHTML = p.oldPrice 
            ? `<span class="old-price">${p.oldPrice}</span> <span style="color:red; font-weight:800; font-size:1.2rem;">${p.price}</span>` 
            : `<span style="color:var(--gold); font-weight:800; font-size:1.2rem;">${p.price}</span>`;

        return `
        <div class="card" onclick="location.href='product.html?id=${p.id}'">
            ${p.onSale ? '<div class="sale-badge">SALE!</div>' : ''}
            <img src="${p.img}" onerror="this.src='images/placeholder.jpg'" alt="${p.name}">
            <div class="card-body">
                <h3>${p.name}</h3>
                <p>${priceHTML}</p>
                ${p.sizes && p.sizes.length > 0 ? `<div class="size-preview">מידות: ${p.sizes.join(', ')}</div>` : ''}
            </div>
        </div>`;
    }).join('');
}

function handleSearch() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = items.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const categoryMatch = Array.isArray(p.category) 
            ? p.category.some(c => c.toLowerCase().includes(q)) 
            : p.category.toLowerCase().includes(q);
        return nameMatch || categoryMatch;
    });
    renderProducts(filtered);
}

function filterCategory(cat) {
    const searchInput = document.getElementById('searchInput');
    if(searchInput) searchInput.value = '';
    
    const filtered = cat === 'all' ? items : items.filter(i => {
        if (Array.isArray(i.category)) {
            return i.category.includes(cat);
        }
        return i.category === cat;
    });
    
    renderProducts(filtered);
    
    // גלילה חלקה לראש המוצרים
    window.scrollTo({ top: 450, behavior: 'smooth' });
    
    // סגירת תפריט בנייד
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) toggleMenu();
}

// --- מאזיני אירועים (Events) ---

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeNavMenu();
        const statement = document.getElementById('statementModal');
        const accMenu = document.getElementById('accMenu');
        if (statement) statement.style.display = 'none';
        if (accMenu) accMenu.style.display = 'none';
        
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) toggleMenu();
    }
});

// אתחול ראשוני בטעינה
window.addEventListener('DOMContentLoaded', () => {
    updateOpeningHours();
    if (window.items) renderProducts(window.items);
});

// ייצוא פונקציות לחלון הגלובלי (כדי שה-HTML יוכל לקרוא להן)
window.renderProducts = renderProducts;
window.handleSearch = handleSearch;
window.filterCategory = filterCategory;
window.updateOpeningHours = updateOpeningHours;
window.toggleMenu = toggleMenu;
window.openNavMenu = openNavMenu;
window.closeNavMenu = closeNavMenu;
window.showAccessibilityStatement = showAccessibilityStatement;
