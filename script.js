const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
document
  .querySelector(".small_pic")
  .addEventListener("click", function (event) {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });
overlay.addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
