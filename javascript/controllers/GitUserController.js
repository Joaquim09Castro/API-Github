let url = "https://api.github.com/users/";
let user = "Joaquim09Castro";
let reqObj;

let xhr = new XMLHttpRequest();
xhr.open("GET", `${url + user}/repos`);

if (xhr.status == 200) {
  reqObj = JSON.parse(xhr.responseText);
}

xhr.send();