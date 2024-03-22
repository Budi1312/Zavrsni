import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { CourseSearchResult } from '../model/courseSearchResult';
import { Course } from '../model/course';
import { Application } from '../model/application';

export type SortingQP = {
  sort: string;
  sortDirection: string;
  filter: {
    name:string;
    weeksTo: number; 
  }
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  quearyParams: SortingQP = {
    sort: '',
    sortDirection: '',
    filter: {
      name: '',
      weeksTo: 20
    }
  }

  quearyParamsSubject: BehaviorSubject<SortingQP> = new BehaviorSubject<SortingQP>(this.quearyParams);
  
  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseSearchResult> {
    return this.quearyParamsSubject.pipe(
      switchMap(params => {
        const options = {
          params: new HttpParams()
            .set('sort', params.sort || "")
            .set('sortDirection', params.sortDirection || "")
            .set('filter', params.filter && JSON.stringify(params.filter) || "")
        };
        return this.http.get<CourseSearchResult>(`http://localhost:3000/api/courses`, options);
      })
    );
  }

  getCourse(course_id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/api/courses/${course_id}`);
  }

  postApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(`http://localhost:3000/api/applications`, application);
  }

  getApplications(email: string): Observable<Application[]> {
    return this.http.get<Application[]>(`http://localhost:3000/api/candidates/${email}/applications`);
  }

  cancelApplication(application_id: number): Observable<Application> {
    return this.http.delete<Application>(`http://localhost:3000/api/applications/${application_id}`);
  }
}
