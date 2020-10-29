
import {
  SwaggerGeneratorConstructorOptions,
  SwaggerLang,
  SwaggerApi
} from './index.d'

import {
  getJSON,
  createModules
} from './utils'

import * as Types from './const'

export class SwaggerGenerator {
  public api: string
  public folder: string
  public data?: SwaggerApi
  public lang: SwaggerLang
  public directoryMap?: object
  public baseUrl: string
  public langMap?: object
  public headScript: string

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
    // 

  }

}




