import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path: 'splash1',
    loadChildren: () => import('./splash1/splash1.module').then( m => m.Splash1PageModule)
  },
  {
    path: 'splash2',
    loadChildren: () => import('./splash2/splash2.module').then( m => m.Splash2PageModule)
  },
  {
    path: 'splash3',
    loadChildren: () => import('./splash3/splash3.module').then( m => m.Splash3PageModule)
  },

  {
    path: 'splash5',
    loadChildren: () => import('./splash5/splash5.module').then( m => m.Splash5PageModule)
  },
  {
    path: 'splash6',
    loadChildren: () => import('./splash6/splash6.module').then( m => m.Splash6PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash4',
    loadChildren: () => import('./splash4/splash4.module').then( m => m.Splash4PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
