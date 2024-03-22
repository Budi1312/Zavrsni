import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationFormComponent } from './application/application-form/application-form.component';

const routes: Routes = [
  {path: "courses", component: CourseListComponent},
  {path: "course-detail/:id", component: CourseDetailComponent},
  {path: "application-list", component: ApplicationListComponent},  
  {path: "application-form", component: ApplicationFormComponent},  
  {path: "about", component: AboutComponent}, 
  {path: "", redirectTo: "courses", pathMatch: "prefix"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
