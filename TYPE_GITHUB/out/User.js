"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}
exports.User = User;
