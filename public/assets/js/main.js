// YouTube Videos Data
const youtubeVideos = [
  {
    id: "RFqmxrzIfsw",
    title:
      "भित्ति चित्र के माध्यम से खोरठा के प्रचार प्रसार में लगे है खोरठा गीतकार विनय तिवारी",
    description:
      "भित्ति चित्र के माध्यम से खोरठा के प्रचार प्रसार में लगे है खोरठा गीतकार विनय तिवारी",
  },
  {
    id: "LfYcxcLLtvs",
    title:
      "Binay Tewary khortha Life story | विनय तिवारी की जीवनी | Binay Tiwari | खोरठा गीतकार विनय तिवारी",
    description:
      "खोरठा गीतकार विनय तिवारी एक ऐसा नाम जिसने अपने गीतों से खोरठा को नई ऊंचाई तक पहुंचाया। देश ही नहीं विदेशों में उनके गीतों ने धूम मचाई। खोरठा को गुमनामी से निकालकर जनमानस तक पहुंचाया। आज विश्व पटल पर खोरठा की एक छाप है तो इसमें बड़ा योगदान गीतकार विनय तिवारी का है। ",
  },

  {
    id: "BqWQzr0pBA",
    title:
      "Khortha Hit Binay Tiwari  Chand Ke Jaisan Gori  || New Super Hit Khortha 2014 By Binay Tiwari",
    description:
      "Chand Ke Jaisan Gori ......Chand Sa Chehra....... (Super Hit Khortha Prem Geet ) By Binay Tiwary Watch the latest  number by the Ramesh Roshan Chand Sa Chehra exclusively on SSA Music.",
  },
];

// Render YouTube Videos
function renderYouTubeVideos() {
  const container = document.getElementById("youtube-videos-container");

  youtubeVideos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.className = "video-item";
    videoElement.innerHTML = `
      <div class="video-iframe-container">
        <iframe 
          src="https://www.youtube.com/embed/${video.id}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      </div>
    `;
    container.appendChild(videoElement);
  });
}

// Call the function when DOM is loaded
document.addEventListener("DOMContentLoaded", renderYouTubeVideos);

// Gallery Filter
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".gallery__filter-btn");
  const galleryItems = document.querySelectorAll(".gallery__item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter items
      galleryItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// Update News Section
document.getElementById("news-title").textContent =
  translations[currentLanguage]["news_title"];
const newsList = document.getElementById("news-list");
newsList.innerHTML = "";
translations[currentLanguage]["news_list"].forEach((article) => {
  const card = document.createElement("div");
  card.className = "news-card";

  const img = document.createElement("img");
  img.src = article.img;
  img.alt = article.title;

  const content = document.createElement("div");
  content.className = "news-card-content";

  const link = document.createElement("a");
  link.href = article.url;
  link.target = "_blank";
  link.textContent = article.title;

  content.appendChild(link);
  card.appendChild(img);
  card.appendChild(content);
  newsList.appendChild(card);
});

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
