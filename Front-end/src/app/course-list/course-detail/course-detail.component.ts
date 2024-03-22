import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  activatedRotue: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);

  course: Observable<Course> = this.activatedRotue.paramMap.pipe(concatMap((param) => {
    const id = param.get('id');
    return this.courseService.getCourse(Number(id));
  }));
}
