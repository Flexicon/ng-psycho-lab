import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-game2',
    templateUrl: './game2.component.html',
    styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit, AfterViewInit {
    cols: Array<number>;
    currentCol: number;
    hits: number;
    misses: number;
    totalPoints: number;
    time: number;
    isTime;

    constructor(
        private userService: UserService,
        private flashMessenger: FlashMessagesService
    ) {
        this.cols = Array(10).fill(0).map((x, i) => i);
        this.currentCol = 0;
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
        const btnCol: number = +e.target.dataset.col;

        if (this.currentCol !== btnCol) {
            this.misses++;
        } else {
            this.hits++;
            document.querySelectorAll('.top [data-col="' + this.currentCol + '"]')[0].classList.toggle('active');
            this.pickRandom();
        }

        this.calcPointsTotal();
    }

    pickRandom() {
        let col = Math.floor(Math.random() * this.cols.length);
        while (col === this.currentCol) {
            col = Math.floor(Math.random() * this.cols.length);
        }
        this.currentCol = col;

        document.querySelectorAll('.top [data-col="' + col + '"]')[0].classList.toggle('active');
        console.log(this.currentCol);
    }

    calcPointsTotal() {
        this.totalPoints = (this.hits * 2) - (this.misses * 2);
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
