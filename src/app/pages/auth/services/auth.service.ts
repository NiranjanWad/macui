import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../model/authresponse';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password:any): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
    {email,password,retunSecureToken: true});
  }

  formatUser(data: AuthResponse){
    const user = new User(data.kind, data.localId, data.email, data.displayName, data.idToken,data.regitered);
    return user;
  }
}
