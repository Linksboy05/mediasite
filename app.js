const services = [
  [
    "Graphic design & branding",
    "A clear identity that feels like you. We design the visual pieces that make your business recognizable, from the first impression to the smallest detail.",
    "Logos · Brand identity · Print design · Packaging · Marketing materials",
  ],
  [
    "Web design & development",
    "Good design meets thoughtful code. We create responsive websites and digital experiences around what your business and your visitors actually need.",
    "Business websites · Landing pages · UI/UX · Custom development",
  ],
  [
    "Photography",
    "Show your business in its best light with images shaped around your brand, your products and the people behind them.",
    "Product photography · Brand portraits · Business & lifestyle imagery",
  ],
  [
    "Videography & editing",
    "Bring your story to life through motion. From planning the shoot to the final edit, we create video with a clear purpose.",
    "Brand films · Promotional videos · Event coverage · Video editing",
  ],
  [
    "Social & digital content",
    "Keep your brand consistent wherever people discover it with content designed for each platform and moment.",
    "Social graphics · Short-form video · Campaign assets · Motion graphics",
  ],
];
document.querySelector(".service-list").innerHTML = services
  .map(
    (s, i) =>
      `<details ${i === 0 ? "open" : ""}><summary><small>0${i + 1}</small>${s[0]}<b aria-hidden="true">+</b></summary><p>${s[1]}</p><p class="deliverables">${s[2]}</p></details>`,
  )
  .join("");
const choices = [
  "Branding & design",
  "Website & coding",
  "Photography",
  "Video",
  "Social content",
  "Not sure yet",
];
document.querySelector(".choices").innerHTML = choices
  .map(
    (s) =>
      `<label><input type="checkbox" name="services" value="${s}"><span>${s}</span></label>`,
  )
  .join("");
const menu = document.querySelector(".menu"),
  nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "☰";
  }),
);
const packages = {
  "Brand launch": ["Branding & design", "Website & coding", "Social content"],
  "Photo and video": ["Photography", "Video", "Social content"],
  "Website project": ["Website & coding"],
};
document.querySelectorAll("[data-package]").forEach((a) =>
  a.addEventListener("click", () => {
    document
      .querySelectorAll('[name="services"]')
      .forEach(
        (c) => (c.checked = packages[a.dataset.package].includes(c.value)),
      );
  }),
);
document.querySelector("#year").textContent = new Date().getFullYear();
