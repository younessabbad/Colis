import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splash4PageRoutingModule } from './splash4-routing.module';

import { Splash4Page } from './splash4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splash4PageRoutingModule
  ],
  declarations: [Splash4Page]
})
export class Splash4PageModule {}
