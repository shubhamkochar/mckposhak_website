// ============================================================
// EDIT ME: your WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919057253748";
// ============================================================

// EDIT ME: your products. Add, remove, or change freely.
// - "images": add real photo URLs here once you have them, e.g. "photos/rani-pink-1.jpg".
//   Leave entries as "" to keep the placeholder colour swatch.
// - Every product needs a unique "id" (used in the product page URL).
const PRODUCTS = [
  {
    id: "rani-pink-bridal",
    category: "Bridal",
    name: "Rani Pink Bridal Poshak",
    price: "₹18,500",
    shortDesc: "Heavy gota patti work, full bridal set",
    longDesc: "A full bridal poshak set in rani pink, finished with heavy hand-worked gota patti along the border, sleeves and odhni. Made to order — comes as a complete set with kanchli, ghagra and odhni.",
    swatch: ["#8e1f45", "#c2477a"],
    images: ["", "", ""]
  },
  {
    id: "peacock-gota-patti",
    category: "Festive",
    name: "Peacock Gota Patti Poshak",
    price: "₹9,200",
    shortDesc: "Peacock blue silk with gold gota border",
    longDesc: "Peacock blue silk poshak with a gold gota patti border running through the ghagra and sleeves. A festive-wear favourite that photographs beautifully for functions and sangeet.",
    swatch: ["#0e5c63", "#1f8c8f"],
    images: ["", "", ""]
  },
  {
    id: "marigold-festive",
    category: "Festive",
    name: "Marigold Festive Poshak",
    price: "₹7,800",
    shortDesc: "Bright marigold, ideal for festive wear",
    longDesc: "A bright marigold poshak in flowing fabric, light enough for day-long festive wear while still holding its colour and shape through the evening.",
    swatch: ["#c9820c", "#e8a93a"],
    images: ["", "", ""]
  },
  {
    id: "ivory-bandhani",
    category: "Daily Wear",
    name: "Ivory Bandhani Poshak",
    price: "₹6,500",
    shortDesc: "Traditional bandhani tie-dye on soft cotton silk",
    longDesc: "Classic bandhani tie-dye worked on soft cotton silk in an ivory base. Comfortable for daily and everyday festive wear, with the fine dot-work bandhani is known for.",
    swatch: ["#e9dcc0", "#c9a35a"],
    images: ["", "", ""]
  },
  {
    id: "emerald-mirror-work",
    category: "Festive",
    name: "Emerald Mirror-Work Poshak",
    price: "₹11,000",
    shortDesc: "Emerald green with hand-set mirror work",
    longDesc: "Emerald green poshak with hand-set mirror work (shisha) through the yoke and border — a statement piece for weddings, sangeet and festive occasions.",
    swatch: ["#0f5132", "#1c8f5c"],
    images: ["", "", ""]
  },
  {
    id: "royal-blue-zardozi",
    category: "Bridal",
    name: "Royal Blue Zardozi Poshak",
    price: "₹14,200",
    shortDesc: "Zardozi embroidery, occasion wear",
    longDesc: "Royal blue poshak with fine zardozi embroidery across the bodice and border. Rich enough for weddings and receptions, made as a complete set.",
    swatch: ["#1b2a63", "#33489b"],
    images: ["", "", ""]
  }
];

// EDIT ME: your video clips. Add real video URLs to "src" once you have them —
// until then, each shows as a placeholder card. Videos autoplay muted on loop;
// clicking one unmutes and opens it fullscreen.
const VIDEOS = [
  { id: "v1", title: "Rani Pink Bridal — Full Look", src: "", swatch: ["#8e1f45", "#c2477a"] },
  { id: "v2", title: "Gota Patti Close-Up", src: "", swatch: ["#0e5c63", "#1f8c8f"] },
  { id: "v3", title: "Behind The Craft", src: "", swatch: ["#c9820c", "#e8a93a"] },
];

const logoMark = `<svg class="logo-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="30" fill="none" stroke="#cf9d32" stroke-width="2"/>
  <circle cx="32" cy="32" r="25" fill="#3a0d1c"/>
  <path d="M11 25 Q32 5 53 25" fill="none" stroke="#e8c877" stroke-width="1.4"/>
  <text x="32" y="40" text-anchor="middle" font-family="Marcellus, serif" font-size="18" fill="#e8c877">MCK</text>
</svg>`;

const playIcon = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z"/></svg>`;

// EDIT ME: your shop's social links and location
const SHOP_INFO = {
  address: "Manak Chand Kochar, Labhu Ji ka Katla, Kotegate, Bikaner, Rajasthan - 334001",
  mapsUrl: "https://maps.app.goo.gl/L1BgQvJNLFtRi247A",
  mapEmbedQuery: "Manak Chand Kochar, Labhu Ji ka Katla, Kotegate, Bikaner, Rajasthan 334001",
  instagram: "https://instagram.com/mck_poshak",
  youtube: "https://youtube.com/@mck_poshak"
};

