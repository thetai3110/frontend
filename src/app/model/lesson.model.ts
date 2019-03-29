import { Course } from './course.model';

export interface Lesson{
    idLesson: Number;
    course: Course;
    day: string;
    formality: string;
    title: string;
    content: string;
}