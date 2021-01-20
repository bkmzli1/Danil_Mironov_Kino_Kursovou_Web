import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-had',
  templateUrl: './had.component.html',
  styleUrls: ['./had.component.css']
})
export class HadComponent implements OnInit {

  constructor(public app: AppService) {
  }

  ngOnInit(): void {
  }

}
