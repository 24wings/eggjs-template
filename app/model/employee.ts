
import { Sequelize, STRING, INTEGER, Instance, DATE, } from "sequelize";



type IEmployeeInstance = Instance<IEmployee> & IEmployee;

export let EMPLOYEE = (database: Sequelize) => {
    const employee = database.define<IEmployeeInstance, IEmployee>(
        "employee",
        {
            epId: { type: INTEGER, primaryKey: true, autoIncrement: true },
            epName: { type: STRING, primaryKey: false, autoIncrement: false },
            menuIds: { type: STRING, primaryKey: false, autoIncrement: false, 
                 defaultValue: '', get() {
                    return (this as any).getDataValue('menuIds') ? (this as any).getDataValue('menuIds').split(',') : []
                },
                set(val) {
                    if (Array.isArray(val)) {
                        val = val.join(',');
                    }
                    (this as any).setDataValue('menuIds', val);
                
            }},
            epUserName: { type: STRING, primaryKey: false, autoIncrement: false },
            password: { type: STRING, primaryKey: false, autoIncrement: false },
            passwordHash: { type: STRING, primaryKey: false, autoIncrement: false },
            createTime: { type: DATE, primaryKey: false, autoIncrement: false },
            updateTime: { type: DATE, primaryKey: false, autoIncrement: false },

            employeeType: { type: INTEGER, primaryKey: false, autoIncrement: false },
            belongTo: { type: INTEGER, primaryKey: false, autoIncrement: false },

        }

    );

    // employee.sync({ force: true });


    return employee;
};
