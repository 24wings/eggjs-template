
import { Sequelize, STRING, INTEGER, Instance, DATE, } from "sequelize";


interface IDeveloper {
    devId?: number;
    devUserName?: string;
    password?: string;
    passwordHash?: string;
    createTime?: Date;
    updateTime?: Date;

}


type IDeveloperInstance = Instance<IDeveloper> & IDeveloper;

export let DEVELOPER = (database: Sequelize) => {
    const developer = database.define<IDeveloperInstance, IDeveloper>(
        "developer",
        {
            devId: { type: INTEGER, primaryKey: true, autoIncrement: true },
            devUserName: { type: STRING, primaryKey: false, autoIncrement: false },
            password: { type: STRING, primaryKey: false, autoIncrement: false },
            passwordHash: { type: STRING, primaryKey: false, autoIncrement: false },
            createTime: { type: DATE, primaryKey: false, autoIncrement: false },
            updateTime: { type: DATE, primaryKey: false, autoIncrement: false },

        }

    );

    // developer.sync({ force: true });


    return developer;
};
