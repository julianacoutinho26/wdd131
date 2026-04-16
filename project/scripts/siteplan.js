const patterns = [
  { name: "Chain Stitch", level: "beginner" },
  { name: "Single Crochet", level: "beginner" },
  { name: "Double Crochet", level: "beginner" },
  { name: "Granny Square", level: "intermediate" }
];

function showPatterns(level) {
  const list = document.getElementById("patternList");
  if (!list) return;
  list.innerHTML = patterns
    .filter(p => p.level === level)
    .map(p => `<li>${p.name}</li>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const levelSelect = document.getElementById("levelSelect");
  if (levelSelect) {
    const savedLevel = localStorage.getItem("lastLevel") || "beginner";
    levelSelect.value = savedLevel;
    showPatterns(savedLevel);

    levelSelect.addEventListener("change", (e) => {
      showPatterns(e.target.value);
      localStorage.setItem("lastLevel", e.target.value);
    });
  }

  const form = document.getElementById("subscribeForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      localStorage.setItem("subscriberName", name);
      localStorage.setItem("subscriberEmail", email);
      document.getElementById("confirmation").textContent =
        `Thank you, ${name}! You’ve subscribed with ${email}.`;
    });
  }
});


const tips = [
  "Crochet hooks come in different materials: metal, wood, and plastic.",
  "The chain stitch is the foundation of most crochet projects.",
  "Crochet is great for reducing stress and improving focus.",
   " Use stitch markers when working on larger projects."
];

document.addEventListener("DOMContentLoaded", () => {
  const tipButton = document.getElementById("tipButton");
  const tipOutput = document.getElementById("tipOutput");

  if (tipButton) {
    tipButton.addEventListener("click", () => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      tipOutput.textContent = randomTip;
    });
  }
});
