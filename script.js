// =======================
// THEME TOGGLE
// =======================
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

// =======================
// DYNAMIC GALLERY
// =======================

const photos = [
    {
        src: "img/camping1.jpg",
        title: "Camping"
    },
    {
        src: "img/camping2.jpg",
        title: "Camping"
    },
    {
        src: "img/camping3.jpg",
        title: "Camping"
    },
    {
        src: "img/villa1.jpg",
        title: "Villa"
    },
    {
        src: "img/villa2.jpg",
        title: "Villa"
    },
    {
        src: "img/villa3.jpg",
        title: "Villa"
    },
    {
        src: "img/villa4.jpg",
        title: "Villa"
    },
    {
        src: "img/villa5.jpg",
        title: "Villa"
    },
    {
        src: "img/villa6.jpg",
        title: "Villa"
    },
    {
        src: "img/gacoan1.jpg",
        title: "Gacoan"
    },
    {
        src: "img/gacoan2.jpg",
        title: "Gacoan"
    }
];

const galleryContainer = document.getElementById("galleryContainer");

photos.forEach(photo => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    item.innerHTML = `
        <img src="${photo.src}" alt="">
        <div class="gallery-overlay">
            <h3>${photo.title}</h3>
        </div>
    `;

    item.addEventListener("click", () => openLightbox(photo.src));
    galleryContainer.appendChild(item);
});

// =======================
// LIGHTBOX
// =======================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

function openLightbox(src){
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

closeBtn.onclick = () => lightbox.style.display = "none";

lightbox.onclick = e => {
    if(e.target !== lightboxImg){
        lightbox.style.display = "none";
    }
};

// =======================
// CREW DATA
// =======================

const crewData = [
    { name: "Febi Aryanto", role: "High Rank" },
    { name: "Riki Abei", role: "High Rank" },
    { name: "Elan Sanjaya", role: "High Rank" },
    { name: "Maesa Adiansah", role: "H.Member/Front Man" },
    { name: "Rikki Kurniawan", role: "H.Member/Dev" },
    { name: "Ndaru Gaesang", role: "High Member" },
    { name: "Syarif Hidayat", role: "High Member" },
    { name: "Rachmat Diki", role: "High Member" },
    { name: "Andika Saputra", role: "Member" },
    { name: "Ari Santoso", role: "Member" },
    { name: "Dimas Wijaya", role: "Member" }
];

const crewContainer = document.getElementById("crewContainer");

crewData.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("crew-card");
    card.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
    crewContainer.appendChild(card);
});

// =======================
// SCROLL ANIMATION
// =======================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden")
    .forEach(el => observer.observe(el));
