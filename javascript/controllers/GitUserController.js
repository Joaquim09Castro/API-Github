
class GitUserController {
  constructor(username) {
    this._url = "https://api.github.com/users/";
    this._username = username;
  }

  getUserInfo() {
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET",`${this._url + this._username}/repos`,true);

    xhr.onload = () => {
      if (xhr.status == 200) {
        const teste  = JSON.parse(xhr.responseText);
        for (let i = 0; i < teste.length; i++) {
          console.log(teste[i].name);
        }
      } else {throw "Deu ruim";}
    };

    xhr.send();
  }
}

