import { Account } from "./account.model";

export interface Lecturers{
    idLecturers: Number;
    account: Account;
    lecturersName: string;
    lecturersDate: Date;
    sex: Number;
    address: string;
    email: string;
    phone: string;
    salary: string;
}