class GitReposModel {
  constructor(repoUrl,repoName,repoDesc,starCount,language) {
    this._repoUrl = repoUrl;
    this._repoName = repoName;
    this._repoDesc = repoDesc;
    this._starCount = starCount;
    this._language = language;
  }
  
  getReposJson() {
    return {
      repoUrl: this._repoUrl,
      repoName: this._repoName,
      repoDesc: this._repoDesc,
      starCount: this._starCount,
      language: this._language
    };
  }
}