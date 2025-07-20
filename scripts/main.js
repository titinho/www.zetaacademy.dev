import AnnouncementBar from "./components/announcement-bar.js";

window.addEventListener("DOMContentLoaded", async () => {
  localStorage.setItem("language", "hu");

  new AnnouncementBar(".announcement-bar");
});
