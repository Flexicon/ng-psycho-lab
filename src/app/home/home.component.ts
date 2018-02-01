import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    login: string;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private flashMessenger: FlashMessagesService
    ) {
    }

    ngOnInit() {
        this.login = this.authService.login;
    }

    deleteAccount() {
        const choice = confirm('Are you sure?');

        if (choice) {
            const subscription = this.authService.token.subscribe(
                (token: string) => {
                    this.userService.deleteUser(token).then(
                        (result: boolean) => {
                            subscription.unsubscribe();
                            if (result) {
                                this.flashMessenger.show('Deleted user account', {
                                    'cssClass': 'alert-success',
                                    timeout: 4000
                                });
                                this.authService.logout();
                                this.router.navigate(['/login']);
                            } else {
                                this.flashMessenger.show('Failed to delete user account', {
                                    'cssClass': 'alert-danger',
                                    timeout: 4000
                                });
                            }
                        }
                    );
                }
            );
        }
    }

}
