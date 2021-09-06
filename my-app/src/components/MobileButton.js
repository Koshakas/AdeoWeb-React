function mobile() {
  document.querySelector("#hamburger-button").addEventListener("click", e => {
    e.stopPropagation();
    e.target.classList.toggle("open");
    console.log(e.target);
  });
}

export default mobile;
