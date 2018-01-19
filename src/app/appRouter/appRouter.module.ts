import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminModule } from '../admin/admin.module';
import { AdminComponent } from '../admin/admin.component';
import { PublicComponent } from '../public/public.component';
import { HomeComponent } from '../public/home/home.component';

const appRoutes: Routes = [  
  {
    path: '',
    component: PublicComponent,
    loadChildren: '../public/public.module#PublicModule'
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
    CommonModule,
    AdminModule,
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class appRouterModule { }