const instaIcon = `<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.25.06 2.1.25 2.85.55.77.3 1.42.7 2.07 1.35.65.65 1.05 1.3 1.35 2.07.3.75.49 1.6.55 2.85.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.25-.25 2.1-.55 2.85a5.76 5.76 0 0 1-1.35 2.07c-.65.65-1.3 1.05-2.07 1.35-.75.3-1.6.49-2.85.55-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.25-.06-2.1-.25-2.85-.55a5.76 5.76 0 0 1-2.07-1.35 5.76 5.76 0 0 1-1.35-2.07c-.3-.75-.49-1.6-.55-2.85C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.25.25-2.1.55-2.85.3-.77.7-1.42 1.35-2.07A5.76 5.76 0 0 1 6.24 .88c.75-.3 1.6-.49 2.85-.55C10.34 2.2 10.8 2.2 12 2.2m0 1.8c-3.14 0-3.51 0-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.92-.36 1.94C3.9 8.4 3.9 8.77 3.9 11.9s0 3.51.07 4.75c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.31 1.94.36 1.24.06 1.6.07 4.75.07s3.51 0 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.92.36-1.94.06-1.24.07-1.6.07-4.75s0-3.51-.07-4.75c-.05-1.02-.22-1.57-.36-1.94a3.16 3.16 0 0 0-.79-1.2 3.16 3.16 0 0 0-1.2-.79c-.37-.14-.92-.31-1.94-.36C15.6 3.9 15.24 3.9 12 3.9m0 3.16a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88m0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28m5.13-1.98a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/></svg>`;

const ytIcon = `<svg viewBox="0 0 24 24"><path d="M22.5 6.42a2.78 2.78 0 0 0-1.96-1.97C18.88 4 12 4 12 4s-6.88 0-8.54.45A2.78 2.78 0 0 0 1.5 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .5 5.58 2.78 2.78 0 0 0 1.96 1.97C5.12 20 12 20 12 20s6.88 0 8.54-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.58ZM9.75 15.5v-7l6 3.5-6 3.5Z"/></svg>`;

const mapIcon = `<svg viewBox="0 0 24 24"><path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.5 7.5 12.5 7.5 12.5s7.5-7 7.5-12.5C19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"/></svg>`;

// sets href on every element carrying these classes, wherever they appear on the page
function wireSocial(){
  document.querySelectorAll(".insta-link").forEach(el => el.href = SHOP_INFO.instagram);
  document.querySelectorAll(".yt-link").forEach(el => el.href = SHOP_INFO.youtube);
  document.querySelectorAll(".maps-link").forEach(el => el.href = SHOP_INFO.mapsUrl);
}

function mapEmbedSrc(){
  return `https://www.google.com/maps?q=${encodeURIComponent(SHOP_INFO.mapEmbedQuery)}&output=embed`;
}

function waLink(productName){
  const text = productName
    ? `Hi, I'm interested in the ${productName}. Could you share more details?`
    : `Hi, I'm interested in your Rajputi Poshak collection.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

const waIcon = `<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.24 0 4.35.87 5.93 2.46a8.23 8.23 0 0 1 2.42 5.85c0 4.57-3.72 8.29-8.35 8.29a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.2 8.2 0 0 1-1.27-4.4c0-4.57 3.72-8.31 8.29-8.31M8.53 6.9c-.17 0-.45.06-.68.32-.24.25-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.86 4.45 3.9 2.2.87 2.65.7 3.13.65.47-.04 1.53-.62 1.75-1.22.21-.6.21-1.11.15-1.22-.06-.1-.24-.17-.5-.3-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.21-.5-.43-.43-.58-.44Z"/></svg>`;

const swatchIcon = `<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.7 3.7L12 11.7 5.3 8 12 4.3ZM5 9.6l6 3.3v7.1l-6-3.3V9.6Zm8 10.4v-7.1l6-3.3v7.1l-6 3.3Z"/></svg>`;

// wires up any element with id in the given list to the general enquiry WhatsApp link
function wireGeneralWaButtons(ids){
  ids.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.href = waLink();
  });
}

// builds the CSS background for a product image slot: real photo if present, else a swatch gradient
function imageBackground(product, index){
  const url = product.images && product.images[index];
  if(url){ return `url('${url}') center/cover no-repeat`; }
  const [c1, c2] = product.swatch;
  const angle = 155 + index * 40;
  return `linear-gradient(${angle}deg, ${c1}, ${c2})`;
}

// renders the autoplay video section into the given container id and wires up
// click-to-fullscreen behaviour for any video that has a real "src" set
function renderVideos(containerId){
  const grid = document.getElementById(containerId);
  if(!grid) return;

  grid.innerHTML = VIDEOS.map((v, i) => `
    <div class="video-card ${v.src ? "" : "no-src"}" data-i="${i}">
      ${v.src
        ? `<video src="${v.src}" muted loop autoplay playsinline></video>`
        : `<div class="placeholder" style="background:linear-gradient(155deg, ${v.swatch[0]}, ${v.swatch[1]})"></div>`
      }
      <div class="play-badge">${playIcon}</div>
      <div class="caption">${v.title}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".video-card").forEach(card => {
    const video = card.querySelector("video");
    if(!video) return; // placeholder card, nothing to play fullscreen yet

    card.addEventListener("click", () => {
      video.muted = false;
      video.controls = true;
      const request = video.requestFullscreen || video.webkitRequestFullscreen || video.msRequestFullscreen;
      if(request) request.call(video);
    });

    document.addEventListener("fullscreenchange", () => {
      if(!document.fullscreenElement){
        video.muted = true;
        video.controls = false;
      }
    });
  });
}
