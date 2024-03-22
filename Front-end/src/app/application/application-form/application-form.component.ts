import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, concatMap, map, take } from 'rxjs';
import { Application } from 'src/app/model/application';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  @Input() isDetail: boolean = false;
  @Input() courseInput: Course = new Course();

  router: Router = inject(Router);
  courseService: CourseService = inject(CourseService);
  courseForm: FormGroup;
  courses: Observable<Course[]> = this.courseService.getCourses().pipe(map((courses) => courses.results));
  applicationError: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      course: ['', Validators.required],
      name: ['',Validators.required],
      eMail: ['', [Validators.required, Validators.email]],
      tel: ['',Validators.required],
      address: ['',Validators.required],
    });
  }

  onSubmit(): void {
    if(!this.courseForm.valid) return;
    this.courseForm.get('course')?.enable();
    const newApplication = new Application(this.courseForm.value);
    this.courseService.postApplication(newApplication).subscribe(
      {
        next: () => {
          this.router.navigate(['/application-list']);
          this.courseForm.reset(); 
        },
        error: () => {
          this.applicationError = 'Vec postoji prijava za odabrani kurs sa istim e-mail-om!'
        }
      }
    );
  }

  ngOnInit(): void {
    if(this.isDetail) {
      this.courseForm.get('course')?.setValue(this.courseInput);
      this.courseForm.get('course')?.disable();
    }
  } 
}

