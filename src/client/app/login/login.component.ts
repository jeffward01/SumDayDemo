import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
 
  lock = new Auth0Lock('Aq1Uvo10jxslRGaScq7LCiDUBCrV461O', 'jeffward01.auth0.com');


  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */




  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  //login():
 
  /*
  var hash = this.lock.parseHash();
    if (hash) {
      if (hash.error)
        console.log('There was an error logging in', hash.error);
      else
        this.lock.getProfile(hash.id_token, function(err, profile) {
          if (err) {
            console.log(err);
            return;
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', hash.id_token);
        });
    }
  */

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}

  