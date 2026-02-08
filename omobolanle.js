
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".hamburger-menue");

  // Works whether you use <button> or <a> for the icons
  const openTrigger =
    document.querySelector(".hamburger-btn") ||
    document.querySelector(".hamburger > a"); // your bars link

  const closeTrigger =
    document.querySelector(".close-btn") ||
    document.querySelector(".hamburger-menue a:has(.fa-x)") || // your X link (Chrome/Safari)
    document.querySelector(".hamburger-menue .fa-x")?.closest("a"); // fallback if :has not supported

  function openMenu() {
    menu.classList.add("open");
    openTrigger?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // stops background scroll on mobile
  }

  function closeMenu() {
    menu.classList.remove("open");
    openTrigger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  }

  // Open on bars click
  openTrigger?.addEventListener("click", (e) => {
    e.preventDefault(); // prevents <a href=""> reload
    e.stopPropagation();
    toggleMenu();
  });

  // Close on X click
  closeTrigger?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (e) => {
    const clickedInside = menu.contains(e.target) || hamburger.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  // Close when a menu link is clicked
  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && !link.querySelector(".fa-x")) closeMenu();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

