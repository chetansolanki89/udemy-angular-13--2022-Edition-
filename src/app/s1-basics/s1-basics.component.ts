import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s1-basics',
  templateUrl: './s1-basics.component.html',
  // styleUrls: ['./s1-basics.component.css']
  styles:[`
  h3 {
    color: dodgerblue;
    text-align:center;
    border: solid green;
  }`]
})
export class S1BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
