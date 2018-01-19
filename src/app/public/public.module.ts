import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import {AppMaterialModule} from '../shared/material/material.module';
export const PUBLIC_ROUTES = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PUBLIC_ROUTES),
    AppMaterialModule
  ],
  declarations: [HomeComponent, PublicComponent, ProfileComponent, SkillsComponent, ServicesComponent, TestimonialsComponent]
})
export class PublicModule { }
