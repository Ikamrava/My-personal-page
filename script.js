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



var dns, link, item;
dns = ['Code your future', 'Google', 'Git hub'];
link = ['https://codeyourfuture.io/', 'https://www.google.com/', 'https://github.com/'];
dns.forEach((item) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.innerText = item;
  new_a.setAttribute("href", link.shift());

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

document.getElementById('insert').addEventListener('click', (event) => {
  let element_list = document.getElementById('list2');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('input').value);

  element_list.appendChild(new_li);

});
