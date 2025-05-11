document.addEventListener("DOMContentLoaded", function () {
  // Language Toggle
  const languageToggle = document.getElementById("language-toggle");
  let currentLanguage = "en";

  const bokaroAward =
    "https://www.prabhatkhabar.com/state/jharkhand/ranchi/khortha-literature-vinay-tiwari-gets-jharkhand-prahari-samman-by-research-scholar-kiel-university";
  const bokaroAwardImg = "assets/img/vinay_bokaro.jpg";

  const birsaAward =
    "https://www.prabhatkhabar.com/state/jharkhand/ranchi/jharkhand-news-khortha-litterateur-and-lyricist-vinay-tiwari-gets-birsa-munda-jyoti-award";
  const birsaAwardImg = "assets/img/vinay_birsa.jpg";

  const telegraphArticle =
    "https://www.telegraphindia.com/jharkhand/film-policy-not-enough-says-lyricist/cid/1329378";
  const telegraphArticleImg = "assets/img/uncle_award.jpg";
  // Translations object
  const translations = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      work: "Works",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
      contact_button: "Contact Me",
      title:
        'Hi,<br>I\'am <span class="home__title-color">Vinay Tiwari</span><br> Khortha lyricist, singer, writer, director, and cultural activist',
      about_subtitle: "Vinay Kumar Tiwari",
      about_text:
        "Renowned Khortha language lyricist, poet, and cultural advocate from Jharkhand, India. His songs poignantly depict rural life, folk culture, and social challenges of Jharkhand. Recognized for his pioneering contributions to preserving the Khortha language and folk literature.",
      born: "Born",
      born_date: "October 5, 1974",
      from: "From",
      from_place: "Roam village, Topchanchi, Dhanbad",
      skills_subtitle: "Professional Skills",
      skills_text:
        "Vinay Kumar Tiwari has mastered multiple artistic disciplines that contribute to his cultural activism and preservation of Khortha traditions.",
      skill_lyricist: "Lyricist",
      skill_poet: "Poet",
      skill_activist: "Cultural Activist",
      skill_director: "Director",
      work_folk_songs: "Folk Songs",
      song1: '"Tore Bina Soon Lage Nagariya" (Wedding song)',
      song2: '"Gaamak Mehandi Mahake Lagal" (Village life)',
      song3: '"Jharkhandi Hokar Bhi Dekho" (Social awareness)',
      work_poetry: "Poetry Collections",
      poetry1: '"Fragrance of the Soil" (2015)',
      poetry2: '"Dreams of Sarna" (2020)',
      poetry3: '"Mite Nay Diha Matik Man"',
      work_books: "Books",
      book1: '"History of Khortha Folk Songs" (2018)',
      book2: '"Khortha Lok Sahitya Ka Itihas"',
      filter_all: "All",
      filter_performance: "Performances",
      filter_awards: "Awards",
      filter_events: "Events",
      performance1: "Cultural Performance",
      award1: "Receiving Award",
      event1: "Literature Festival",
      performance2: "Folk Song Performance",
      award2: "International Honor",
      event2: "Language Workshop",
      click_view: "Click to view",
      news_title: "News & Articles",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_send: "Send",
      news_list: [
        {
          title:
            "Khortha writer Vinay Tiwari honored with 'Jharkhand Prahari Samman'",
          url: bokaroAward,
          img: bokaroAwardImg,
          description:
            "Honored by Kiel University research scholar Dr. Netra P Paudyal in Bokaro for contributions to Khortha literature.",
        },
        {
          title: "Vinay Tiwari receives 'Birsa Munda Jyoti Samman'",
          url: birsaAward,
          img: birsaAwardImg,
          description:
            "Followed by international honor in Nepal where he was awarded 'Vishwa Pratibha International Samman'.",
        },
        {
          title: "Film policy not enough, says lyricist",
          url: telegraphArticle,
          img: telegraphArticleImg,
          description:
            "Any policy aimed at promoting art and film of Jharkhand should be drafted in consultation with local artistes and writers",
        },
      ],
    },
    hi: {
      home: "होम",
      about: "परिचय",
      skills: "कौशल",
      work: "कृतियाँ",
      gallery: "गैलरी",
      news: "समाचार",
      contact: "संपर्क",
      contact_button: "संपर्क करें",
      title:
        'नमस्ते,<br>मैं हूँ <span class="home__title-color">विनय तिवारी</span><br> खोरठा गीतकार, गायक, लेखक, निर्देशक और सांस्कृतिक कार्यकर्ता',
      about_subtitle: "विनय कुमार तिवारी",
      about_text:
        "झारखंड, भारत के प्रसिद्ध खोरठा भाषा के गीतकार, कवि और सांस्कृतिक प्रचारक। उनके गीत झारखंड के ग्रामीण जीवन, लोक संस्कृति और सामाजिक चुनौतियों को मार्मिकता से चित्रित करते हैं। खोरठा भाषा और लोक साहित्य के संरक्षण में अग्रणी योगदान के लिए मान्यता प्राप्त।",
      born: "जन्म",
      born_date: "5 अक्टूबर, 1974",
      from: "स्थान",
      from_place: "रोआम गाँव, टोपचांची, धनबाद",
      skills_subtitle: "पेशेवर कौशल",
      skills_text:
        "विनय कुमार तिवारी ने कई कलात्मक विधाओं में महारत हासिल की है जो उनके सांस्कृतिक सक्रियता और खोरठा परंपराओं के संरक्षण में योगदान देती हैं।",
      skill_lyricist: "गीतकार",
      skill_poet: "कवि",
      skill_activist: "सांस्कृतिक कार्यकर्ता",
      skill_director: "निर्देशक",
      work_folk_songs: "लोक गीत",
      song1: '"तोरे बिना सून लागे नगरिया" (विवाह गीत)',
      song2: '"गामक मेहंदी महके लगल" (ग्रामीण जीवन)',
      song3: '"झारखंडी होकर भी देखो" (सामाजिक जागरूकता)',
      work_poetry: "कविता संग्रह",
      poetry1: '"माटी की गंध" (2015)',
      poetry2: '"सरना के सपने" (2020)',
      poetry3: '"मिटे नय दिहा माटिक मन"',
      work_books: "पुस्तकें",
      book1: '"खोरठा लोक गीतों का इतिहास" (2018)',
      book2: '"खोरठा लोक साहित्य का इतिहास"',
      filter_all: "सभी",
      filter_performance: "प्रदर्शन",
      filter_awards: "पुरस्कार",
      filter_events: "आयोजन",
      performance1: "सांस्कृतिक प्रदर्शन",
      award1: "पुरस्कार प्राप्ति",
      event1: "साहित्य उत्सव",
      performance2: "लोक गीत प्रदर्शन",
      award2: "अंतरराष्ट्रीय सम्मान",
      event2: "भाषा कार्यशाला",
      click_view: "देखने के लिए क्लिक करें",
      news_title: "समाचार और लेख",
      contact_name: "नाम",
      contact_email: "ईमेल",
      contact_message: "संदेश",
      contact_send: "भेजें",
      news_list: [
        {
          title: "खोरठा साहित्यकार विनय तिवारी को 'झारखंड प्रहरी सम्मान'",
          url: bokaroAward,
          img: bokaroAwardImg,
          description:
            "बोकारो में केल यूनिवर्सिटी के शोध विद्वान डॉ. नेत्रा पी पौड्याल द्वारा खोरठा साहित्य में योगदान के लिए सम्मानित।",
        },
        {
          title: "विनय तिवारी को 'बिरसा मुंडा ज्योति सम्मान'",
          url: birsaAward,
          img: birsaAwardImg,
          description:
            "इसके बाद नेपाल में अंतरराष्ट्रीय सम्मान 'विश्व प्रतिभा सम्मान' से सम्मानित किया गया।",
        },
        {
          title: "फिल्म नीति पर्याप्त नहीं, कहते हैं गीतकार",
          url: telegraphArticle,
          img: telegraphArticleImg,
          description:
            "झारखंड की कला और फिल्म को बढ़ावा देने के लिए बनाई गई किसी भी नीति का मसौदा स्थानीय कलाकारों और लेखकों के परामर्श से तैयार किया जाना चाहिए",
        },
      ],
    },
  };

  // Toggle language function
  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";
    this.textContent = currentLanguage === "en" ? "हिंदी" : "English";
    translatePage();
  });

  // Translate the page
  function translatePage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[currentLanguage][key]) {
        if (
          element.tagName === "INPUT" &&
          element.hasAttribute("placeholder")
        ) {
          element.placeholder = translations[currentLanguage][key];
        } else if (
          element.tagName === "INPUT" &&
          element.hasAttribute("value")
        ) {
          element.value = translations[currentLanguage][key];
        } else {
          element.textContent = translations[currentLanguage][key];
        }
      }
    });

    // Special handling for HTML content
    const homeTitle = document.querySelector(".home__title");
    if (homeTitle && translations[currentLanguage]["title"]) {
      homeTitle.innerHTML = translations[currentLanguage]["title"];
    }

    // Update news articles
    renderNewsArticles();
  }

  // Gallery Filter
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

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const galleryImages = document.querySelectorAll(".gallery__item img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // News articles rendering
  function renderNewsArticles() {
    const newsList = document.getElementById("news-list");
    const newsData = translations[currentLanguage].news_list;

    newsList.innerHTML = newsData
      .map(
        (news) => `
      <div class="news-card">
        <img src="${news.img}" alt="${news.title}">
        <div class="news-content">
          <h3>${news.title}</h3>
          <p>${news.description}</p>
          <a href="${news.url}" target="_blank" data-i18n="read_more">Read More</a>
        </div>
      </div>
    `
      )
      .join("");

    // Translate "Read More" button in news cards
    document
      .querySelectorAll(".news-content a[data-i18n='read_more']")
      .forEach((link) => {
        link.textContent = currentLanguage === "en" ? "Read More" : "और पढ़ें";
      });
  }

  // Initialize the page
  translatePage();
});

