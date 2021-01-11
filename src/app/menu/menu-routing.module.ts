import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroGuard } from '../guards/intro.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
        canActivate: [IntroGuard],
      },
      {
        path: 'intro',
        loadChildren: () =>
          import('../intro/intro.module').then((m) => m.IntroPageModule),
      },
      {
        path: 'myprofile',
        loadChildren: () =>
          import('../myprofile/myprofile.module').then(
            (m) => m.MyprofilePageModule
          ),
      },
      {
        path: 'mylocation',
        loadChildren: () =>
          import('../mylocation/mylocation.module').then(
            (m) => m.MylocationPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
