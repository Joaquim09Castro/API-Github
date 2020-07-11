class GitUserView {
  constructor() {
    throw ("This class has no instance");
  }

  static showUser(userJson) {
    return `
      <a href="${userJson.hubUrl}"><img id="avatar" src="${userJson.avatar}" alt="Profile picture"></a>
      
      <div id="user">
        <p><b class="view-label">Username</b>: ${userJson.user}</p>
        <p><b class="view-label">Name</b>: ${userJson.name}</p>
        <p><b class="view-label">Followers</b>: ${userJson.followers}</p>
        <p><b class="view-label">Following</b>: ${userJson.following}</p>
      </div>
    `;
  }
}