document.addEventListener("DOMContentLoaded", function () {
  // Language Toggle
  const languageToggle = document.getElementById("language-toggle");
  let currentLanguage = "en";

  // Carousel variables
  let currentImageIndex = 0;
  let galleryImages = [];
  let imageCaptions = [];
  let touchStartX = 0;
  let touchEndX = 0;

  // Translations object (keep your existing translations)
  const translations = {
    // ... your existing translations ...
  };

  // Initialize the page
  translatePage();
  initGallery();

  function initGallery() {
    // Get all gallery images and captions
    const galleryItems = document.querySelectorAll(".gallery__item");
    galleryImages = Array.from(galleryItems).map((item) => ({
      src: item.querySelector("img").src,
      alt: item.querySelector("img").alt,
      category: item.getAttribute("data-category"),
    }));

    imageCaptions = Array.from(galleryItems).map(
      (item) => item.querySelector(".gallery__overlay h3").textContent
    );

    // Add click event to each gallery image
    galleryItems.forEach((item, index) => {
      item.addEventListener("click", () => openLightbox(index));
    });

    // Add touch events for mobile swipe
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.addEventListener("touchstart", handleTouchStart, false);
    lightboxImg.addEventListener("touchend", handleTouchEnd, false);
  }

  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    caption.textContent = imageCaptions[currentImageIndex];

    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  function showPrevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    // Add fade effect
    lightboxImg.style.opacity = 0;
    setTimeout(() => {
      lightboxImg.src = galleryImages[currentImageIndex].src;
      lightboxImg.alt = galleryImages[currentImageIndex].alt;
      caption.textContent = imageCaptions[currentImageIndex];
      lightboxImg.style.opacity = 1;
    }, 200);
  }

  // Touch events for swipe navigation
  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      showNextImage(); // Swipe left
    } else if (touchEndX - touchStartX > swipeThreshold) {
      showPrevImage(); // Swipe right
    }
  }

  // Event listeners for carousel controls
  document
    .querySelector(".lightbox-close")
    .addEventListener("click", closeLightbox);
  document
    .querySelector(".carousel-control.next")
    .addEventListener("click", showNextImage);
  document
    .querySelector(".carousel-control.prev")
    .addEventListener("click", showPrevImage);

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (document.getElementById("lightbox").style.display === "flex") {
      switch (e.key) {
        case "ArrowRight":
          showNextImage();
          break;
        case "ArrowLeft":
          showPrevImage();
          break;
        case "Escape":
          closeLightbox();
          break;
      }
    }
  });

  // Click outside image to close
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Keep your existing translatePage() and other functions...
  function translatePage() {
    // ... your existing translation logic ...
  }

  // Gallery Filter
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

  // News articles rendering
  function renderNewsArticles() {
    const newsList = document.getElementById("news-list");
    const newsData = translations[currentLanguage].news_list;

    newsList.innerHTML = newsData
      .map(
        (news) => `
      <div class="news-card">
        <img src="${news.img}" alt="${news.title}">
        <div class="news-content">
          <h3>${news.title}</h3>
          <p>${news.description}</p>
          <a href="${news.url}" target="_blank" data-i18n="read_more">Read More</a>
        </div>
      </div>
    `
      )
      .join("");

    // Translate "Read More" button in news cards
    document
      .querySelectorAll(".news-content a[data-i18n='read_more']")
      .forEach((link) => {
        link.textContent = currentLanguage === "en" ? "Read More" : "और पढ़ें";
      });
  }
});

