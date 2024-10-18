var dataReload = document.querySelectorAll("[data-reload]");
var britishFlag = document.getElementById("british-flag");
var germanFlag = document.getElementById("german-flag");
var hungarianFlag = document.getElementById("hungarian-flag");

var language = {
  de: {
    content: `/* Was wirdst du hier finden? Unter anderem Blogeinträge, Kursen über IT,
            Programmierung und Technologie. */`,
    remark: "Die Seite ist in HTML, CSS und JavaScript entwickelt.",
    technologyTitle: "Technologien",
    title: "Eine Webseite für IT-Begeisterte",
  },
  en: {
    content: `/* What will you find here? Blogposts and courses about IT, programming and
            technology. */`,
    remark: "The Website is developed in HTML, CSS and JavaScript.",
    technologyTitle: "Technologies",
    title: "A Website for IT Enthusiasts",
  },
  hu: {
    content: `/* Mit fogsz itt találni? Blogbejegyzéseket, kurzusokat IT-ról, programozásról,
            technológiákról. */`,
    technologyTitle: "Technológiák",
    remark: "Az oldal kizárólag HTML, CSS és JavaScript nyelveken íródott.",
    title: "Weboldal IT iránt érdeklődőknek",
  },
};

if (window.location.hash) {
  switch (window.location.hash) {
    case "#de":
      content.textContent = language.de.content;
      remark.textContent = language.de.remark;
      technologyTitle.textContent = language.de.technologyTitle;
      title.textContent = language.de.title;

      // Hide the flag of the displayed language
      britishFlag.style.display = "block";
      germanFlag.style.display = "none";
      hungarianFlag.style.display = "block";
      break;
    case "#en":
      content.textContent = language.en.content;
      remark.textContent = language.en.remark;
      technologyTitle.textContent = language.en.technologyTitle;
      title.textContent = language.en.title;

      // Hide the flag of the displayed language
      britishFlag.style.display = "none";
      germanFlag.style.display = "block";
      hungarianFlag.style.display = "block";
      break;
    default:
      content.textContent = language.hu.content;
      remark.textContent = language.hu.remark;
      technologyTitle.textContent = language.hu.technologyTitle;
      title.textContent = language.hu.title;

      // Hide the flag of the displayed language
      britishFlag.style.display = "inline";
      germanFlag.style.display = "inline";
      hungarianFlag.style.display = "none";
      break;
  }
}

dataReload.forEach((anchor) => {
  anchor.onclick = (event) => {
    window.location.hash = event.target.hash;
    window.location.reload();
  };
});
