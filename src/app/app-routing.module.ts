import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentComponent } from './pages/nosotros/comment/comment.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'courses',
    component:CoursesComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },

  {
    path:'nosotros',
    component:CommentComponent,
  },

  {
    path:'profile',
    component:ProfilesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
