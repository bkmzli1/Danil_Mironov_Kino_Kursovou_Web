import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';


class Img {
  img: string;
}

class Armchair {
  name: number;
  armchair: boolean;
  aaa = false;
  key = '';
}

class Halls {
  name: number;
  hall: Armchair[];
}

class Film {
  date: string;
  dateStart: string;
  dateStop: string;
  description: string;
  id: string;
  img: Img[];
  halls: Halls[];
  lable: string;
  name: string;
}


@Component({
  selector: 'app-film-serch',
  templateUrl: './film-serch.component.html',
  styleUrls: ['./film-serch.component.css']
})
export class FilmSerchComponent implements OnInit {
  key: string;
  id: string;

  films: Film[];

  constructor(private activatedRoute: ActivatedRoute, public app: AppService, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
  }


  serch() {
    this.http.get(this.app.serverURL + 'film/filmSearch/' + this.key).subscribe((next: Film[]) => {
      console.log(next);
      this.films = next;
    });
  }
}
