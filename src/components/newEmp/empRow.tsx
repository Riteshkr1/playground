import { useEffect, useState} from "react";
import { IEmp } from "./interface";
import React from "react";
import styles from './emp.module.css';

export interface IEmpRow {
    emp: IEmp,
    handleSave: (data: IEmp) => void,
}

export const EmpRow: React.FC<IEmpRow> = React.memo((props: IEmpRow) => {
    const [emp, setEmp] =useState<IEmp>({...props.emp});
    const [canSave, setCanSave] = useState(false);

    useEffect(()=>{
        setEmp(props.emp);
        setCanSave(false);
    },[props.emp])

    const handleEdit = () => {
        setCanSave(pre => !pre);
        if(canSave) {
            props.handleSave(emp);
        }

    }
    const handleEmpEdit = ( value: string, field: string) => {
        setEmp({
            ...emp,
            [field]: value
        });
    }

    const {id, name, department} = emp;

    return (
        <div className={styles.grid}>
            <div className={styles.gridItem}>{id}</div>
            {!canSave && <>
                <div className={styles.gridItem}>{name}</div>
                <div className={styles.gridItem}>{department}</div>
            </>
            }
            {canSave && <>
                <div className={styles.gridItem}>
                    <input type="text" value={name} onChange={(ev) => handleEmpEdit(ev.target.value, 'name')} />
                </div>
                <div className={styles.gridItem}>
                    <input type="text" value={department} onChange={(ev) => handleEmpEdit(ev.target.value, 'department')} />
                </div>
            </>
            }
            
            <div className={styles.gridItem}> 
                <button onClick={handleEdit}>{canSave ? 'Save' : 'Edit'}</button>
            </div>
        </div>
    );

});