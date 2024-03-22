import { Course } from "./course";

export class CourseSearchResult {
    count: number;
    results: Course[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((course: any) => new Course(course)) || null;
    }
}