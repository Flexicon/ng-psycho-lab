import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-game1',
	templateUrl: './game1.component.html',
	styleUrls: [
		'./game1.component.css',
		'../games/games.component.css'
	]
})
export class Game1Component implements OnInit, AfterViewInit {
	rows: Array<number>;
	cols: Array<number>;
	currentNode: Array<number>;
	hits: number;
	misses: number;

	constructor() {
		this.rows = Array(7).fill(0).map((x,i)=>i);
		this.cols = Array(7).fill(0).map((x,i)=>i);
		this.currentNode = [0,0];
		this.hits = 0;
		this.misses = 0;
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.pickRandom();
	}

	btnClick(e) {
		let btnNode: Array<number> = [+e.currentTarget.dataset.row, +e.currentTarget.dataset.col];
		console.log(this.currentNode[0] == btnNode[0] && this.currentNode[1] == btnNode[1]);

		if(this.currentNode[0] == btnNode[0] && this.currentNode[1] == btnNode[1]) {
			this.hits++;
			document.querySelectorAll('.side [data-row="'+ this.currentNode[0] +'"]')[0].classList.toggle('active');
			document.querySelectorAll('.top [data-col="'+ this.currentNode[1] +'"]')[0].classList.toggle('active');
			this.pickRandom();
		}
		else {
			this.misses++;
		}
	}

	pickRandom() {
		let row = Math.floor(Math.random() * this.rows.length);
		let col = Math.floor(Math.random() * this.cols.length);
		while(row == this.currentNode[0] && col == this.currentNode[1]) {
			row = Math.floor(Math.random() * this.rows.length);
			col = Math.floor(Math.random() * this.cols.length);
		}
		this.currentNode = [row, col];

		// document.querySelectorAll('.side [data-row="'+ row +'"]')[1].classList.toggle('active');
		document.querySelectorAll('.side [data-row="'+ row +'"]')[0].classList.toggle('active');
		document.querySelectorAll('.top [data-col="'+ col +'"]')[0].classList.toggle('active');
		console.log(this.currentNode);
	}

}
