import { Component, inject } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable, map } from 'rxjs';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  courseService: CourseService = inject(CourseService);
  courses: Observable<Course[]> = this.courseService.getCourses().pipe(map((courses) => courses.results));

}
