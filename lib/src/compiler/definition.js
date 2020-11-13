"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transDefinitionToInterface = void 0;
const interface_1 = require("../template/interface");
/**
* @description 处理单个swagger definition返回 interface
* @param definition
*/
function transDefinitionToInterface(definition, langMap) {
    const modelsList = [];
    const properties = definition.properties;
    const requiredList = definition.required;
    function transDefinintion(properties) {
        return Object
            .keys(properties)
            .map(item => {
            const property = properties[item];
            if (langMap[property.type]) {
                return interface_1.makeInter(property.description, item, langMap[property.type], requiredList.includes(item));
            }
            if (property.$ref || property.type == 'array') {
                // deal ref link
                if (property.$ref) {
                    const interfaceName = getInterfaceByRef(property.$ref, item, property, modelsList);
                    return interface_1.makeInterTypes(property.description, item, interfaceName, requiredList.includes(item));
                }
                else { // array
                    if (property.items.$ref) { // array with ref link
                        const interfaceName = getInterfaceByRef(property.items.$ref, item, property, modelsList);
                        return interface_1.makeInterArr(property.description, item, interfaceName, requiredList.includes(item));
                    }
                    else {
                        // transDefinition property.item
                        // TODO: Item inner has $ref link
                        return interface_1.makeDepInter(property.description, item, getArrayInterface(property.items, langMap), requiredList.includes(item));
                    }
                }
            }
            return interface_1.makeInter(property.description, item, property.type, requiredList.includes(item));
        }).join('');
    }
    return {
        interface: transDefinintion(properties),
        modelsList,
    };
}
exports.transDefinitionToInterface = transDefinitionToInterface;
/**
 * @description 获取model关联的interface name
 * @param definition
 */
function getDefinitionName(definition) {
    const definitionLink = '#/definitions/';
    return definition.replace(definitionLink, '');
}
/**
 * @description 通过ref 返回interface name
 * @param ref
 * @param item
 * @param property
 * @param models
 */
function getInterfaceByRef(ref, item, property, models) {
    const interfaceLinkName = getDefinitionName(property.$ref);
    models.push(interfaceLinkName);
    return interfaceLinkName;
}
/**
 * @description 处理不是ref link的数组
 */
function getArrayInterface(arrayItem, langMap) {
    return Object.keys(arrayItem).map(item => {
        const property = arrayItem[item];
        if (langMap[property.type]) {
            return interface_1.makeInter(property.description, item, langMap[property.type], true);
        }
        return interface_1.makeInter(property.description, item, property.type, true);
    }).join('');
}
