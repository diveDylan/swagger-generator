/**
 * @description complier swagger data
 * v2 schema https://swagger.io/specification/v2/#definitionsObject
 */
import {
  SwaggerApi,
  SwaggerTag,
  SwaggerPath,
  SwaggerMethod,
  Definition,
  CommonObject,
  InterfaceDes
} from '../../index.d'
import {
  makeDepInter,
  makeInter,
  makeInterArr,
  makeInterTypes
} from '../template/interface'

 /**
 * @description 处理单个swagger definition返回 interface
 * @param definition 
 */
export function transDefinitionToInterface(definition: Definition, langMap: CommonObject): {
  interface: string
  modelsList: string[]
} {
  const modelsList: string[] = []
  const properties = definition.properties
  const requiredList = definition.required
  function transDefinintion(properties: {
    [key: string]: InterfaceDes
  }): string {
    return Object
      .keys(properties)
      .map(item => {
        const property: InterfaceDes = properties[item]
        if (langMap[property.type]) {
          return makeInter(property.description, item, langMap[property.type], requiredList.includes(item))
        }
        if (property.$ref || property.type == 'array') { 
          // deal ref link
         if (property.$ref) {
            const interfaceName = getInterfaceByRef(property.$ref, item, property, modelsList)
            return makeInterTypes(property.description, item, interfaceName, requiredList.includes(item))
         } else { // array
          if(property.items.$ref) { // array with ref link
            const interfaceName = getInterfaceByRef(property.items.$ref, item, property, modelsList)
            return makeInterArr(property.description, item, interfaceName, requiredList.includes(item))
          } else {
            // transDefinition property.item
            // TODO: Item inner has $ref link
            return makeDepInter(property.description, item, getArrayInterface(property.items,langMap), requiredList.includes(item))
          }
         }
      }
      return makeInter(property.description, item, property.type, requiredList.includes(item))
    }).join('')
  }
  return {
    interface: transDefinintion(properties),
    modelsList,
  }
  
}
/**
 * @description 获取model关联的interface name
 * @param definition 
 */
function getDefinitionName(definition: string): string {
  const definitionLink = '#/definitions/'
  return definition.replace(definitionLink, '')
}
/**
 * @description 通过ref 返回interface name
 * @param ref 
 * @param item 
 * @param property 
 * @param models 
 */
function getInterfaceByRef(ref: string, item: string, property: InterfaceDes,  models: string[]) {
  const interfaceLinkName = getDefinitionName(property.$ref)
  models.push(interfaceLinkName)
  return interfaceLinkName
}

/**
 * @description 处理不是ref link的数组
 */
function getArrayInterface(arrayItem, langMap): string {
  return Object.keys(arrayItem).map(item => {
    const property = arrayItem[item]
    if (langMap[property.type]) {
      return makeInter(property.description, item, langMap[property.type], true)
    }
    return makeInter(property.description, item, property.type, true)
  }).join('')
}


