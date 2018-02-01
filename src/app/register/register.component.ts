import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    login: string;
    pass: string;
    passRepeat: string;

    constructor(
        private userService: UserService,
        private flashMessagesService: FlashMessagesService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    submit() {
        if (!this.login || !this.pass || (this.passRepeat !== this.pass)) {
            this.flashMessagesService.show('Please fill out the form', {
                'cssClass': 'alert-danger',
                'timeout': 3000
            });
            return false;
        }

        this.userService.register(this.login, this.pass).then((registered: boolean) => {
            if (registered) {
                this.flashMessagesService.show('Registered successfully! Please sign in.', {
                    'cssClass': 'alert-success',
                    'timeout': 4000
                });
                this.router.navigate(['/']);
            } else {
                this.flashMessagesService.show('Sorry, a user with that name already exists', {
                    'cssClass': 'alert-danger',
                    'timeout': 4000
                });
            }
        });
    }
}
