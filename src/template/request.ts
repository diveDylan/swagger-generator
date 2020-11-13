import { SwaggerMethod, CommonObject } from '../../index.d'
// 组装请求函数头
export const makeRequestCommentHeader = (summary: string, description: string): string => `
/**
 * 
 * @summary ${summary}
 * @description ${description}
 */\n
`

interface RequestTemplateProps {
  url: string
  method: SwaggerMethod
  name: string
  params?: CommonObject
  paramsInterface?: string
  data?: CommonObject
  dataInterface?: string
  headers?: Headers
  responseInterface: string

}
// 组装请求函数
export const makeRequestFunction = (props: RequestTemplateProps): string => {
  const data = props.data ? `data: Types.${props.dataInterface},` : ''
  const dataBody = props.data ? `data,` : ''
  const params = props.params ? `params: Types.${props.paramsInterface} ` : ''
  const paramsBody = props.params ? `params,` : ''
  return `
export const ${props.name} = ({${data}${params}}, signal): Promise<Types.${props.responseInterface}> => 
  request.${props.method}('${props.url}, {
    ${dataBody}
    ${paramsBody}
  })
  
  `
}


