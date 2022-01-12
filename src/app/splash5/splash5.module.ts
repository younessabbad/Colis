import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Splash5PageRoutingModule } from './splash5-routing.module';

import { Splash5Page } from './splash5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Splash5PageRoutingModule
  ],
  declarations: [Splash5Page]
})
export class Splash5PageModule {}
