"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubApiService_1 = require("./GitHubApiService");
const _ = __importStar(require("lodash"));
let svc = new GitHubApiService_1.GitHubApiService();
if (process.argv.length < 3) {
    console.log('Please pass the user name as an argument.');
}
else {
    let userName = process.argv[2];
    console.log(userName);
    svc.getUserInfo(userName, (user) => {
        svc.getRepos(userName, (repos) => {
            let sortedrepos = _.sortBy(repos, [(repo) => repo.size * -1]);
            let filteredRepos = _.take(sortedrepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
