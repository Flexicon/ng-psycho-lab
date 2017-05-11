import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamebutton',
  templateUrl: './gamebutton.component.html',
  styleUrls: ['./gamebutton.component.css']
})
export class GamebuttonComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  @Input() primary: boolean;

  constructor() { }

  ngOnInit() {
  }

}
