(() => {
  const menuBtnRef = document.querySelector("[data-menu-product-cream]");
  const mobileMenuRef = document.querySelector("[data-menu-overlay-cream]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();