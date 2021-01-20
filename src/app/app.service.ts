import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


class Role {
  authority: string;
}

class Img {
  img = 'static/load.gif';
}

class User {
  id = ' ';
  username = ' ';
  password = ' ';
  email = ' ';
  firstName = ' ';
  lastName = ' ';
  middleName = ' ';
  telephone = ' ';
  img: Img = new Img();
  imgFon: Img = new Img();
  authorities: Role[];
  confirmPassword = ' ';


}

@Injectable()
export class AppService {

  serverURL = '//localhost/api/';
  rootIs = false;
  authenticated = false;
  user: User;
  message = '';
  nameSyt: string;


  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
    console.log('AppService');
    this.http.get(this.serverURL + 'film/syt').subscribe(
      (next: string[]) => {
        console.log(1);
        console.log(next);
        this.nameSyt = next[0];
      }, error => {
        console.log(error);
      }
    );
    this.http.get(this.serverURL + 'user').subscribe((response: User) => {
      this.authenticated = response != null;
      let i;
      for (i in response.authorities) {
        console.log(response.authorities[i].authority);
        if ('ADMIN' === response.authorities[i].authority) {
          this.rootIs = true;
        }
      }
      console.log(this.authenticated);
      console.log(this.rootIs);
    });
  }


  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    this.http.get(this.serverURL + 'user', {headers}).subscribe((response: User) => {

      console.log(response);
      this.authenticated = response != null;
      let i;
      for (i in response.authorities) {
        console.log(response.authorities[i].authority);
        if ('ADMIN' === response.authorities[i].authority) {
          this.rootIs = true;
        }
      }
      console.log(this.authenticated);
      console.log(this.rootIs);
      console.log('if');
      console.log((callback !== undefined));
      if (this.authenticated && (callback !== undefined)) {
        console.log('router /');
        this.router.navigateByUrl('/');
      }
    });

  }

  admin() {
    let item;
    for (item in this.user.authorities) {
      console.log(this.user.authorities[item]);
    }
    return false;
  }
}


