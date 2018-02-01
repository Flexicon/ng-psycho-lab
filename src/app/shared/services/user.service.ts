import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../models/User.model';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
    }

    public getUsers(): Promise<User[]> {
        return this.http.get(environment.api.url + 'users').toPromise()
            .then((response: any) => {
                if (response.status) {
                    return response.users;
                } else {
                    throw new Error('Failed to retrieve users data');
                }
            });
    }

    public updatePoints(points: number): void {
        this.authService.token.subscribe((token: string) => {
            return this.http.patch(environment.api.url + 'users/' + token, { points }).toPromise()
                .then((response: any) => {
                    if (response.status) {
                        return true;
                    } else {
                        throw new Error('Failed to update user points data');
                    }
                });
        });
    }

    public register(login: string, pass: string): Promise<boolean> {
        return this.http.post(environment.api.url + 'users', { login, pass }).toPromise()
            .then((response: any) => response.status);
    }

    public deleteUser(token: string): Promise<boolean> {
        return this.http.delete(environment.api.url + 'users/' + token).toPromise()
            .then((response: any) => response.status);
    }
}
