(() => {
  const desktopMq = window.matchMedia("(hover: hover) and (pointer: fine)");

  let dialog = null;
  let dialogImg = null;

  function isDesktop() {
    return desktopMq.matches;
  }

  function ensureDialog() {
    if (dialog) return;

    dialog = document.createElement("dialog");
    dialog.className = "img-lightbox";
    dialog.setAttribute("aria-label", "Expanded image");
    dialog.innerHTML =
      '<button type="button" class="img-lightbox__close" aria-label="Close">&times;</button>' +
      '<img class="img-lightbox__img" alt="" />';

    dialogImg = dialog.querySelector(".img-lightbox__img");
    dialog.querySelector(".img-lightbox__close").addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    document.body.appendChild(dialog);
  }

  function openLightbox(img) {
    ensureDialog();
    dialogImg.src = img.currentSrc || img.src;
    dialogImg.alt = img.alt || "";
    dialog.showModal();
  }

  document.addEventListener("click", (event) => {
    if (!isDesktop()) return;
    const img = event.target.closest(".article-body img");
    if (!img) return;
    event.preventDefault();
    openLightbox(img);
  });
})();
