import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello everybody';

  constructor() {
    this.title = 'Hello lads!!';
  }

}
