import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === "True")
            return next.handle(req.clone());
        const token = localStorage.getItem("token");
        if (token) {
            const clonedReq = req.clone({
                headers: req.headers.set("Authorization", token)
            });
            return next.handle(clonedReq)
                .do(succ => { },
                    (err: HttpErrorResponse) => {
                        if (err.status === 401)
                            this.router.navigate(['/login']);
                    });
        }
        else {
            return next.handle(req).do(succ => this.router.navigateByUrl('/login'), err => this.router.navigateByUrl('/login'));
        }
    }
}