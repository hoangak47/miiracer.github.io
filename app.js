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
  padding: 30px 0;
  border-radius: 10px;
  width: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}

.custom-accordion-button:hover {
  background-color: #eee;
}

.custom-accordion-content {
  color: #000;
  overflow: hidden;
  padding: 0 15px;
  height: 0;
  opacity: 0;
  transition: height 0.5s ease, padding 0.5s ease, opacity 0.5s ease;
}

.custom-accordion-content p {
  margin: 15px 0;
}

.custom-accordion-button[aria-expanded="true"] + .custom-accordion-content {
  height: auto;
  opacity: 1;
  padding: 15px;
}
`;
document.head.appendChild(style);

// Create HTML structure with random content
const container = document.createElement("div");
container.className = "custom-container";
container.innerHTML = `
  <h2>Frequently Asked Questions</h2>
  <div class="custom-accordion">
    ${createAccordionItem("Why is the moon sometimes out during the day?")}
    ${createAccordionItem("Why is the sky blue?")}
    ${createAccordionItem("Will we ever discover aliens?")}
    ${createAccordionItem("How much does the Earth weigh?")}
    ${createAccordionItem("How do airplanes stay up?")}
  </div>
`;

// Chèn vào phần tử có id 'toc-content'
const tocContent = document.getElementById("toc-content");
if (tocContent) {
  tocContent.appendChild(container);
}

// Function to generate random text (short and long)
function generateRandomText() {
  const shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti. Praesent tempor mauris id turpis pretium, eget laoreet odio sollicitudin. Fusce in mi nec purus cursus gravida a eget justo. Curabitur scelerisque, velit ac mollis condimentum, justo velit facilisis leo.";

  return Math.random() > 0.5 ? shortText : longText;
}

// Function to create each accordion item with random text
function createAccordionItem(question) {
  const randomText = generateRandomText();

  return `
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">${question}</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p>${randomText}</p>
      </div>
    </div>
  `;
}

// Add JS behavior to toggle accordion
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
