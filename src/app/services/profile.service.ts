import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// Map operator
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public username: string;
  public cliendID = 'dd289775900173d3a3da';
  public clientSecret = 'de4a7d3227b1972f90ded6a7961dcf83461c0c35';

  constructor(private http: Http) {
    this.username = 'paranaac';
  }

  getDeveloper(username: string) {
    this.username = username;
  }

  getProfileData() {
    return this.http.get("https://api.github.com/users/" + this.username + "").pipe(map(res => res.json()));
  }

  getRepositories() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos").pipe(map(res => res.json()));
  }

  getStars() {
    return this.http.get("https://api.github.com/users/" + this.username + "/starred").pipe(map(res => res.json()));
  }
}
