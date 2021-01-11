import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private navController: NavController, private storage: Storage) {}
  async canActivate() {
    const isAuthenticated = await this.storage.get('isAuthenticated');
    if (isAuthenticated) {
      return true;
    } else {
      this.navController.navigateRoot('/login');
    }
  }
}
