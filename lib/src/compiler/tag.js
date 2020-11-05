"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("../template/interface");
const file = require("fs");
const fetch = require("node-fetch");
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
    const folderMap = new Map();
    file.writeFileSync(folder + '/index.d.ts', interface_1.modelHeader);
    tags.forEach(item => {
        const name = getTagsFolderName(item.name);
        const directory = folder + '/' + name;
        folderMap.set(item.name, directory);
        file.mkdirSync(directory);
        file.writeFileSync(directory + '/index.ts', interface_1.moduleFileHeader(item.description, headScript));
        file.writeFileSync(directory + '/interface.ts', interface_1.InterfaceFileHeader);
    });
    return folderMap;
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
