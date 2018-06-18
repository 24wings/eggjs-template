import { Application } from "egg";

module.exports = (app: Application) => {
  let devApi = {
    hello: '/api/dev/hello'
  }

  let devCtrl = app.controller.dev;
  app.router.post(devApi.hello, devCtrl.hello)

};
