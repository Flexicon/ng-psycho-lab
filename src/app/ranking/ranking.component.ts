import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/User.model';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
    users: User[];

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.users = [];
        this.userService.getUsers().then((users: User[]) => {
            this.users = users;
        });
    }

}
