"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerGenerator = void 0;
const tag_1 = require("./src/compiler/tag");
const path_1 = require("./src/compiler/path");
const Types = require("./src/template/interface");
class SwaggerGenerator {
    constructor(options) {
        this.api = options.api;
        this.folder = options.folder;
        this.lang = options.lang;
        this.controllerMap = new Map();
        this.baseUrl = options.baseUrl || '';
        this.headScript = options.headScript || '';
        this.init();
    }
    async init() {
        switch (this.lang) {
            case 'java':
                this.langMap = Types.javaTypesMap;
                break;
            default:
                this.langMap = Types.javaTypesMap;
                break;
        }
        this.data = await tag_1.getJSON(this.api);
        // 按模块创建目录
        this.directoryMap = tag_1.createModules(this.data.tags, this.folder, this.headScript);
        // 处理paths得到controller下的请求列表
        this.controllerMap = path_1.mapPaths(this.data.paths);
        console.log('controllerMap', this.controllerMap, this.directoryMap);
    }
}
exports.SwaggerGenerator = SwaggerGenerator;
const testCase = {
    api: 'http://10.8.110.1:19130/v2/api-docs',
    folder: './test',
    lang: 'java'
};
function run() {
    new SwaggerGenerator(testCase);
}
run();
