import { SwaggerMethod, } from '../../index.d'
// 组装请求函数头
export const makeRequestCommentHeader = (summary: string, description: string): string => `
/**
 * 
 * @summary ${summary}
 * @description ${description}
 */\n
`
// 组装请求函数
export const makeRequestFunction = (url: string, functionName: string, method: SwaggerMethod, requestTypes: string, responseTypes: string): string => {
  return `
export const ${functionName} = (data: Types.${requestTypes}): Promise<Types.${responseTypes}> => request.${method}('${url}, {data})
  
  `
}


// 处理没有入参的请求
export const makePostNoReqParamsFunction = (url: string, functionName: string, method: SwaggerMethod, responseTypes: string): string => {
  return `
export const ${functionName} = (): Promise<Types.${responseTypes}> => request.${method}('${url}, {data})
  
  `
}
