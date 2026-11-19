const experiences = [
  {
    title: "Pine Ridge Summit",
    category: "hiking",
    location: "Sample trail · Local area",
    description: "A steady climb to wide-open views, with time to enjoy the way up.",
    duration: "Half day",
    level: "Moderate",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Granite Wall Climb",
    category: "climbing",
    location: "Sample crag · Local area",
    description: "Get to know the basics on a guided day at a friendly rock face.",
    duration: "Full day",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hidden Valley Walk",
    category: "exploring",
    location: "Sample valley · Local area",
    description: "Take the slower path through quiet scenery and tucked-away places.",
    duration: "3 hours",
    level: "Easy",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
  },
];

const experienceGrid = document.querySelector("#experience-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const inquiryForm = document.querySelector("#inquiry-form");
const formStatus = document.querySelector("#form-status");

function renderExperiences(category = "all") {
  const visibleExperiences = experiences.filter(
    (experience) => category === "all" || experience.category === category,
  );

  experienceGrid.innerHTML = visibleExperiences
    .map(
      (experience) => `
        <article class="experience-card">
          <div class="card-image" style="background-image: url('${experience.image}')">
            <span class="card-tag">${experience.category}</span>
          </div>
          <div class="card-body">
            <p class="card-location">${experience.location}</p>
            <h3>${experience.title}</h3>
            <p class="card-description">${experience.description}</p>
            <div class="card-meta">
              <span>${experience.duration} · ${experience.level}</span>
              <a class="card-link" href="#plan" aria-label="Ask about ${experience.title}">Ask about it ↗</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    renderExperiences(button.dataset.filter);
  });
});

inquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent =
    "Thanks for trying the form. It is not connected yet, so your inquiry has not been sent.";
});

renderExperiences();
