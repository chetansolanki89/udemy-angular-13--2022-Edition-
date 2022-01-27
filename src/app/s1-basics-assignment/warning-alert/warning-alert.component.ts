import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  template: `<p>This is a Warning Alert</p> `,
  // styleUrls: ['./warning-alert.component.css']
  styles: [
    `
      p {
        color: red;
        background-color: yellow;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
