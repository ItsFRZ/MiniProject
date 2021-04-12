import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'Faraz Sheikh' && password === 'ItsFRZ' || username === 'ItsFRZ' && password === '123456' || username === 'faraz@gmail.com' && password === 'ItsFRZ') {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user =  sessionStorage.getItem('authenticatedUser');
    
    return !(user === null);

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }


}
