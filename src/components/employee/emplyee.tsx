import * as React from "react"
import { empList, IEmployee } from "./interface";
import styles from "./employee.module.css";
import { useState } from "react";
import { EmployeeRow } from "./employeeRow";

export const Employee = () => {
    const [employees, setEmployees] = useState(empList);
    const handleSave = (updatedEmploy: IEmployee) => {
        const updatedList = employees.map(emp => {
            if (emp.id === updatedEmploy.id) {
                return { ...emp, ...updatedEmploy };
            }
            return emp;
        });
        setEmployees(updatedList);
    }
    return (
        <div className={styles.containers}>
            {employees.map(emp => <EmployeeRow emp={{...emp}} key={emp.id} onHandleSave={handleSave}/>)}
        </div>
    );
}