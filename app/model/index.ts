import Sequlize = require("sequelize");
import { OSSFile } from './ossFile';
import { MENU } from './menu';
import { DEVELOPER } from './developer';
import { MARKET } from './market';
import { GROUP_COMPANY } from './groupCompany';
import { SHOP } from './shop';
import { EMPLOYEE } from './employee';
import { ROLE } from './role';
import { DB } from './db';
import { TABLE } from './table';
import { TEMPLATE } from './template';
export let marketDb = new Sequlize("market", "misheng", "misheng", {
  host: "47.100.23.203",
  dialect: "mysql",
  pool: {
    max: 5
  },
  define: {
    underscored: false,
    freezeTableName: true
  }
});

export let ossFile = OSSFile(marketDb);
export let menu = MENU(marketDb);
export let developer = DEVELOPER(marketDb);
export let market = MARKET(marketDb);
export let groupCompany = GROUP_COMPANY(marketDb);
export let shop = SHOP(marketDb);
export let employee = EMPLOYEE(marketDb);
export let role = ROLE(marketDb);
export let db = DB(marketDb);
export let table = TABLE(marketDb);
export let template = TEMPLATE(marketDb);
// marketDb.sy