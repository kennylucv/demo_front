import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Body } from '@angular/http/src/body';




@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/validate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                if (response.status === 200) {
                    localStorage.setItem('currentUser', JSON.stringify(username));
                }
                else{
                    Error('Username or password is not matching')
                }
                return response.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}