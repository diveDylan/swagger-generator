import { SwaggerMethod } from '../../index.d';
export declare const makeRequestCommentHeader: (summary: string, description: string) => string;
export declare const makeRequestFunction: (url: string, functionName: string, method: SwaggerMethod, requestTypes: string, responseTypes: string) => string;
export declare const makePostNoReqParamsFunction: (url: string, functionName: string, method: SwaggerMethod, responseTypes: string) => string;
