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
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id: string;
  film: Film;
  key: string;


  constructor(private activatedRoute: ActivatedRoute, public app: AppService, private http: HttpClient, private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(params.id);
      http.get(app.serverURL + 'film/' + params.id).subscribe((next: Film) => {
        console.log(next);
        this.film = next;
      });
      console.log(this.id);
    });
  }

  ngOnInit(): void {
  }


  hals(aaa: boolean) {
    aaa = !aaa;
    return aaa;
  }

  bron() {
    for (let i = 0; i < this.film.halls.length; i++) {
      for (let j = 0; j < this.film.halls[i].hall.length; j++) {
        if (this.film.halls[i].hall[j].aaa === true) {
          this.film.halls[i].hall[j].armchair = this.film.halls[i].hall[j].aaa;
          this.film.halls[i].hall[j].key = this.key;
          console.log(this.key);
          console.log( this.film.halls[i].hall[j].key);
        }
      }
    }
    console.log(this.film);
    this.http.post(this.app.serverURL + 'film/bron', this.film).subscribe((next: Film) => {
      console.log(next);
      this.film = next;
    });
  }
}
