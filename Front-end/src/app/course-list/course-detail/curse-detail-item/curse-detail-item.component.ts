import { Component, Input } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-curse-detail-item',
  templateUrl: './curse-detail-item.component.html',
  styleUrls: ['./curse-detail-item.component.css']
})
export class CurseDetailItemComponent {

  @Input() courseData: Course = new Course();
}
