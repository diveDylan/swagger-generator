export interface SwaggerGeneratorConstructorOptions {
  api: string // swagger api http url
  folder: string // generator folder path
  lang: SwaggerLang // enum
  baseUrl?: string
  headScript?: string
}

export interface CommonOject {
  [key: string]: any
}


// sawgger tag in api doc
export interface SwaggerTag {
  name: string
  description: string
}
declare const InTypes: ['body', 'query'] // 是否还有formdata
declare type InType = typeof InTypes[number]
declare const SwaggerMethods: ['post', 'get', 'put', 'delete']
export declare type SwaggerMethod = typeof SwaggerMethods[number]
declare const SwaggerLanguages: ['java', 'node']
export type SwaggerLang = typeof SwaggerLanguages[number]
export interface Params {
  in: InType
  name: string
  description: string
  required: boolean
  type?: string
  format?: string
  schema?: Schema
}

interface Schema {
  '$ref': string
}
export interface SwaggerResponses {
  [key: string]: {
    description: string
    schema?: Schema
  }
}

export interface SwaggerPath<T> {
   T: {
    tags: string []
    summary: string // api's summary
    description: string // api's description
    operationId: string
    consumes: string []
    produces: string []
    parameters: Params[]
    responses: SwaggerResponses
  }
}

export interface SwaggerPaths {
    [key: string]: SwaggerPath<SwaggerMethod>
}
export interface SwaggerApi {
  swagger: string
  info: {
    description: string
    version: string
    title: string
  }
  host: string
  basePath: string
  tags: SwaggerTag []
  paths: SwaggerPaths
  definitions: {
    [key: string]: Definition
  }
}

export interface Definition {
  type: string
  title: string
  required: string []
  properties: {
    [property: string]: InterfaceDes
  }
}
export interface InterfaceDes {
  type: string
  format?: string
  description: string
  $ref?: string
  items?: {
    $ref?: string
  }
}

export interface CommonObject {
  [prop: string]: any
}
