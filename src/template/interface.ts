// file header
export const moduleFileHeader = (description:string, headScript: string = '') =>(
`
/**
 * @description: ${description}
 */

 import * as Types from './interface'
 ${headScript}
`)
// interface file header
export const InterfaceFileHeader = `
import * as Types from '../index.d'

`
// java types transform
export const javaTypesMap = {
  integer: 'number'
}
// create interface
export const makeInter = (description: string, item: string, name: string, required: boolean = true) => `
/**
 * ${description}
 */
${item}${required ? '': '?'}: ${name}\n
`
// create interface in Types
export const makeInterTypes = (description: string, item: string, name: string, required: boolean = true) =>`
/**
* ${description}
*/
${item}${required ? '': '?'}: Types.${name}\n
`
// create interface Array
export const makeInterArr = (description: string, item: string, name: string,  required: boolean = true) => `
/**
 * ${description}
 */
${item}${required ? '': '?'}: ${name}[]\n
`
export const makeDepInter = (description: string, item: string, interfaceInner: string,  required: boolean = true) =>
`
/**
 * ${description}
 */
${item}${required ? '': '?'}: {
  ${interfaceInner}
}\n
`

