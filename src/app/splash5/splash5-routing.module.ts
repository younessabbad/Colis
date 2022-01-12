import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Splash5Page } from './splash5.page';

const routes: Routes = [
  {
    path: '',
    component: Splash5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Splash5PageRoutingModule {}
