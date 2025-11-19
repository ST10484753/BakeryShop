/* ==========================
   HAMBURGER MENU
========================== */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("change", () => {
    navLinks.classList.toggle("active");
  });
}

/* ==========================
   MODAL (NEWS PAGE)
========================== */
const modalBtn = document.getElementById("specialsBtn");
const modal = document.getElementById("specialsModal");
const closeBtn = document.querySelector(".close");

if (modalBtn && modal && closeBtn) {
  modalBtn.addEventListener("click", () => modal.classList.add("show"));
  closeBtn.addEventListener("click", () => modal.classList.remove("show"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
}

/* ==========================
   FADE-IN ANIMATION
========================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((img, index) => {
    setTimeout(() => img.classList.add("show"), 200 * (index + 1));
  });
});

/* ==========================
   LIGHTBOX GALLERY
========================== */
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.classList.add("show");

    const largeImg = document.createElement("img");
    largeImg.src = img.src;

    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });
});

/* ==========================
   LEAFLET MAP
========================== */
const mapDiv = document.getElementById("map");
if (mapDiv) {
  const map = L.map("map").setView([-26.2041, 28.0473], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("Sweet Delights Bakery")
    .openPopup();
}

/* ==========================
   DYNAMIC HOMEPAGE MESSAGE
========================== */
const messages = [
  "Freshly baked with love!",
  "Taste the sweetness today!",
  "Your daily dose of muffins and scones!",
  "Sweet treats just for you!",
  "Delicious scones & muffins await!"
];

const dynamicMsgEl = document.getElementById("dynamicMessage");
if (dynamicMsgEl) {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  dynamicMsgEl.innerText = randomMessage;
}

/* ==========================
   DYNAMIC PRODUCTS & SEARCH
========================== */
const products = [
  { name: "Chocolate Chip Muffin", price: 15, category: "Muffin" },
  { name: "Blueberry Scone", price: 12, category: "Scone" },
  { name: "BananaChoc Muffin", price: 18, category: "Muffin" },
  { name: "Cranberry Scone", price: 14, category: "Scone" },
  { name: "Carrot Cake Muffin", price: 20, category: "Muffin" }
];

const productContainer = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function displayProducts(items) {
  if (!productContainer) return;
  productContainer.innerHTML = "";
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Price: R${item.price}</p>
    `;
    productContainer.appendChild(div);
  });
}

if (productContainer) displayProducts(products);

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
    );
    displayProducts(filtered);
  });
}

/* ==========================
   CONTACT FORM (contact.html)
========================== */
const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contactResponse");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const type = contactForm.msgType.value;
    const message = contactForm.message.value.trim();

    if (!name || !email || !phone || !type || !message) {
      contactResponse.textContent = "Please complete all fields.";
      contactResponse.style.color = "red";
      return;
    }

    // Mock AJAX email submission
    setTimeout(() => {
      contactResponse.style.color = "green";
      contactResponse.innerHTML = `Thank you ${name}! Your <b>${type}</b> message has been sent successfully.`;
      contactForm.reset();
    }, 500);
  });
}

/* ==========================
   ENQUIRY FORM (enquiry.html)
========================== */
const enquiryForm = document.getElementById("enquiryForm");
const enquiryResponse = document.getElementById("enquiryResponse");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = enquiryForm.name.value.trim();
    const email = enquiryForm.email.value.trim();
    const phone = enquiryForm.phone.value.trim();
    const type = enquiryForm.type.value;
    const message = enquiryForm.message.value.trim();

    if (!name || !email || !phone || !type || !message) {
      enquiryResponse.textContent = "Please fill in all fields correctly.";
      enquiryResponse.style.color = "red";
      return;
    }
	  // SUCCESSFUL SUBMISSION
    alert("Your enquiry has been sent!");

    // Special dynamic response (assignment requirement)
    let reply = "";

    switch (type) {
      case "product":
        reply = "✔️ Our product team will reply with pricing and stock availability soon.";
        break;
      case "service":
        reply = "✔️ Thank you! We will contact you regarding our services.";
        break;
	}

    // Mock AJAX submission with cost/response
    setTimeout(() => {
      enquiryResponse.style.color = "green";
      enquiryResponse.innerHTML = `Thank you ${name}! Your enquiry about <b>${type}</b> has been received. We will respond shortly.`;
      enquiryForm.reset();
    }, 500);
  });
}

/* ==========================
   ACCORDION (Extra Interactive Element)
========================== */
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    // Close all others
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) c.style.maxHeight = null;
    });
    // Toggle clicked
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});
