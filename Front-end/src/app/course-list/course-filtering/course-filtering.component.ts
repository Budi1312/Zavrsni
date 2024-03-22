import { Component, inject } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

export type CustomSorting = {
  name: string;
  sort: string;
  sortDirection: string;
}

@Component({
  selector: 'app-course-filtering',
  templateUrl: './course-filtering.component.html',
  styleUrls: ['./course-filtering.component.css']
})
export class CourseFilteringComponent {

  courseService: CourseService = inject(CourseService);
  nedeljeString: string = 'nedelja'
  nedeljeNumber: number = 20;

  sortingArray: CustomSorting[] = [
    { name: 'Bez sortiranja', sort: '', sortDirection: '' },
    { name: 'Cena rastuca', sort: 'price', sortDirection: 'asc' },
    { name: 'Cena opadajuca', sort: 'price', sortDirection: 'desc' },
    { name: 'Trajanje rastuce', sort: 'weeks', sortDirection: 'asc' },
    { name: 'Trajanje opadajuce', sort: 'weeks', sortDirection: 'desc' }
  ];

  onGetNameInput(nameInput: string): void {
    this.courseService.quearyParamsSubject.next({
      ...this.courseService.quearyParamsSubject.value,
      filter: {
        name: nameInput,
        weeksTo: this.courseService.quearyParamsSubject.value.filter.weeksTo
      }
    });
  }

  onGetWeeksInput(weeksInput: string): void {
    const weeksInputNumber = Number(weeksInput);
    this.nedeljeNumber = weeksInputNumber;
    if(weeksInputNumber > 1 && weeksInputNumber <= 4) {
      this.nedeljeString = 'nedelje';
    } else {
      this.nedeljeString = 'nedelja';
    }
    this.courseService.quearyParamsSubject.next({
      ...this.courseService.quearyParamsSubject.value,
      filter: {
        name: this.courseService.quearyParamsSubject.value.filter.name,
        weeksTo: weeksInputNumber
      }
    });
  }

  onGetSortingSelect(sortingSelect: string): void {
    this.sortingArray.filter((opcija) => {
      if(opcija.name == sortingSelect) {
        this.courseService.quearyParamsSubject.next({
          ...this.courseService.quearyParamsSubject.value,
          sort: opcija.sort,
          sortDirection: opcija.sortDirection
        });
      }
    });
  }

}
