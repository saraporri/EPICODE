import { iUser } from './models/user';
import { iLoginData } from './models/login-data';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

type AccessData = {
  accessToken:string,
  user:iUser
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()//ci permette di lavorare facilmente con i jwt

  authSubject = new BehaviorSubject<iUser|null>(null);//se nel behavioursubject c'è null significa che l'utente non è loggato, altrimenti conterrà l'oggetto user con tutte le sue info

  user$ = this.authSubject.asObservable()//contiene i dati dell'utente loggato oppure null
  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user =>  this.syncIsLoggedIn = user)
    )//restituisce true se lò'utente è loggato, false se non lo è
  //!!user è come scrivere Boolean(user)
  //isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))

  syncIsLoggedIn:boolean = false;

  constructor(
    private http:HttpClient,//per le chiamate http
    private router:Router//per i redirect
    ) {

      this.restoreUser()//come prima cosa controllo se è già attiva una sessione, e la ripristino

    }

  //ng g environments
  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  register(newUser:Partial<iUser>):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl,newUser)
  }

  login(loginData:iLoginData):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,loginData)
    .pipe(tap(data => {

      this.authSubject.next(data.user)//comunico al subject che l'utente si è loggato
      localStorage.setItem('accessData', JSON.stringify(data))

      this.autoLogout(data.accessToken)

    }))
  }


  logout(){

    this.authSubject.next(null)//comunico al subject che l'utente si è sloggato
    localStorage.removeItem('accessData')//cancello i dati dell'utente

    this.router.navigate(['/auth/login'])//mando via l'utente loggato

  }


  getAccessToken():string{
    const userJson = localStorage.getItem('accessData')//recupero io dati di accesso
    if(!userJson) return ''; //se l'utente non si è mai loggato blocca tutto

    const accessData:AccessData = JSON.parse(userJson)//se viene eseguita questa riga significa che i dati ci sono, quindi la converto da json ad oggetto per permetterne la manipolazione
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return ''; //ora controllo se il token è scaduto, se lo è fermiamo la funzione

    return accessData.accessToken
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;//trovo la data di scadenza del token
    const expMs = expDate.getTime() - new Date().getTime(); //sottraggo i ms della data/ora di oggi da quella nel jwt

    //avvio un timer, quando sarà passato il numero di ms necessari per la scadenza del token, avverrà il logout
    setTimeout(()=>{
      this.logout()
    },expMs)
  }


  restoreUser(){

    const userJson = localStorage.getItem('accessData')//recupero io dati di accesso
    if(!userJson) return; //se l'utente non si è mai loggato blocca tutto

    const accessData:AccessData = JSON.parse(userJson)//se viene eseguita questa riga significa che i dati ci sono, quindi la converto da json ad oggetto per permetterne la manipolazione
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return; //ora controllo se il token è scaduto, se lo è fermiamo la funzione

//se nessun return viene eseguito proseguo
    this.authSubject.next(accessData.user)//invio i dati dell'utente al behaviorsubject
    this.autoLogout(accessData.accessToken)//riavvio il timer per la scadenza della sessione

  }



}
