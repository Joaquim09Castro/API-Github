let htmlElements = {
  inputField: document.getElementById("username-input"),
  searchBtn: document.getElementById("submit-input"),
  userContainer: document.getElementById("user-container"),
  reposContainer: document.getElementById("repos-container")
};
let apiUrl = "https://api.github.com/users/";

htmlElements.searchBtn.onclick = () => {
  let username = htmlElements.inputField.value;

  if (username != "") {
    htmlElements.userContainer.innerHTML = "";
    htmlElements.reposContainer.innerHTML = "";
    htmlElements.inputField.value = "";

    GitUserController.getUser(apiUrl + username);
    GitReposController.getRepos(apiUrl + username + "/repos");

  } else {
    alert("Please enter a username");
    throw ("No username in the input field");
  }
};