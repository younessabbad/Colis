import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splash6PageRoutingModule } from './splash6-routing.module';

import { Splash6Page } from './splash6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splash6PageRoutingModule
  ],
  declarations: [Splash6Page]
})
export class Splash6PageModule {}
