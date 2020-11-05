"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 组装请求函数头
exports.makeRequestCommentHeader = (summary, description) => `
/**
 * 
 * @summary ${summary}
 * @description ${description}
 */\n
`;
// 组装请求函数
exports.makeRequestFunction = (url, functionName, method, requestTypes, responseTypes) => {
    return `
export const ${functionName} = (data: Types.${requestTypes}): Promise<Types.${responseTypes}> => request.${method}('${url}, {data})
  
  `;
};
// 处理没有入参的请求
exports.makePostNoReqParamsFunction = (url, functionName, method, responseTypes) => {
    return `
export const ${functionName} = (): Promise<Types.${responseTypes}> => request.${method}('${url}, {data})
  
  `;
};
