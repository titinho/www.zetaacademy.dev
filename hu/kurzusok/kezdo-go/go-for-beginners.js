import API from "../../services/API.js";
import HeaderNav from "../../components/header/header.js";
import Store from "../../services/Store.js";

window.app = {};
app.store = Store;

customElements.define("header-nav", HeaderNav);

window.addEventListener("DOMContentLoaded", async () => {
  const course = await API.fetchCourse();

  const title = document.querySelector("h1");
  title.textContent = course.title[app.store.language];

  const lessons = document.querySelector(".lessons");

  course.lessons.forEach((lesson) => {
    const container = document.createElement("div");
    container.classList.add("lesson");
    lessons.appendChild(container);

    const lessonTitle = document.createElement("h3");
    lessonTitle.textContent = lesson.title[app.store.language];
    lessonTitle.classList.add("lesson__title");
    container.appendChild(lessonTitle);

    const lessonDescription = document.createElement("p");
    lessonDescription.textContent = lesson.description[app.store.language];
    lessonDescription.classList.add("lesson__description");
    container.appendChild(lessonDescription);

    lessons.appendChild(container);
  });
});
