//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const cookies = new TNAFrontend.Cookies()
  const theme = cookies.get("theme") || "light"
  const $tnaTemplate = document.querySelector(".tna-template");
  if (theme === "light") {
    $tnaTemplate.classList.remove(
      "tna-template--system-theme",
      "tna-template--dark-theme",
    );
  } else if (theme === "dark") {
    $tnaTemplate.classList.remove("tna-template--system-theme");
    $tnaTemplate.classList.add(`tna-template--dark-theme`);
  } else if (theme === "system") {
    $tnaTemplate.classList.remove("tna-template--dark-theme");
    $tnaTemplate.classList.add(`tna-template--system-theme`);
  }
})
