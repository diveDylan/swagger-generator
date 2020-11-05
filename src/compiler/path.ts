/**
 * 为了维护性，可读性
 * 优先生成每个controller对应的请求列表
 * 根据controller列表生成文件
 * 
 */

import {
  SwaggerApi,
  SwaggerTag,
  SwaggerPath,
  SwaggerPaths,
  SwaggerMethod,
  Definition,
  CommonObject,
  InterfaceDes,
  Params
} from '../../index.d'
import * as file from 'fs'
import { makeRequestCommentHeader,  } from '../template/request'

// 处理路径得到映射关系
export function mapPaths(paths: SwaggerPaths):Map<string, string[]> {
  const controllerMap: Map<string, string[]> = new Map()
  Object.keys(paths).forEach(item => mapPath(item, paths[item], controllerMap))
  return controllerMap
}

export function mapPath(name: string, path: SwaggerPath<SwaggerMethod>, map:Map<string, string[]>) {
  // 处理请求
  Object.keys(path).map(method => {
    path[method].tags.forEach(tag => {
      if (map.has(tag)) {
        const tagMap = map.get(tag)
        !tagMap.includes(name) && map.set(tag, tagMap.concat(name))
      } else {
        map.set(tag, [name])
      }
    })
  })
}
// 处理controller
export function controllersMapHandler() {
}
// 处理请求文件
export function createRequestFile() {
}


function formatOperationId(id: string): string {
  return id.split('Using')[0]
} 
