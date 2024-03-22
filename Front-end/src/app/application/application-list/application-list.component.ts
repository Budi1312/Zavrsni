import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application } from 'src/app/model/application';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent {
  
  courseService: CourseService = inject(CourseService);
  applications:Application[] = [];
  showMessage: boolean = false;
  applicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.applicationForm = this.formBuilder.group({
      eMail: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if(!this.applicationForm.valid) return;
    const email: string = this.applicationForm.value.eMail;
    this.courseService.getApplications(email).subscribe((applicationsValue) => {
      this.applications = applicationsValue;
      this.showMessage = true;
    });
  }

  onCancelApplication(application_id: number): void {
    this.courseService.cancelApplication(application_id).subscribe(() => {
      const deletedApplication = this.applications.findIndex((application) => application.id === application_id);
      this.applications.splice(deletedApplication,1);
    });
  }

}
