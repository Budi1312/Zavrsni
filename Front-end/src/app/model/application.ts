import { Course } from "./course";

export class Application {
    id: number;
    course: Course;
    name: string;
    eMail: string;
    tel: string;
    address: string;
    date: Date;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.course = obj && obj.course || null;
        this.name = obj && obj.name || null;
        this.eMail = obj && obj.eMail || null;
        this.tel = obj && obj.tel || null;
        this.address = obj && obj.address || null;
        this.date = obj && new Date(obj.date) || null;
    }
}