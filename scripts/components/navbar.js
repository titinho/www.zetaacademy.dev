class NavBar {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.isOpen = false;
    this.init();
  }

  init() {
    if (!this.element) return;

    this.barsButton = this.element.querySelector('img[alt="Bars Icon"]');
    this.xmarkButton = this.element.querySelector('img[alt="XMark Icon"]');
    this.navContent = this.element.querySelector(".navbar-vertical-content");

    if (!this.barsButton || !this.xmarkButton || !this.navContent) return;

    // Bind events
    this.barsButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.open();
    });

    this.xmarkButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.close();
    });

    // Close the navbar when the escape key is pressed
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    this.barsButton.style.cursor = "pointer";
    this.barsButton.setAttribute("role", "button");
    this.barsButton.setAttribute("aria-label", "Menü megnyitása");
    this.barsButton.setAttribute("tabindex", "0");
  }

  open() {
    this.isOpen = true;
    this.navContent.style.display = "flex";
    this.barsButton.setAttribute("aria-label", "Menü bezárása");
    this.barsButton.setAttribute("aria-expanded", "true");
  }

  close() {
    this.isOpen;
    this.navContent.style.display = "none";
    this.barsButton.setAttribute("aria-label", "Menü megnyitása");
    this.barsButton.setAttribute("aria-expanded", "false");
  }
}

export default NavBar;
