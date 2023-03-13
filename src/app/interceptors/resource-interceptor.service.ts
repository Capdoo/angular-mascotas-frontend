import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, concatMap, Observable, throwError } from 'rxjs';
import { JwtDto } from '../auth/models/jwt-dto';
import { AuthService } from '../auth/services/auth.service';
import { TokenService } from '../auth/services/token.service';

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class ResourceInterceptorService implements HttpInterceptor{

  constructor(
    private tokenService: TokenService, 
    private authService: AuthService,
    private toastrService: ToastrService
    ) { }

  //Metodo para formatear el token a enviar al servidor
  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any>{
    return req.clone({ headers: req.headers.set(AUTHORIZATION, 'Bearer '+token)}); 
  } 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.tokenService.isLogged()){
      return next.handle(req);
    }

    //Se intercepta la peticion desde Front --> Back
    let intReq = req;
    const token = this.tokenService.getToken();
    intReq = this.addToken(req, token!);

    return next.handle(intReq).pipe(catchError( (err: HttpErrorResponse) => {
      //Es decir el token ha expirado pero existe autorizacion
      if (err.status === 401){
        //Se requiere un JwtDto para enviar al servidor
        const dto:JwtDto = new JwtDto(this.tokenService.getToken()!);

        return this.authService.refresh(dto).pipe(
          //Se requiere un pipe para añadir el refreshToken a la peticion
          concatMap( (data:any) => {
            console.log("Refreshing token");
            //Actualizando token
            this.tokenService.setToken(data.token); 
            intReq = this.addToken(req, data.token);
            return next.handle(intReq);

          })
        );
      }else {
        console.log("Flow else interceptor");
        this.tokenService.logOut();
        return throwError(err);
      }
    }));
  }

}

export const interceptorProvicer = [{provide: HTTP_INTERCEPTORS, useClass: ResourceInterceptorService, multi: true}];
