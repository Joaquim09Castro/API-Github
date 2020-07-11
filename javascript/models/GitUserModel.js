class GitUserModel {
  constructor(hubUrl,avatar,user,name,followers,following) {
    this._hubUrl = hubUrl;
    this._avatar = avatar;
    this._user = user;
    this._name = name;
    this._followers = followers;
    this._following = following;
  }
  
  getUserJson() {
    return {
      hubUrl: this._hubUrl,
      avatar: this._avatar,
      user: this._user,
      name: this._name,
      followers: this._followers,
      following: this._following
    };
  }
}