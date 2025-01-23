import "./style.css";
let BASE_URL = "https://restcountries.com/v3.1/all";

let flags = document.querySelector(".flags");
let search = document.querySelector(".search");
let searchInput = document.querySelector(".searchInput");
let searchResults = document.querySelector(".searchResults");
let area = JSON.parse(localStorage.getItem("area")) || [];

fetch(BASE_URL)
  .then((data) => data.json())
  .then((data) => {
    getFlags(data);
    searchData(data);
  });

/////// Get flags and push the flags
function getFlags(data) {
  flags.innerHTML = "";
  data.forEach((value) => {
    let flag = document.createElement("div");
    flag.innerHTML = `
       <div class="h-full w-full rounded-xl flex items-center justify-center flex-col ">
        <img class=" rounded-xl h-32 w-full   object-left-top" src=${value.flags.png} />
        `;
    flags.append(flag);
  });
  //   div class="text-opacity-0"><p class="text-opacity-0">${value.name.common}</p></div>
  //          </div>
}
///// search the data and put the html
function searchData(data) {
  search.addEventListener("keyup", (e) => {
    let currentValue = e.target.value.trim().toLowerCase();
    // console.log(currentValue);

    searchResults.innerHTML = "";
    data.forEach((value) => {
      if (value.name.common.includes(currentValue)) {
        if (searchInput.value !== "" && searchInput.value !== " ") {
          searchResults.style.display = "flex";

          let flagResulst = document.createElement("div");
          flagResulst.innerHTML = `
                <div class="flex items-center cursor-pointer gap-2 p-2 id="${value.area}" ">
                <img class=" h-12 w-16 rounded-md" src="${value.flags.svg}" />
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
        //     let flag = document.createElement("div");
        //     flag.innerHTML = `
        //    <div class="h-full w-full rounded-xl flex items-center justify-center ">
        //     <img class=" rounded-xl h-32 w-full   object-left-top" src=${value.flags.png} /> </div>`;
        //     flags.append(flag);
      }
    });
  });
}

export { searchData };
