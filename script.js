const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const video = document.getElementById("menuVideo");

/* THEME */
themeBtn.onclick = () => {
  const dark = body.dataset.theme === "dark";
  body.dataset.theme = dark ? "light" : "dark";
  themeBtn.textContent = dark ? "🌤️" : "🌙";
};

/* MENU OPEN / CLOSE */
menuBtn.onclick = () => {
  menu.classList.add("active");
  video.currentTime = 0;
  video.play();
};

closeMenu.onclick = () => {
  menu.classList.remove("active");
  video.pause();
};

/* DATA */
const teamData = [
  {name:"ALOYSIUS DIMAS", role:"NOMAD", img:"1.jpg"},
  {name:"MAESA ADIYANSAH", role:"MEMBER", img:"profile.jpg"},
  {name:"RIKKI KURNIAWAN", role:"MEMBER", img:"team2.jpg"},
  {name:"RIKI ABEI P", role:"MEMBER", img:"team3.jpg"},
  {name:"ANDIKA", role:"MEMBER", img:"team4.jpg"},
  {name:"RAMADHAN YAHYA", role:"MEMBER", img:"team4.jpg"},
  {name:"TAUFAN NEGORO", role:"MEMBER", img:"team4.jpg"},
  {name:"ELAN SANJAYA", role:"MEMBER", img:"team4.jpg"},
  {name:"SYARIF HIDAYAT", role:"MEMBER", img:"team4.jpg"},
  {name:"DIMAS WIJAYA", role:"MEMBER", img:"team4.jpg"},
  {name:"FEBI ARYANTO", role:"MEMBER", img:"team4.jpg"},
  {name:"RAHMAT DIKI", role:"MEMBER", img:"team4.jpg"},
  {name:"ARI SANTOSO", role:"MEMBER", img:"team4.jpg"},
  {name:"NDARU GAESANG", role:"TREASURY", img:"team4.jpg"},
  {name:"RIZKY HARYANTO", role:"MEMBER", img:"team4.jpg"}
];

const galleryData = [
  "img/camping1.jpg",
  "img/camping2.jpg",
  "img/camping3.jpg",
  "img/villa1.jpg",
  "img/villa2.jpg",
  "img/villa3.jpg",
  "img/villa4.jpg",
  "img/villa5.jpg",
  "img/villa6.jpg"
];

/* RENDER TEAM */
const teamTab = document.getElementById("team");
teamData.forEach(m => {
  teamTab.innerHTML += `
    <div class="member">
      <img src="${m.img}">
      <div>
        <strong>${m.name}</strong><br>
        <small>${m.role}</small>
      </div>
    </div>
  `;
});

/* RENDER GALLERY */
const galleryGrid = document.getElementById("galleryGrid");
galleryData.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";
  img.onclick = () => openLightbox(src);
  galleryGrid.appendChild(img);
});

/* SLIDESHOW (SOURCE = GALERI) */
const slideshow = document.getElementById("menuSlideshow");
galleryData.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  if (i === 0) img.classList.add("active");
  slideshow.appendChild(img);
});

let slideIndex = 0;
setInterval(() => {
  const slides = slideshow.querySelectorAll("img");
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);

/* TABS */
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tabBtn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightImg");

function openLightbox(src) {
  lightImg.src = src;
  lightbox.style.display = "flex";
}

lightbox.onclick = () => lightbox.style.display = "none";
