export declare const makeRequestCommentHeader: (summary: string, description: string) => string;
export declare const makeRequestFunction: (url: string, functionName: string, method: "post" | "get" | "put" | "delete", requestTypes: string, responseTypes: string) => string;
export declare const makePostNoReqParamsFunction: (url: string, functionName: string, method: "post" | "get" | "put" | "delete", responseTypes: string) => string;
