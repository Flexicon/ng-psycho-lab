import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isNavbarCollapsed = true;
    isUserLoggedIn = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.onResize(window);
        this.authService.token.subscribe(
            (token) => {
                this.isUserLoggedIn = !!token;
            }
        );
    }

    @HostListener('window:resize', ['$event.target'])
    onResize(event) {
        if (event.innerWidth > 990) {
            this.isNavbarCollapsed = false;
        } else {
            this.isNavbarCollapsed = true;
        }
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
