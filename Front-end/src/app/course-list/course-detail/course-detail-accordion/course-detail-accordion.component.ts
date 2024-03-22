import { Component, Input } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-detail-accordion',
  templateUrl: './course-detail-accordion.component.html',
  styleUrls: ['./course-detail-accordion.component.css']
})
export class CourseDetailAccordionComponent {

  @Input() courseData: Course = new Course();
}
