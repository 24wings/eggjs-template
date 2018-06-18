import { Sequelize, STRING, INTEGER, Instance, } from "sequelize";


interface IMarket {
    mktId?: number;
    mktName?: string;
    telephone?: string;
    province?: string;
    city?: string;
    area?: string;
    lat?: number;
    lng?: number;
    status?: number;
    licenseUrl?: string;
    legalPeson?: string;
    legalPhone?: string;
    gcId?: number;

}


type IMarketInstance = Instance<IMarket> & IMarket;

export let MARKET = (database: Sequelize) => {
    const market = database.define<IMarketInstance, IMarket>(
        "market",
        {
            mktId: { type: INTEGER, primaryKey: true, autoIncrement: true },
            mktName: { type: STRING, primaryKey: false, autoIncrement: false },
            telephone: { type: STRING, primaryKey: false, autoIncrement: false },
            province: { type: STRING, primaryKey: false, autoIncrement: false },
            city: { type: STRING, primaryKey: false, autoIncrement: false },
            area: { type: STRING, primaryKey: false, autoIncrement: false },
            lat: { type: INTEGER, primaryKey: false, autoIncrement: false },
            lng: { type: INTEGER, primaryKey: false, autoIncrement: false },
            status: { type: INTEGER, primaryKey: false, autoIncrement: false },
            licenseUrl: { type: STRING, primaryKey: false, autoIncrement: false },
            legalPeson: { type: STRING, primaryKey: false, autoIncrement: false },
            legalPhone: { type: STRING, primaryKey: false, autoIncrement: false },
            gcId: { type: INTEGER, primaryKey: false, autoIncrement: false },

        }

    );

    // market.sync({ force: true });


    return market;
};
