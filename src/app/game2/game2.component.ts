import { Component, OnInit, AfterViewInit } from '@angular/core';

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
	
	constructor() {
		this.rows = Array(10).fill(0).map((x,i)=>i);
		this.currentRow = 0;
		this.hits = 0;
		this.misses = 0;
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.pickRandom();
	}

	btnClick(e) {
		let btnRow: number = +e.currentTarget.dataset.row;
		console.log(this.currentRow == btnRow);

		if(this.currentRow == btnRow) {
			this.hits++;
			document.querySelectorAll('.top [data-row="'+ this.currentRow +'"]')[0].classList.toggle('active');
			this.pickRandom();
		}
		else {
			this.misses++;
		}
	}

	pickRandom() {
		let row = Math.floor(Math.random() * this.rows.length);
		while(row == this.currentRow) {
			row = Math.floor(Math.random() * this.rows.length);
		}
		this.currentRow = row;

		// document.querySelectorAll('.side [data-row="'+ row +'"]')[1].classList.toggle('active');
		document.querySelectorAll('.top [data-row="'+ row +'"]')[0].classList.toggle('active');
		console.log(this.currentRow);
	}

}
