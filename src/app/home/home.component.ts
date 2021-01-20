import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

class Img {
  img: string;
}

class Film {
  date: string;
  dateStart: string;
  dateStop: string;
  description: string;
  id: string;
  img: Img[];
  lable: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img = 'https://bipbap.ru/wp-content/uploads/2018/07/haircut-afghan-hound.jpg';
  film: Film[];
  itemI = 0;

  constructor(public app: AppService, private http: HttpClient, private router: Router, private cookieService: CookieService) {
    http.get(app.serverURL + 'film').subscribe((next: Film[]) => {
      this.film = next;
    });
  }

  ngOnInit(): void {
  }

  index() {
    return this.itemI++;
  }

  view(s: string) {
    this.router.navigateByUrl('/film/' + s);
  }
}
