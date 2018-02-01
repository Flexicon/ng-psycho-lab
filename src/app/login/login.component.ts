import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    login: string;
    pass: string;

    constructor(
        private authService: AuthService,
        private flashMessagesService: FlashMessagesService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    submit() {
        if (!this.login || !this.pass) {
            this.flashMessagesService.show('Please fill out the form', {
                'cssClass': 'alert-danger',
                'timeout': 3000
            });
            return false;
        }

        this.authService.authenticate(this.login, this.pass).then((loggedIn: boolean) => {
            if (loggedIn) {
                this.flashMessagesService.show('Welcome, ' + this.authService.login + '!', {
                    'cssClass': 'alert-success',
                    'timeout': 4000
                });
                this.router.navigate(['/']);
            } else {
                this.flashMessagesService.show('Oh no! Sorry authentication failed :(', {
                    'cssClass': 'alert-danger',
                    'timeout': 3000
                });
            }
        });
    }

}
