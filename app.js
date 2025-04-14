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
body {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://i.postimg.cc/1R20Py9h/507.jpg") no-repeat center;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rowdies", cursive;
}
.container {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  width: 600px;
}
.accordion button {
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
.accordion button:hover {
  background-color: #eee;
}
.accordion .accordion-content {
  background-color: #27ae60;
  color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 15px;
}
.accordion .accordion-content p {
  margin: 15px 0;
}
.accordion button[aria-expanded="true"] + .accordion-content {
  max-height: 200px;
  padding: 15px;
}
`;
document.head.appendChild(style);

// Create HTML structure
const container = document.createElement("div");
container.className = "container";
container.innerHTML = `
  <h2>Frequently Asked Questions</h2>
  <div class="accordion">
    ${[
      "Why is the moon sometimes out during the day?",
      "Why is the sky blue?",
      "Will we ever discover aliens?",
      "How much does the Earth weigh?",
      "How do airplanes stay up?",
    ]
      .map(
        (question, i) => `
      <div class="accordion-item">
        <button id="accordion-button-${i + 1}" aria-expanded="false">
          <span class="accordion-title">${question}</span>
          <span class="icon" aria-hidden="true">+</span>
        </button>
        <div class="accordion-content">
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
const items = container.querySelectorAll(".accordion button");

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
