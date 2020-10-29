"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const Types = require("./const");
class SwaggerGenerator {
    constructor(options) {
        this.api = options.api;
        this.folder = options.folder;
        this.lang = options.lang;
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
        this.data = await utils_1.getJSON(this.api);
        // 按模块创建
        this.directoryMap = utils_1.createModules(this.data.tags, this.folder, this.headScript);
        // 
    }
}
exports.SwaggerGenerator = SwaggerGenerator;
