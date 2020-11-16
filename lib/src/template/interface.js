"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelHeader = exports.makeDepInter = exports.makeInterArr = exports.makeInterTypes = exports.makeInter = exports.javaTypesMap = exports.InterfaceFileHeader = exports.moduleFileHeader = void 0;
// file header
exports.moduleFileHeader = (description, headScript = '') => (`
/**
 * @description: ${description}
 */

 import * as Types from './interface1'
 ${headScript}
`);
// interface file header
exports.InterfaceFileHeader = `
import * as Types from '../index.d'

`;
// java types transform
exports.javaTypesMap = {
    integer: 'number'
};
// create interface
exports.makeInter = (description, item, name, required = true) => `
/**
 * ${description}
 */
${item}${required ? '' : '?'}: ${name}\n
`;
// create interface in Types
exports.makeInterTypes = (description, item, name, required = true) => `
/**
* ${description}
*/
${item}${required ? '' : '?'}: Types.${name}\n
`;
// create interface Array
exports.makeInterArr = (description, item, name, required = true) => `
/**
 * ${description}
 */
${item}${required ? '' : '?'}: ${name}[]\n
`;
exports.makeDepInter = (description, item, interfaceInner, required = true) => `
/**
 * ${description}
 */
${item}${required ? '' : '?'}: {
  ${interfaceInner}
}\n
`;
exports.modelHeader = `
/**
 * @description 共用的ts接口文件
 */
`;
