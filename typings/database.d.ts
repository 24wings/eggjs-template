/**
 * 阿里云上传的图片数据库结构
 */
interface IOSSFile {
  /**自定义 bucket 名字 */
  prefix?: string;
  bucket?: string;
  name?: string;
  url?: string;
  requestUrls?: string[];
  remotePort?: number;
  rt?: number;
  statusCode?: number;
  status?: number;
  remoteAddress?: string;
  size: number;
  shop_id?: number;
}

interface IGroupCompany {
  gcId?: number;
  gcName?: string;
  gcMenuIds?: string | number[];

}


interface IRole {
  roleId?: number;
  roleName?: string;
  roleType?: number;
  belongTo?: number;
  createTime?: Date;
  updateTime?: Date;
  menuIds?: string | number[];
  parentId?: number;

}

interface IEmployee {
  epId?: number;
  epName?: string;
  epUserName?: string;
  password?: string;
  passwordHash?: string;
  createTime?: Date;
  updateTime?: Date;
  menuIds?: string | number[];
  employeeType?: number;
  belongTo?: number;

}
