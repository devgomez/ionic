import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalplacePageRoutingModule } from './modalplace-routing.module';

import { ModalplacePage } from './modalplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalplacePageRoutingModule
  ],
  declarations: [ModalplacePage]
})
export class ModalplacePageModule {}
