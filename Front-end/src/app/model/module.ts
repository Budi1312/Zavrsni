export class Module {
    name: string;
    subjects: string[];

    constructor(obj?: any) {
        this.name = obj && obj.name || null;
        this.subjects = obj && obj.subjects && obj.subjects.map((subject: string) => subject) || [];
    }

}