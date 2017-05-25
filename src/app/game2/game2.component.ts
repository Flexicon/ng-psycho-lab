import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: [
    '../games/games.component.css',
    './game2.component.css'
  ]
})
export class Game2Component implements OnInit, AfterViewInit {
  rows: Array<number>;
  currentRow: number;
  hits: number;
  misses: number;
  time: number;
  isTime;

  constructor() {
    this.rows = Array(7).fill(0).map((x, i) => i);
    this.currentRow = 0;
    this.hits = 0;
    this.misses = 0;
    this.time = 60;
  }

  ngOnInit() {
    this.isTime = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(this.isTime);
        this.isTime = false;
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.pickRandom();
  }

  btnClick(e) {
    const btnRow: number = +e.target.dataset.row;
    console.log(this.currentRow === btnRow);

    if (this.currentRow !== btnRow) {
      this.misses++;
    } else {
      this.hits++;
      document.querySelectorAll('.top [data-row="' + this.currentRow + '"]')[0].classList.toggle('active');
      this.pickRandom();
    }
  }

  pickRandom() {
    let row = Math.floor(Math.random() * this.rows.length);
    while (row === this.currentRow) {
      row = Math.floor(Math.random() * this.rows.length);
    }
    this.currentRow = row;

    // document.querySelectorAll('.side [data-row="'+ row +'"]')[1].classList.toggle('active');
    document.querySelectorAll('.top [data-row="' + row + '"]')[0].classList.toggle('active');
    console.log(this.currentRow);
  }

}
