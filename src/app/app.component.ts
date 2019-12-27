import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  klass = ['color', 'bg', 'border'];

  change() {
    this.klass = ['color'];
  }

  changeTwo() {
    this.klass = ['color', 'border'];
  }

}
