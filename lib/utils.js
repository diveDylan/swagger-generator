"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("./const");
const file = require("fs");
/**
 * @param url： swagger api url
 */
function getJSON(url) {
    return fetch(url)
        .then(res => res.json());
}
exports.getJSON = getJSON;
/**
 * @description 通过tags创建模块目录和初始文件
 * @return tags和目录的字典
 * @param tags
 * @param folder
 */
function createModules(tags, folder, headScript) {
    const obj = {};
    tags.forEach(item => {
        const name = getTagsFolderName(item.name);
        const directory = folder + '/' + name;
        obj[item.name] = directory;
        file.mkdirSync(directory);
        file.writeFileSync(directory + '/index.ts', const_1.moduleFileHeader(item.description, headScript));
        file.writeFileSync(directory + '/interface.ts', const_1.moduleFileHeader(item.description, headScript));
    });
    return obj;
}
exports.createModules = createModules;
function getTagsFolderName(name) {
    const tagsArr = name.split('-');
    tagsArr.pop();
    return tagsArr.map((item, index) => {
        if (index !== 0 && item) { // upperCase at string[0]
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
        return item;
    }).join('');
}
exports.getTagsFolderName = getTagsFolderName;
function dealRequest() {
}
exports.dealRequest = dealRequest;
