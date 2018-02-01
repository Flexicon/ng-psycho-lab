import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

    private _token: BehaviorSubject<string>;
    private _login: string;

    constructor(private http: HttpClient) {
        this._token = <BehaviorSubject<string>> new BehaviorSubject(undefined);
        this._login = undefined;

        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            this.setToken(parsedUser.token);
            this.setLogin(parsedUser.login);
        }
    }

    public get token(): Observable<string> {
        return this._token.asObservable();
    }

    public setToken(token: string) {
        this._token.next(token);
    }

    public get login(): string {
        return this._login;
    }

    public setLogin(login: string) {
        this._login = login;
    }

    public get isLoggedIn(): boolean {
        return !!this._token.getValue();
    }

    private store(response: any) {
        localStorage.setItem('currentUser', JSON.stringify({
            login: response.login,
            token: response.id
        }));
    }

    public logout() {
        this.setToken(undefined);
        this.setLogin(undefined);
        localStorage.removeItem('currentUser');
    }

    public authenticate(login: string, pass: string): Promise<boolean> {
        return this.http.post(environment.api.url + 'auth', { login, pass }).toPromise()
            .then((response: any) => {
                if (response.status) {
                    this.setToken(response.id);
                    this.setLogin(response.login);
                    this.store(response);
                    return true;
                } else {
                    return false;
                }
            });
    }
}
