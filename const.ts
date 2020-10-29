
export const moduleFileHeader = (description:string, headScript: string = '') =>(
`
/**
 * @description: ${description}
 */

 import * as Types from './interface'
 ${headScript}
`)

export const InterfaceFileHeader = `
import * as Types from '../index.d'

`

export const javaTypesMap = {
  integer: 'number'
}

export const makeInter = (description: string, item: string, name: string, required: boolean = true) => `
/**
 * ${description}
 */
${item}${required ? '': '?'}: ${name}\n
`
export const makeInterTypes = (description: string, item: string, name: string, required: boolean = true) =>`
/**
* ${description}
*/
${item}${required ? '': '?'}: Types.${name}\n
`

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

