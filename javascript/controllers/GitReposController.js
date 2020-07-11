class GitReposController {
  constructor() {
    throw ("This class has no instance");
  }

  static getRepos(requestUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onload = () => {
      let responseJson = JSON.parse(xhr.responseText);

      for (let i = 0; i < responseJson.length; i++) {
        let reposInfo = new GitReposModel(
          responseJson[i].svn_url,
          responseJson[i].name,
          responseJson[i].description,
          responseJson[i].stargazers_count,
          responseJson[i].language
        );
        htmlElements.reposContainer.innerHTML += GitReposView.showRepos(reposInfo.getReposJson());
        console.log(reposInfo);
      }
    };
    xhr.send();
  }
}