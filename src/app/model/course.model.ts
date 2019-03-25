import { Level } from "./level.model";

export interface Course{
    idCourse: Number;
    course: string;
    level: Level;
    duration: string;
    dayStart: Date;
    fee: string;
    sale: string;
    space: string;
    conditions: string;
    describes: string;
    statusCourse: Number;
}