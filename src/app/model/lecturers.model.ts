import { Account } from "./account.model";
import { Majors } from "./majors.model";

export interface Lecturers{
    idLecturers: Number;
    majors: Majors;
    account: Account; 
    lecturersName: string;
    lecturersDate: Date;
    sex: Number;
    address: string;
    email: string;
    phone: string;
    salary: string;
}