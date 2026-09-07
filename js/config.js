// Configuration for VIS Museum of Culinary Science & Food History (Kuliner)
const STORAGE_KEY = 'vis_kuliner_positions';

const TECH_CATEGORIES = [
    {
        "id": "all",
        "label": "Semua Koleksi",
        "icon": "✨"
    },
    {
        "id": "H8",
        "label": "Sains Memasak & Gastronomi",
        "icon": "🍳",
        "title": "Cuisine & the Science of Cooking"
    },
    {
        "id": "H9",
        "label": "Sejarah Makanan & Minuman",
        "icon": "🍷",
        "title": "History of Food & Drink"
    }
];

const SYNONYMS = {
    "kuliner": [
        "culinary",
        "gastronomi",
        "masakan",
        "makanan",
        "hidangan",
        "santapan",
        "dapur",
        "chef"
    ],
    "memasak": [
        "cooking",
        "teknik masak",
        "rebus",
        "panggang",
        "goreng",
        "tumis",
        "bakar",
        "roast",
        "bake"
    ],
    "gastronomi": [
        "gastronomy",
        "molecular gastronomy",
        "seni kuliner",
        "sains makanan",
        "tata boga"
    ],
    "reaksi": [
        "maillard",
        "karamelisasi",
        "denaturasi",
        "koagulasi",
        "fermentasi",
        "oksidasi",
        "browning"
    ],
    "maillard": [
        "browning",
        "reaksi maillard",
        "pencokelatan",
        "asam amino",
        "gula pereduksi",
        "karamelisasi"
    ],
    "panas": [
        "heat",
        "suhu",
        "konveksi",
        "konduksi",
        "radiasi",
        "sous-vide",
        "temperatur"
    ],
    "rempah": [
        "spice",
        "spices",
        "bumbu",
        "lada",
        "pala",
        "cengkih",
        "kayu manis",
        "jahe",
        "kunyit",
        "herba"
    ],
    "bumbu": [
        "seasoning",
        "rempah",
        "aromatik",
        "garam",
        "lada",
        "saus",
        "marinasi"
    ],
    "rasa": [
        "taste",
        "flavour",
        "flavor",
        "umami",
        "manis",
        "asin",
        "asam",
        "pahit",
        "pedas",
        "capsaicin"
    ],
    "daging": [
        "meat",
        "beef",
        "steak",
        "unggas",
        "ikan",
        "protein",
        "kolagen",
        "keempukan"
    ],
    "roti": [
        "bread",
        "gandum",
        "terigu",
        "gluten",
        "ragi",
        "yeast",
        "adonan",
        "fermentasi",
        "baking"
    ],
    "fermentasi": [
        "fermentation",
        "ragi",
        "bakteri",
        "tape",
        "tempe",
        "keju",
        "yogurt",
        "kimchi",
        "khamir"
    ],
    "minuman": [
        "drink",
        "beverage",
        "kopi",
        "teh",
        "bir",
        "wine",
        "anggur",
        "cokelat",
        "susu",
        "air"
    ],
    "kopi": [
        "coffee",
        "kafein",
        "espresso",
        "sangrai",
        "roasting",
        "seduh",
        "arabika",
        "robusta"
    ],
    "teh": [
        "tea",
        "camellia sinensis",
        "tanin",
        "teh hijau",
        "teh hitam",
        "oolong",
        "seduhan"
    ],
    "sejarah": [
        "history",
        "asal usul",
        "evolusi",
        "peradaban",
        "domestikasi",
        "arkeologi makanan"
    ],
    "padi": [
        "beras",
        "nasi",
        "rice",
        "sawah",
        "gandum",
        "serealia",
        "karbohidrat"
    ],
    "jagung": [
        "maize",
        "corn",
        "teosinte",
        "mesoamerika",
        "tortilla"
    ],
    "mitos": [
        "myth",
        "miskonsepsi",
        "kekeliruan kuliner",
        "debunked",
        "fakta dapur"
    ]
};
