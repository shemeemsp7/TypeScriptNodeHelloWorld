import {GitHubApiService} from './GitHubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';


let svc = new GitHubApiService();
if(process.argv.length<3){
    console.log('Please pass the user name as an argument.');
}else{
    let userName=process.argv[2]
    console.log(userName)
    svc.getUserInfo(userName, (user:User) => {
        svc.getRepos(userName, (repos:Repo[]) => {
            let sortedrepos=_.sortBy(repos,[(repo:Repo)=>repo.size * -1])
            let filteredRepos=_.take(sortedrepos,5);
            user.repos=filteredRepos;
            console.log(user);
        });
    });
}


