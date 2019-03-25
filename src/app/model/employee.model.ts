import { Account } from "./account.model";
import { Majors } from "./majors.model";

export interface Employee{
    idEmployee: Number;
    account: Account;
    majors: Majors;
    employeeName: string;
    cmnd: string;
    employeeDate: Date;
    sex: Number;
    address: string;
    email: string;
    phone: string;
    salary: string;
}