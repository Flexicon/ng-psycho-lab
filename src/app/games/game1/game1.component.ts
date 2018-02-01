import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-game1',
    templateUrl: './game1.component.html',
    styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit, AfterViewInit {
    rows: Array<number>;
    cols: Array<number>;
    currentNode: Array<number>;
    hits: number;
    misses: number;
    totalPoints: number;
    time: number;
    isTime;

    constructor(
        private userService: UserService,
        private flashMessenger: FlashMessagesService
    ) {
        const rowSize = 7, colSize = 7;
        this.rows = Array(rowSize).fill(0).map((x, i) => i);
        this.cols = Array(colSize).fill(0).map((x, i) => i);
        this.currentNode = [0, 0];
        this.hits = 0;
        this.misses = 0;
        this.totalPoints = 0;
        this.time = 30;
    }

    ngOnInit() {
        this.isTime = setInterval(() => {
            this.time--;
            if (this.time <= 0) {
                clearInterval(this.isTime);
                this.isTime = false;
                this.savePoints();
            }
        }, 1000);
    }

    ngAfterViewInit() {
        this.pickRandom();
    }

    btnClick(e) {
        if (this.isTime) {
            const btnNode: Array<number> = [+e.target.dataset.row, +e.target.dataset.col];

            if (!(this.currentNode[0] === btnNode[0] && this.currentNode[1] === btnNode[1])) {
                this.misses++;
            } else {
                this.hits++;
                document.querySelectorAll('.side [data-row="' + this.currentNode[0] + '"]')[0].classList.toggle('active');
                document.querySelectorAll('.side [data-row="' + this.currentNode[0] + '"]')[1].classList.toggle('active');
                document.querySelectorAll('.top [data-col="' + this.currentNode[1] + '"]')[0].classList.toggle('active');
                this.pickRandom();
            }

            this.calcPointsTotal();
        }
    }

    pickRandom() {
        let row = Math.floor(Math.random() * this.rows.length);
        let col = Math.floor(Math.random() * this.cols.length);
        while (row === this.currentNode[0] && col === this.currentNode[1]) {
            row = Math.floor(Math.random() * this.rows.length);
            col = Math.floor(Math.random() * this.cols.length);
        }
        this.currentNode = [row, col];

        document.querySelectorAll('.side [data-row="' + row + '"]')[1].classList.toggle('active');
        document.querySelectorAll('.side [data-row="' + row + '"]')[0].classList.toggle('active');
        document.querySelectorAll('.top [data-col="' + col + '"]')[0].classList.toggle('active');
        console.log(this.currentNode);
    }

    calcPointsTotal() {
        this.totalPoints = this.hits - this.misses;
    }

    savePoints() {
        const totalPoints = this.totalPoints < 0 ? 0 : this.totalPoints;
        try {
            this.userService.updatePoints(totalPoints);
        } catch (err) {
            this.flashMessenger.show(err, { 'cssCLass': 'alert-danger', timeout: 5000 });
        }
        this.flashMessenger.show('Your score has been updated', { 'cssClass': 'alert-success' });
    }

}
