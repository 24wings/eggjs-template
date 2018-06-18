
import { Controller } from "egg";
// import db =require('../model');

export default class extends Controller {
    hello() {
        let { name } = this.ctx.query;
        this.ctx.body = { ok: true, data: 'hello ' + name }
    }
}