//--
document.addEventListener("DOMContentLoaded", function () {
  // Language Toggle
  const languageToggle = document.getElementById("language-toggle");
  let currentLanguage = "en";

  // Carousel variables
  let currentImageIndex = 0;
  let galleryImages = [];
  let imageCaptions = [];
  let touchStartX = 0;
  let touchEndX = 0;

  // Translations object (keep your existing translations)
  const translations = {
    // ... your existing translations ...
  };

  // Initialize the page
  translatePage();
  initGallery();

  function initGallery() {
    // Get all gallery images and captions
    const galleryItems = document.querySelectorAll(".gallery__item");
    galleryImages = Array.from(galleryItems).map((item) => ({
      src: item.querySelector("img").src,
      alt: item.querySelector("img").alt,
      category: item.getAttribute("data-category"),
    }));

    imageCaptions = Array.from(galleryItems).map(
      (item) => item.querySelector(".gallery__overlay h3").textContent
    );

    // Add click event to each gallery image
    galleryItems.forEach((item, index) => {
      item.addEventListener("click", () => openLightbox(index));
    });

    // Add touch events for mobile swipe
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.addEventListener("touchstart", handleTouchStart, false);
    lightboxImg.addEventListener("touchend", handleTouchEnd, false);
  }

  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    caption.textContent = imageCaptions[currentImageIndex];

    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  function showPrevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    // Add fade effect
    lightboxImg.style.opacity = 0;
    setTimeout(() => {
      lightboxImg.src = galleryImages[currentImageIndex].src;
      lightboxImg.alt = galleryImages[currentImageIndex].alt;
      caption.textContent = imageCaptions[currentImageIndex];
      lightboxImg.style.opacity = 1;
    }, 200);
  }

  // Touch events for swipe navigation
  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      showNextImage(); // Swipe left
    } else if (touchEndX - touchStartX > swipeThreshold) {
      showPrevImage(); // Swipe right
    }
  }

  // Event listeners for carousel controls
  document
    .querySelector(".lightbox-close")
    .addEventListener("click", closeLightbox);
  document
    .querySelector(".carousel-control.next")
    .addEventListener("click", showNextImage);
  document
    .querySelector(".carousel-control.prev")
    .addEventListener("click", showPrevImage);

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (document.getElementById("lightbox").style.display === "flex") {
      switch (e.key) {
        case "ArrowRight":
          showNextImage();
          break;
        case "ArrowLeft":
          showPrevImage();
          break;
        case "Escape":
          closeLightbox();
          break;
      }
    }
  });

  // Click outside image to close
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Keep your existing translatePage() and other functions...
  function translatePage() {
    // ... your existing translation logic ...
  }

  // Gallery Filter
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

  // News articles rendering
  function renderNewsArticles() {
    const newsList = document.getElementById("news-list");
    const newsData = translations[currentLanguage].news_list;

    newsList.innerHTML = newsData
      .map(
        (news) => `
      <div class="news-card">
        <img src="${news.img}" alt="${news.title}">
        <div class="news-content">
          <h3>${news.title}</h3>
          <p>${news.description}</p>
          <a href="${news.url}" target="_blank" data-i18n="read_more">Read More</a>
        </div>
      </div>
    `
      )
      .join("");

    // Translate "Read More" button in news cards
    document
      .querySelectorAll(".news-content a[data-i18n='read_more']")
      .forEach((link) => {
        link.textContent = currentLanguage === "en" ? "Read More" : "और पढ़ें";
      });
  }
});
