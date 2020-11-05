/**
 * 为了维护性，可读性
 * 优先生成每个controller对应的请求列表
 * 根据controller列表生成文件
 *
 */
import { SwaggerPath, SwaggerPaths, SwaggerMethod } from '../../index.d';
import { ControllerPath } from '../../index';
export declare function mapPaths(paths: SwaggerPaths): Map<string, ControllerPath[]>;
export declare function mapPath(name: string, path: SwaggerPath<SwaggerMethod>, map: Map<string, ControllerPath[]>): void;
export declare function controllersMapHandler(controllersMap: Map<string, string[]>, folderMap: Map<string, string>): void;
export declare function createRequestFile(): void;
