
import {
  SwaggerGeneratorConstructorOptions,
  SwaggerLang,
  SwaggerApi,
  Definition,
  SwaggerPaths,
  SwaggerPath,
  SwaggerMethod
} from './index.d'

import {
  getJSON,
  createModules
} from './src/compiler/tag'
import {
  mapPaths
} from './src/compiler/path'

import * as Types from './src/template/interface'
export interface ControllerPath  {
  key: string
  content: SwaggerPath<SwaggerMethod>

}
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
  public controllerMap: Map<string, ControllerPath[]>
  constructor(options:SwaggerGeneratorConstructorOptions) {
    this.api = options.api
    this.folder = options.folder
    this.lang = options.lang
    this.controllerMap = new Map()
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
    // 按模块创建目录
    this.directoryMap = createModules(this.data.tags, this.folder, this.headScript)
    // 处理paths得到controller下的请求列表
    this.controllerMap = mapPaths(this.data.paths)
    console.log('controllerMap', this.controllerMap,this.directoryMap )
  }

}

const testCase: SwaggerGeneratorConstructorOptions = {
  api: 'http://10.8.110.1:19130/v2/api-docs',
  folder: './test',
  lang: 'java'
}

function run():void {
  new SwaggerGenerator(testCase)
}

run()

