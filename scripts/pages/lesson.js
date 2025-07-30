import AnnouncementBar from "../components/announcement-bar.js";
import NavBar from "../components/navbar.js";

window.addEventListener("DOMContentLoaded", async () => {
  localStorage.setItem("language", "hu");

  new AnnouncementBar(".announcement-bar");
  new NavBar(".navbar-vertical");
});
