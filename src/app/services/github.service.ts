import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	
	private username:string;
	private client_id = "Your client id";
	private client_secret = "Your client secret";
	//because after certain limit this app will not work without client_id and client_secret
	//go to this link for more info....https://github.com/settings/applications/new
	constructor(private _http:Http){
	console.log('Git hub Service ready....');
	this.username = "Tenzin10";
	}

	getUser(){
	return this._http.get('http://api.github.com/users/'+this.username).map(res=>res.json());
	}
	getRepos(){
	return this._http.get('http://api.github.com/users/'+this.username+'/repos').map(res=>res.json());
	}

	updateUser(username:string){
	return this.username = username;
	}
}