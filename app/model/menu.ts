
import { Sequelize, STRING, INTEGER, Instance, BOOLEAN } from "sequelize";


interface IMenu {
    text?: string;
    i18n?: string;
    parentId?: number;
    link?: string;
    externalink?: string;
    target?: string;
    icon?: string;
    badge?: number;
    badgeDot?: undefined;
    badgeStatus?: string;
    hide?: undefined;
    hideInBreadcrumb?: undefined;
    acl?: string;
    shortcut?: undefined;
    shortcutRoot?: undefined;
    reuse?: undefined;
    menuId?: number;
    menuType?: number;
    creatorId?: number;

}


type IMenuInstance = Instance<IMenu> & IMenu;

export let MENU = (database: Sequelize) => {
    const menu = database.define<IMenuInstance, IMenu>(
        "menu",
        {
            text: { type: STRING, primaryKey: false, autoIncrement: false },
            i18n: { type: STRING, primaryKey: false, autoIncrement: false },
            parentId: { type: INTEGER, primaryKey: false, autoIncrement: false },
            link: { type: STRING, primaryKey: false, autoIncrement: false },
            externalink: { type: STRING, primaryKey: false, autoIncrement: false },
            target: { type: STRING, primaryKey: false, autoIncrement: false },
            icon: { type: STRING, primaryKey: false, autoIncrement: false },
            badge: { type: INTEGER, primaryKey: false, autoIncrement: false },
            badgeDot: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            badgeStatus: { type: STRING, primaryKey: false, autoIncrement: false },
            hide: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            hideInBreadcrumb: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            acl: { type: STRING, primaryKey: false, autoIncrement: false },
            shortcut: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            shortcutRoot: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            reuse: { type: BOOLEAN, primaryKey: false, autoIncrement: false },
            menuId: { type: INTEGER, primaryKey: true, autoIncrement: true },
            menuType: { type: INTEGER, primaryKey: false, autoIncrement: false },
            creatorId: { type: INTEGER, primaryKey: false, autoIncrement: false },

        }

    );

    // menu.sync({ force: true });


    return menu;
};