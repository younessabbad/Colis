import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Splash6Page } from './splash6.page';

const routes: Routes = [
  {
    path: '',
    component: Splash6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Splash6PageRoutingModule {}
