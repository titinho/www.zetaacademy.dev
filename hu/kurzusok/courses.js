import API from "./services/API.js";

window.addEventListener("DOMContentLoaded", async () => {
  const url = new URL(window.location.href);

  const body = document.querySelector("body");

  const pathParts = url.pathname.split("/");
  const courseSlug = pathParts[2];

  if (pathParts.length === 1) {
    const courses = await API.fetchCourses();

    // Title
    const title = document.createElement("h1");
    title.textContent = "Hello Courses!";
    body.appendChild(title);

    // Courses container
    const coursesContainer = document.createElement("div");
    coursesContainer.classList.add("courses");
    body.appendChild(coursesContainer);

    // Courses
    courses.forEach((course) => {
      // Course container
      const courseContainer = document.createElement("div");
      courseContainer.classList.add("course");
      coursesContainer.appendChild(courseContainer);

      // Course header
      const courseHeader = document.createElement("div");
      courseHeader.classList.add("course-header");
      courseContainer.appendChild(courseHeader);

      // Course header technology
      const courseHeaderTechnology = document.createElement("div");
      courseHeaderTechnology.classList.add("course-header-technology");
      courseHeader.appendChild(courseHeaderTechnology);

      // Course image
      const courseImage = document.createElement("img");
      courseImage.setAttribute("src", `assets/images/${course.iconSlug}.svg`);
      courseHeaderTechnology.appendChild(courseImage);

      // Course technology
      const courseTechnology = document.createElement("span");
      courseTechnology.textContent = course.technology;
      courseHeaderTechnology.appendChild(courseTechnology);

      // Course header rating
      const courseHeaderRating = document.createElement("div");
      courseHeaderRating.classList.add("course-header-rating");
      courseHeader.appendChild(courseHeaderRating);

      // Rating star icon
      const ratingImage = document.createElement("img");
      ratingImage.setAttribute("src", "assets/images/star.png");
      courseHeaderRating.appendChild(ratingImage);

      // Course rating
      const courseRating = document.createElement("span");
      courseRating.textContent = course.rating;
      courseHeaderRating.appendChild(courseRating);

      // Course body
      const courseBody = document.createElement("div");
      courseBody.classList.add("course-body");
      courseContainer.appendChild(courseBody);

      // Course title
      const courseTitle = document.createElement("h3");
      courseTitle.textContent = course.title;
      courseBody.appendChild(courseTitle);

      // Course description
      const courseDescription = document.createElement("p");
      courseDescription.textContent = course.description;
      courseBody.appendChild(courseDescription);

      // Course footer
      const courseFooter = document.createElement("div");
      courseFooter.classList.add("course-footer");
      courseContainer.appendChild(courseFooter);

      // Number of students
      const students = document.createElement("p");
      students.textContent = `${course.students} hallgató`;
      courseFooter.appendChild(students);
    });
  } else {
    console.log(url.host);
    // Title
    const title = document.createElement("h1");
    title.textContent = `Hello ${url.searchParams.get("title")}!`;
    body.appendChild(title);
  }
});
