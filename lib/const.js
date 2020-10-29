"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleFileHeader = (description, headScript = '') => (`
/**
 * @description: ${description}
 */

 import * as Types from './interface'
 ${headScript}
`);
exports.InterfaceFileHeader = `
import * as Types from '../index.d'

`;
exports.javaTypesMap = {
    integer: 'number'
};
exports.makeInter = (description, item, name, required = true) => `
/**
 * ${description}
 */
${item}${required ? '' : '?'}: ${name}\n
`;
exports.makeInterTypes = (description, item, name, required = true) => `
/**
* ${description}
*/
${item}${required ? '' : '?'}: Types.${name}\n
`;
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
