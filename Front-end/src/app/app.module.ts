import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseFilteringComponent } from './course-list/course-filtering/course-filtering.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurseDetailItemComponent } from './course-list/course-detail/curse-detail-item/curse-detail-item.component';
import { CourseDetailAccordionComponent } from './course-list/course-detail/course-detail-accordion/course-detail-accordion.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationFormComponent } from './application/application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    AboutComponent,
    NavbarComponent,
    CourseItemComponent,
    CourseFilteringComponent,
    CourseDetailComponent,
    CurseDetailItemComponent,
    CourseDetailAccordionComponent,
    ApplicationListComponent,
    ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
