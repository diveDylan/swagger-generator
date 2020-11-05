import { SwaggerGeneratorConstructorOptions, SwaggerLang, SwaggerApi, Definition, SwaggerPath, SwaggerMethod } from './index.d';
export interface ControllerPath {
    key: string;
    content: SwaggerPath<SwaggerMethod>;
}
export declare class SwaggerGenerator {
    api: string;
    folder: string;
    data?: SwaggerApi;
    lang: SwaggerLang;
    directoryMap?: object;
    baseUrl: string;
    langMap?: object;
    headScript: string;
    models: Definition[];
    controllerMap: Map<string, ControllerPath[]>;
    constructor(options: SwaggerGeneratorConstructorOptions);
    init(): Promise<void>;
}
