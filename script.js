const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const image_link = "https://cdn-icons-png.flaticon.com/512/1828/1828846.png";
const aboutme = document.querySelector(".f4");
const main_image = document.querySelector(".main_image");
const back_button = document.querySelector("back_button");
const next_button = document.querySelector("next_button");

document
  .querySelector(".small_pic")
  .addEventListener("click", function (event) {
    modal.classList.remove("hidden");
    modal2.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
});

aboutme.addEventListener("click", function () {
  modal.classList.remove("hidden");
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

var value2, item, links, http;
var img_links = ["./images/first.png", "./images/secound.png"];

function getNumberOrString(value2) {
  // Convert a string value to a number if possible
  let number_value = Number(value2);
  if (Number.isNaN(number_value)) {
    return value2;
  } else {
    return number_value;
  }
}

value2 = getNumberOrString(document.getElementById("button_image").value);
let element_button_image = document.getElementById("button_image");
element_button_image.setAttribute("src", image_link);
links = ["Google", "CYF", "Git hub"];
http = [
  "https://www.google.com/",
  "https://codeyourfuture.io/",
  "https://github.com/",
];

document.getElementById("button_image").addEventListener("click", (event) => {
  if (value2 == "off") {
    links.forEach((item) => {
      let element_listoflinks = document.getElementById("listoflinks");
      let new_li = document.createElement("li");
      let new_a = document.createElement("a");
      new_a.innerText = item;
      new_a.setAttribute("href", http.shift());

      new_li.appendChild(new_a);

      element_listoflinks.appendChild(new_li);
    });
    value2 = "on";
    let element_button_image2 = document.getElementById("button_image");
    element_button_image2.setAttribute("src", image_link);
  } else {
    let element_listoflinks2 = document.getElementById("listoflinks");
    element_listoflinks2.innerText = "";
    value2 = "off";
    let element_button_image3 = document.getElementById("button_image");
    element_button_image3.setAttribute("src", image_link);
  }
});

//Get the comment information from the user and post it to the lis
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

document.getElementById("send").addEventListener("click", (event) => {
  let element_lname = document.getElementById("lname");
  let new_li = document.createElement("li");
  new_li.innerText = getNumberOrString(document.getElementById("c_name").value);
  new_li.setAttribute("class", "comment_name");

  element_lname.appendChild(new_li);
  let new_div = document.createElement("div");
  new_div.innerText = getNumberOrString(
    document.getElementById("c_comment").value
  );
  new_div.setAttribute("class", "c_span");

  element_lname.appendChild(new_div);

  if (typeof Storage !== "undefined") {
    localStorage.local_name = document.getElementById("c_name").value;
    localStorage.local_comment = document.getElementById("c_comment").value;
  } else {
    alert("Sorry! No Web Storage support..");
  }
});

document.getElementById("next").addEventListener("click", (event) => {
  img_links.push(img_links.shift());
  let element_main_image = document.getElementById("text_image");
  element_main_image.setAttribute("src", img_links[0]);
  document.getElementById("back").classList.remove("hidden");
  document.getElementById("next").classList.add("hidden");
});

document.getElementById("back").addEventListener("click", (event) => {
  img_links.unshift(img_links.pop());
  let element_main_image = document.getElementById("text_image");
  element_main_image.setAttribute("src", img_links[0]);
  document.getElementById("back").classList.add("hidden");
  document.getElementById("next").classList.remove("hidden");
});
