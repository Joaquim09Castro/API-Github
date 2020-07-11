class GitReposView {
  constructor() {
    throw ("This class has no instance");
  }

  static showRepos(repoJson) {
    return `
      <div class="repo-element">
        <a href="${repoJson.repoUrl}"><img class="repo-icon" src="./img/repo-icon.png" alt="Repository icon"></a>
        <h2 class="view-label">${repoJson.repoName}</h2>
        <p class="view-label">Description:</p>
        <p>${repoJson.repoDesc}</p>
        <p class="view-label">Ivansômetro:</p>
        <p>${repoJson.starCount}</p>
        <p class="view-label">Linguagem mais utilizada:</p>
        <p>${repoJson.language}</p>
      </div>
    `;
  }
}