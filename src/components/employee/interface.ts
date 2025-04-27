export interface IEmployee {
    id: string;
    name: string;
    contact: string;
    dep: string;
    salary: string;
    isEditable: boolean;
  }
  
export const empList: Array<IEmployee> = [
    {
        id: '1001',
        name: 'ritesh',
        contact: '999',
        dep: 'IT',
        salary: 'xxx',
        isEditable: false,
    },
    {
        id: '1002',
        name: 'Kumar',
        contact: '111',
        dep: 'IT',
        salary: 'yyy',
        isEditable: false,
    },
];