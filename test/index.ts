import { SwaggerGenerator } from '../mod.ts'
import { SwaggerGeneratorConstructorOptions } from '../index.d.ts'

function tests() {
  new SwaggerGenerator({
    api: 'http://10.8.110.1:19130/v2/api-docs',
    folder: './test',
    lang: 'java',
    headScript: `import request from '@/api/config'`
  })
}

tests()