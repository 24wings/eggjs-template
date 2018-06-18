import { Application } from "egg";

export default (app: Application) => {
  require("./route/dev.route")(app);
  require("./route/group.route")(app);

};
