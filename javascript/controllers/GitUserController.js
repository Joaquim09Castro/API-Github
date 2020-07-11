class GitUserController {
  constructor() {
    throw ("This class has no instance");
  }

  static getUser(requestUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onload = () => {
      let responseJson = JSON.parse(xhr.responseText);

      let userInfo = new GitUserModel(
        responseJson.html_url,
        responseJson.avatar_url,
        responseJson.login,
        responseJson.name,
        responseJson.followers,
        responseJson.following
      );
      htmlElements.userContainer.innerHTML = GitUserView.showUser(userInfo.getUserJson());
    };
    xhr.send();
  }
}