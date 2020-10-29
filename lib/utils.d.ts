import { SwaggerApi, SwaggerTag, CommonObject } from './index.d';
/**
 * @param url： swagger api url
 */
export declare function getJSON(url: string): Promise<SwaggerApi>;
/**
 * @description 通过tags创建模块目录和初始文件
 * @return tags和目录的字典
 * @param tags
 * @param folder
 */
export declare function createModules(tags: SwaggerTag[], folder: string, headScript: string): CommonObject;
export declare function getTagsFolderName(name: string): string;
export declare function dealRequest(): void;
