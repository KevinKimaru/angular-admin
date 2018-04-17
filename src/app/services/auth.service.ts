import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donor } from '../model/donor.model';

import * as moment from "moment";
import { User } from '../model/user.model';
import { constants } from '../constants';
import { Http, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    isLoggedIn$: boolean = false;

    constructor(private http: HttpClient) {
    }


    login(user: User) {
        var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.post<User>(constants.base_uri + 'login', user, { headers: reqHeader, observe: 'response' });
    }

    onLogin(res, router: Router) {
        localStorage.setItem('token', res.headers.get('Authorization'));
        localStorage.setItem('user', res.headers.get('username'));
        localStorage.setItem('role', res.headers.get('role'));
        localStorage.setItem('user_ID', res.headers.get('user_ID'));

        this.isLoggedIn$ = true;

        if (this.isAdmin())
            router.navigate(['/funding']);
        else
            router.navigate(['/client-donor']);
    }

    logout(router: Router) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("user_ID");

        this.isLoggedIn$ = false;

        router.navigate(['/login']);
    }

    public isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    public isAdmin() {
        return localStorage.getItem("role") == 'ROLE_ADMIN';
    }

    public isDonor() {
        return localStorage.getItem("role") == 'ROLE_USER';
    }

}
