import { Room } from "./room.model";
import { Course } from "./course.model";
import { Lecturers } from "./lecturers.model";

export interface Classes{
    idClass: Number;
    room: Room;
    course: Course;
    lecturers: Lecturers;
    className: string;
    size: Number;
    minSize: Number;
    maxSize: Number;
    statusClass: Number;
}