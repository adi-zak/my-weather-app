function clickSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML =
    searchInput.value.charAt(0).toUpperCase() +
    searchInput.value.slice(1).toLowerCase();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", clickSearch);
