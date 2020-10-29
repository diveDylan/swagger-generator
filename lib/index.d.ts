import { SwaggerGeneratorConstructorOptions, SwaggerLang, SwaggerApi } from './index.d';
export declare class SwaggerGenerator {
    api: string;
    folder: string;
    data?: SwaggerApi;
    lang: SwaggerLang;
    directoryMap?: object;
    baseUrl: string;
    langMap?: object;
    headScript: string;
    constructor(options: SwaggerGeneratorConstructorOptions);
    init(): Promise<void>;
}
