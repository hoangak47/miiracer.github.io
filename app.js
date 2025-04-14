// accordion-full.js

// Inject CSS
const style = document.createElement("style");
style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.custom-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  width: 600px;
}
.custom-accordion-button {
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}
.custom-accordion-button:hover {
  background-color: #eee;
}
.custom-accordion-content {
  background-color: #27ae60;
  color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 15px;
}
.custom-accordion-content p {
  margin: 15px 0;
}
.custom-accordion-button[aria-expanded="true"] + .custom-accordion-content {
  max-height: 200px;
  padding: 15px;
}
`;
document.head.appendChild(style);

// Create HTML structure
const container = document.createElement("div");
container.className = "custom-container";
container.innerHTML = `
  <h2>Frequently Asked Questions</h2>
  <div class="custom-accordion">
    ${[
      "Why is the moon sometimes out during the day?",
      "Why is the sky blue?",
      "Will we ever discover aliens?",
      "How much does the Earth weigh?",
      "How do airplanes stay up?",
    ]
      .map(
        (question, i) => `
      <div class="custom-accordion-item">
        <button id="accordion-button-${
          i + 1
        }" class="custom-accordion-button" aria-expanded="false">
          <span class="custom-accordion-title">${question}</span>
          <span class="custom-icon" aria-hidden="true">+</span>
        </button>
        <div class="custom-accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
`;

// Chèn vào phần tử có id 'toc-content'
const tocContent = document.getElementById("toc-content");
if (tocContent) {
  tocContent.appendChild(container);
}

// Add JS behavior
const items = container.querySelectorAll(".custom-accordion-button");

function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  // Close all
  items.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
  });

  // Open this one
  if (!isExpanded) {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
