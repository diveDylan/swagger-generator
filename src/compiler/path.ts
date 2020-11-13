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
import { makeRequestCommentHeader} from '../template/request'
import { ControllerPath } from '../../index'

// 处理路径得到映射关系
export function mapPaths(paths: SwaggerPaths):Map<string, ControllerPath[]> {
  const controllerMap: Map<string, ControllerPath[]> = new Map()
  Object.keys(paths).forEach(item => mapPath(item, paths[item], controllerMap))
  return controllerMap
}

export function mapPath(name: string, path: SwaggerPath<SwaggerMethod>, map:Map<string, ControllerPath[]>):void {
  // 处理请求
  Object.keys(path).map(method => {
    path[method].tags.forEach(tag => {
      if (map.has(tag)) {
        const tagMap = map.get(tag)
        map.set(tag, tagMap.concat(foramt(method, name)))
      } else {
        map.set(tag, [foramt(method, name)])
      }
    })
  })
  function foramt(method, name) {
    return {
      key: name,
      content: path[method]
    }
  }
}
// 处理controller
export function controllersMapHandler(controllersMap:Map<string, ControllerPath[]>, folderMap: Map<string, string>) {
  controllersMap.forEach((value, key, map) => {
    const folder = folderMap.get(key) // 目标目录
    value.forEach(item => {
      const {
        key, // 导出的请求名
        content // 未转换前请求的内容
      } = item
      
    })

  })

}
// 处理请求文件
export function createRequestFile() {
}


function formatOperationId(id: string): string {
  return id.split('Using')[0]
} 
