import { Account } from "./account.model";

export interface Employee{
    idEmployee: Number;
    account: Account;
    roles: string;
    employeeName: string;
    cmnd: string;
    employeeDate: Date;
    sex: Number;
    address: string;
    email: string;
    phone: string;
    salary: string;
}