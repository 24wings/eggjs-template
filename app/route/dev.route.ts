import { Application } from "egg";

module.exports = (app: Application) => {
  let devApi = {
    hello: '/api/dev/hello'
  }

  let devCtrl = app.controller.dev;
  console.log('dev')
  return app.router.get(devApi.hello, devCtrl.hello)

};
