(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".backdrop"),
    body: document.querySelector(".body"),
    menuList: document.querySelector(".menu-list"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuList.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");

  }
})();
