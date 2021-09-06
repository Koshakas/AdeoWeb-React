document.querySelector("#hamburger-button").addEventListener("click", e => {
  e.target.classList.toggle("open");
  // e.stopPropagation();
  console.log("click");
});
