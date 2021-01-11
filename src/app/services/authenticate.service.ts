import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  userFilters = [];
  constructor() {}
  async getUsers() {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const response = await fetch(environment.authUserApi.baseUrl, options);
    let users = await response.json();
    return users;
  }

  async signIn(credentials: any) {
    let users = await this.getUsers();
    let response = {};
    this.userFilters = users.filter(
      (user: any) =>
        user.email === credentials.email &&
        user.password === btoa(credentials.password)
    );

    if (this.userFilters.length > 0) {
      response = {
        error: false,
        isAuthenticated: true,
        message: '',
        data: this.userFilters[0],
      };
    } else {
      response = {
        error: false,
        isAuthenticated: false,
        message: 'Usuario y/o contraseña incorrecta.',
        data: {},
      };
    }

    return response;
  }
  async signUp(userToRegiter: any) {
    let users = await this.getUsers();
    let response = {};

    this.userFilters = users.filter(
      (user: any) => user.email === userToRegiter.email
    );

    if (this.userFilters.length > 0) {
      response = {
        error: false,
        userExists: true,
        message: 'El correo ingresado ya se encuentra registrado.',
        data: {},
      };
    } else {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(userToRegiter),
      };

      const responseSave = await fetch(
        environment.authUserApi.baseUrl,
        options
      );
      let data = await responseSave.json();
      response = {
        error: false,
        userExists: false,
        message: '',
        data: data,
      };
    }
    return response;
  }
}
