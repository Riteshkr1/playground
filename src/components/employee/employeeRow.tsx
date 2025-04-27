import * as React from "react";
import { IEmployee } from "./interface";
import styles from "./employee.module.css";

interface IEmployeeRowProps {
    emp: IEmployee;
    onHandleSave: (updatedEmploy: IEmployee) => void;
}
export const EmployeeRow = React.memo((prop: IEmployeeRowProps) => {
    const { emp, onHandleSave } = prop;
    const [isEdit, setIsEdit] = React.useState(false);
    const [employee, setEmployee] = React.useState<IEmployee>(emp);
    const { id, name, contact, dep, salary } = employee;
    
    const handleEdit = () => {
        setIsEdit(!isEdit);
        if(isEdit){
            onHandleSave(employee);
            console.log('save');
        }
    };
    const handleChange = (field: string, value: string) => {
        setEmployee((prev) => ({
            ...prev,
            [field]: value
        }));
    }
    return (
        <div className={styles.grid}>
            {!isEdit && <>
                <div className={styles.gridItem}>{id}</div>
                <div className={styles.gridItem}>{name}</div>
                <div className={styles.gridItem}>{contact}</div>
                <div className={styles.gridItem}>{dep}</div>
                <div className={styles.gridItem}>{salary}</div>
            </>}
            {isEdit && <>
                <div className={styles.gridItem}>{id}</div>
                <div className={styles.gridItem}>
                    <input type="text" onChange={(ev)=> handleChange('name', ev.target.value)} value={name}/>
                </div>
                <div className={styles.gridItem}>
                    <input type="text" onChange={(ev)=> handleChange('contact', ev.target.value)} value={contact}/>
                </div>
                <div className={styles.gridItem}>
                    <input type="text" onChange={(ev)=> handleChange('dep', ev.target.value)} value={dep}/>
                </div>
                <div className={styles.gridItem}>
                    <input type="text" onChange={(ev)=> handleChange('salary', ev.target.value)} value={salary}/>
                </div>
            </>}
            

            <div className={styles.gridItem}>
                <button onClick={handleEdit}>{isEdit ? 'Save' : 'Edit'}</button>
            </div>
            
        </div>
    )
});