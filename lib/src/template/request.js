"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequestFunction = void 0;
// 组装请求函数
exports.makeRequestFunction = (props) => {
    const data = props.data ? `data: Types.${props.dataInterface},` : '';
    const dataBody = props.data ? `data,` : '';
    const params = props.params ? `params: Types.${props.paramsInterface} ` : '';
    const paramsBody = props.params ? `params,` : '';
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
  
  `;
};
