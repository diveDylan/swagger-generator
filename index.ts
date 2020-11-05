
import {
  SwaggerGeneratorConstructorOptions,
  SwaggerLang,
  SwaggerApi,
  Definition
} from './index.d'

import {
  getJSON,
  createModules
} from './src/utils'

import * as Types from './src/const'

export class SwaggerGenerator {
  public api: string
  public folder: string
  public data?: SwaggerApi
  public lang: SwaggerLang
  public directoryMap?: object
  public baseUrl: string
  public langMap?: object
  public headScript: string
  public models: Definition[] // 类型的接口聚合文件--无法匹配到controller的一些interface

  constructor(options:SwaggerGeneratorConstructorOptions) {
    this.api = options.api
    this.folder = options.folder
    this.lang = options.lang
    this.baseUrl = options.baseUrl || ''
    this.headScript = options.headScript || ''
    this.init()
  }

  public async init() {
    switch (this.lang) {
      case 'java':
        this.langMap = Types.javaTypesMap
        break;
      default:
        this.langMap = Types.javaTypesMap
        break;
    }
    this.data = await getJSON(this.api)
    // 按模块创建
    this.directoryMap = createModules(this.data.tags, this.folder, this.headScript)
    // 按路径创建接口和请求文件

  }

}




