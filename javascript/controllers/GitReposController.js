class GitReposController {
  constructor() {
    throw ("This class has no instance");
  }

  static getRepos(requestUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onload = () => {
      
      if (xhr.status == 200) {
        
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
        }
      } else {
        switch (xhr.status) {
          case 301,302,307:
            alert("Request Adress has been changed");
            throw ("301 - Request Adress Changed");
          case 400:
            alert("The request is unable to be concluded");
            throw ("400 - Invalid Syntax");
          case 401:
            alert("The request is unable to be concluded");
            throw ("401 - Unauthenticated Client");
          case 403:
            alert("The request is unable to be concluded");
            throw ("403 - Forbiden Access");
          case 404:
            alert("The request is unable to be concluded");
            throw ("404 - Not Found");
        }
      }
    };
    xhr.send();
  }
}