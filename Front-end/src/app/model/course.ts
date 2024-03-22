import { Module } from "./module";

export class Course {
    id: number;
    name: string;
    overview: string;
    weeks: number;
    classes: number;
    classesPerWeek: number;
    description: string;
    price: number;
    modules: Module[];
    grading: string;
    image: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.overview = obj && obj.overview || null;
        this.weeks = obj && obj.weeks || null;
        this.classes = obj && obj.classes || null;
        this.classesPerWeek = obj && obj.classesPerWeek || null;
        this.description = obj && obj.description || null;
        this.price = obj && obj.price || null;
        this.modules = obj && obj.modules && obj.modules.map((module: any) => new Module(module)) || [];
        this.grading = obj && obj.grading || null;
        this.image = obj && obj.image || null;
    }

}