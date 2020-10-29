/**
 * @description complier swagger data
 * v2 schema https://swagger.io/specification/v2/#definitionsObject
 */
import { Definition, CommonObject } from './index.d';
/**
* @description 处理单个swagger definition返回 interface
* @param definition
*/
export declare function transDefinitionToInterface(definition: Definition, langMap: CommonObject): {
    interface: string;
    modelsList: string[];
};
