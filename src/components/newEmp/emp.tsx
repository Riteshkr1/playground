import React, { useState } from "react";
import { EMP_DATA, IEmp } from "./interface";
import { EmpRow } from "./empRow";
import style from './emp.module.css';


export const Emp: React.FC = () => {
    const [empData, setEmpData] = useState<Array<IEmp>>(EMP_DATA);
    const handleSave = (emp: IEmp) => {
        setEmpData(pre => {
            return pre.map(employee => {
                return employee.id === emp.id ? emp : employee;
            });
        })
    }

    return (
        <div className={style.container}>
            {empData.map(emp => {
                return <EmpRow key={emp.id} emp={emp} handleSave={handleSave} />
            })}
        </div>
    );
}