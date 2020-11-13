import { SwaggerMethod, CommonObject } from '../../index.d'

interface RequestTemplateProps {
  url: string
  method: SwaggerMethod 
  name: string
  params?: CommonObject // query
  paramsInterface?: string
  data?: CommonObject // body
  dataInterface?: string
  headers?: Headers
  responseInterface: string
  summary: string
  description: string
}
// 组装请求函数
export const makeRequestFunction = (props: RequestTemplateProps): string => {
  const data = props.data ? `data: Types.${props.dataInterface},` : ''
  const dataBody = props.data ? `data,` : ''
  const params = props.params ? `params: Types.${props.paramsInterface} ` : ''
  const paramsBody = props.params ? `params,` : ''
  return `
/**
 * 
 * @summary ${props.summary}
 * @description ${props.description}
 */\n
export const ${props.name} = ({${data}${params}}, signal): Promise<Types.${props.responseInterface}> => 
  request.${props.method}('${props.url}, {
    ${dataBody}
    ${paramsBody}
  })
  
  `
}


