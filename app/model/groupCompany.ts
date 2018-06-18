
import { Sequelize, STRING, INTEGER, Instance, } from "sequelize";





type IGroup_companyInstance = Instance<IGroupCompany> & IGroupCompany;

export let GROUP_COMPANY = (database: Sequelize) => {
    const group_company = database.define<IGroup_companyInstance, IGroupCompany>(
        "group_company",
        {
            gcId: { type: INTEGER, primaryKey: true, autoIncrement: true },
            gcName: { type: STRING, primaryKey: false, autoIncrement: false },
            gcMenuIds: {
                type: STRING, primaryKey: false, defaultValue: '', get() {
                    return (this as any).getDataValue('gcMenuIds') ? (this as any).getDataValue('gcMenuIds').split(',') : []
                },
                set(val) {
                    if (Array.isArray(val)) {
                        val = val.join(',');
                    }
                    (this as any).setDataValue('gcMenuIds', val);
                }
            }
        }
    );

    // group_company.sync({ force: true });


    return group_company;
};
