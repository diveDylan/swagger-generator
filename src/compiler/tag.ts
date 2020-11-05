
import {
  SwaggerApi,
  SwaggerTag,
  SwaggerPath,
  SwaggerMethod,
  Definition,
  CommonObject
} from '../../index.d'
import { moduleFileHeader} from '../template/interface'
import * as file from 'fs'
/**
 * @param url： swagger api url
 */
export function getJSON(url: string): Promise<SwaggerApi> {
  return fetch(url)
  .then(res => res.json())
}

/**
 * @description 通过tags创建模块目录和初始文件
 * @return tags和目录的字典
 * @param tags 
 * @param folder 
 */
export function createModules(tags:SwaggerTag[], folder: string, headScript: string ): Map<string, string> {
  const folderMap = new Map<string, string>()
  tags.forEach(item => {
    const name = getTagsFolderName(item.name)
    const directory = folder + '/' + name
    folderMap.set(item.name, directory)
    file.mkdirSync(directory)
    file.writeFileSync(directory + '/index.ts', moduleFileHeader(item.description, headScript))
    file.writeFileSync(directory + '/interface.ts', moduleFileHeader(item.description, headScript))
  })
  return folderMap
}


export function getTagsFolderName (name: string): string {
  const tagsArr: string[] = name.split('-')
  tagsArr.pop()
  return tagsArr.map((item, index) => {
    if(index !== 0 && item) { // upperCase at string[0]
      return item.charAt(0).toUpperCase() + item.slice(1)
    }
    return item
  }).join('')
}




