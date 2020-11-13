"use strict";
/**
 * 为了维护性，可读性
 * 优先生成每个controller对应的请求列表
 * 根据controller列表生成文件
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 处理路径得到映射关系
function mapPaths(paths) {
    const controllerMap = new Map();
    Object.keys(paths).forEach(item => mapPath(item, paths[item], controllerMap));
    return controllerMap;
}
exports.mapPaths = mapPaths;
function mapPath(name, path, map) {
    // 处理请求
    Object.keys(path).map(method => {
        path[method].tags.forEach(tag => {
            if (map.has(tag)) {
                const tagMap = map.get(tag);
                map.set(tag, tagMap.concat(foramt(method, name)));
            }
            else {
                map.set(tag, [foramt(method, name)]);
            }
        });
    });
    function foramt(method, name) {
        return {
            key: name,
            content: path[method]
        };
    }
}
exports.mapPath = mapPath;
// 处理controller
function controllersMapHandler(controllersMap, folderMap) {
    controllersMap.forEach((value, key, map) => {
        const folder = folderMap.get(key); // 目标目录
        value.forEach(item => {
            const { key, // 导出的请求名
            content // 未转换前请求的内容
             } = item;
        });
    });
}
exports.controllersMapHandler = controllersMapHandler;
// 处理请求文件
function createRequestFile() {
}
exports.createRequestFile = createRequestFile;
function formatOperationId(id) {
    return id.split('Using')[0];
}
