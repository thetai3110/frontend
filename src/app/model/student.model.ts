import { Account } from "./account.model";

export interface Student{
    idStudent: Number;
    account: Account;
    studentName: string;
    cmnd: string;
    job: string;
    studentDate: Date;
    sex: Number;
    address: string;
    email: string;
    phone: string
}