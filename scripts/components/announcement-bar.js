class AnnouncementBar {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.init();
  }

  init() {
    if (!this.element) return;

    const closeButton = this.element.querySelector("button");
    if (closeButton) closeButton.addEventListener("click", () => this.close());

    if (localStorage.getItem("isAnnouncementBarClosed") === true) {
      this.hide();
    }
  }

  close() {
    this.hide();
    localStorage.setItem("isAnnouncementBarClose", true);
  }

  hide() {
    this.element.style.display = "none";
  }
}

export default AnnouncementBar;
