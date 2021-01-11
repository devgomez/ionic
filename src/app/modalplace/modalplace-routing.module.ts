import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalplacePage } from './modalplace.page';

const routes: Routes = [
  {
    path: '',
    component: ModalplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalplacePageRoutingModule {}
