import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-crate-film',
  templateUrl: './crate-film.component.html',
  styleUrls: ['./crate-film.component.css']
})
export class CrateFilmComponent implements OnInit {
  name: any;
  lable: any;
  description: any;
  data: any;
  timeStart: any;
  timeStop: any;
  fileToUpload: FormData;
  error: boolean;
  ListImg: string[];
  j: number;

  constructor(public app: AppService, private http: HttpClient, private router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  handleFileInputTile(fileList: FileList) {
    console.log(fileList);
    const uploadData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      uploadData.append('mfImg', fileList[i], fileList.item(i).name);
      this.j = i;
    }

    this.fileToUpload = uploadData;
  }

  create() {
    if (
      this.name == null ||
      this.lable == null ||
      this.description == null ||
      this.data == null ||
      this.timeStart == null ||
      this.timeStop == null ||
      this.fileToUpload == null ||
      this.j < 0
    ) {
      this.error = true;
    } else {

      this.error = false;
    }
    if (!this.error) {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'multipart/form-data');
      headers.set('Accept', 'application/json');

      this.http.post(this.app.serverURL + 'img/', this.fileToUpload, {headers}).subscribe(
        (next: string[]) => {
          this.ListImg = next;
          this.http.post(this.app.serverURL + 'film/syt/cratefilm', {
            name: this.name,
            lable: this.lable,
            description: this.description,
            data: this.data,
            timeStart: this.timeStart,
            timeStop: this.timeStop,
            listImg: this.ListImg
          }).subscribe(next2 => {
            console.log(next2);
          });
        }
      );


    }
  }
}
