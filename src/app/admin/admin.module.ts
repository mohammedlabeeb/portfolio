import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminCommonModule } from './common/common.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

import { PagesComponent } from './pages/pages.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';


export const ADMIN_ROUTES = [
     // { path: 'admin', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'users', component: UsersComponent },
    ];

@NgModule({
  imports: [
    CommonModule,
    AdminCommonModule,
    RouterModule.forChild(ADMIN_ROUTES)    
  ],
  declarations: [DashboardComponent, AdminComponent, PagesComponent, PostsComponent, CommentsComponent, UsersComponent],
  exports: [DashboardComponent, AdminComponent, PagesComponent, PostsComponent, CommentsComponent]
})
export class AdminModule { }
