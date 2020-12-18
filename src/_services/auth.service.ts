import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class AuthService {
token : string;
scopes = ["user-read-currently-playing", "user-read-recently-played",
"user-read-playback-state", "user-top-read", "user-modify-playback-state"];
redirect_uri = 'http://localhost:4200';
spotifyUrl = 'https://accounts.spotify.com/authorize?&client_id=' +
environment.spotify_client +
'&scope=' + encodeURIComponent(this.scopes.join("%20")) +
'&redirect_uri=' + encodeURIComponent(this.redirect_uri) +
'&response_type=token&show_dialog=true';

loggedInUser: {};

constructor(private http: HttpClient) { }

GetTokenFromUrl() {
  return window.location.hash
          .substring(1)
          .split("&")
          .reduce((a,b) => {
            var parts = b.split("=");
            a[parts[0]] = decodeURIComponent(parts[1]);
            return a;
          }, {});
}

GetTokenFromStorage()
{
  this.token = sessionStorage.getItem("token");
  console.log(this.token);
}

GetUserDetails(){
  this.GetTokenFromStorage();
  const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' , 'Authorization' : 'bearer ' + this.token});
  this.http.get('https://api.spotify.com/v1/me', { headers: reqHeader })
  .subscribe(
    (response) => {
      // this.loggedInUser = response;
      console.log(response);
    },
    (error) => {
      console.log(error);

    }
  );
}

}
