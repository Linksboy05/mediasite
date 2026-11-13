const config = window.AB_MEDIA_CONFIG || {};
const form = document.querySelector("#brief");
const formStatus = document.querySelector("#form-status");
const email = (config.businessEmail || "").trim();
const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
if (emailReady) {
  form.action = "https://formsubmit.co/" + encodeURIComponent(email);
  formStatus.textContent =
    "Your inquiry will be processed by FormSubmit and emailed to A&B Media.";
}
form.addEventListener("submit", (event) => {
  if (!emailReady) {
    event.preventDefault();
    formStatus.textContent =
      "Our inquiry form is coming soon. Nothing has been sent; your details remain here.";
    return;
  }
  // Allow native POST submission. FormSubmit handles delivery and confirmation.
  // Do not show a success message until the service confirms submission.
});
const socialLinks = document.querySelector("#social-links");
let pendingProfiles = false;
(config.socials || []).forEach((profile) => {
  let valid = false;
  try {
    valid = new URL(profile.url).protocol === "https:";
  } catch {}
  const item = document.createElement(valid ? "a" : "button");
  item.className = "social-button";
  if (valid) {
    item.href = profile.url;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.textContent = profile.label + " ↗";
    item.setAttribute("aria-label", profile.label + " (opens in a new tab)");
  } else {
    pendingProfiles = true;
    item.type = "button";
    item.disabled = true;
    item.textContent = profile.label + " · Coming soon";
  }
  socialLinks.appendChild(item);
});
document.querySelector("#social-status").textContent = pendingProfiles
  ? "Our social profiles are coming soon."
  : "Follow along for our latest work.";
