import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylocationPageRoutingModule } from './mylocation-routing.module';

import { MylocationPage } from './mylocation.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    MylocationPageRoutingModule,
  ],
  declarations: [MylocationPage],
})
export class MylocationPageModule {}
