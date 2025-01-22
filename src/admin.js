import "./style.css";
let BASE_URL = "https://restcountries.com/v3.1/all";
let search = document.querySelector(".search");
let searchInput = document.querySelector(".searchInput");
let searchResults = document.querySelector(".searchResults");
let area = JSON.parse(localStorage.getItem("area")) || [];
console.log(area);
let name = document.querySelector(".name");
let desciption = document.querySelector(".desciption");
let flag = document.querySelector(".flag");
fetch(BASE_URL)
  .then((data) => data.json())
  .then((data) => {
    searchData(data);
    data.forEach((value) => {
      if (value.area == area) {
        name.innerHTML = value.name.common;

        desciption.innerHTML = value.flags.alt;
        flag.src = value.flags.svg;
        console.log(value);
      }
    });
  });

///// search the data and put the html
function searchData(data) {
  search.addEventListener("keyup", (e) => {
    let currentValue = e.target.value.trim().toLowerCase();
    searchResults.innerHTML = "";
    data.forEach((value) => {
      if (value.name.common.includes(currentValue)||value.name.official.includes(currentValue)) {
        if (searchInput.value !== "" && searchInput.value !== " ") {
          searchResults.style.display = "flex";

          let flagResulst = document.createElement("div");
          flagResulst.innerHTML = `
 <div class="flex items-center cursor-pointer gap-2 p-2 id="${value.area}" ">
 <img class="h-10 w-10  cursor-pointer" src="${value.flags.svg}" alt=""/>
 <p class="text-[18px] cursor-pointer">Flag of ${value.name.common}</p>
 </div>
 `;
          searchResults.append(flagResulst);
          flagResulst.addEventListener("click", (e) => {
            localStorage.setItem("area", JSON.stringify(value.area));
            window.location.href = "http://localhost:9000/admin.html";
          });
        } else {
          searchResults.style.display = "none";
        }
      }
    });
  });
}
