export declare const moduleFileHeader: (description: string, headScript?: string) => string;
export declare const InterfaceFileHeader = "\nimport * as Types from '../index.d'\n\n";
export declare const javaTypesMap: {
    integer: string;
};
export declare const makeInter: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeInterTypes: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeInterArr: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeDepInter: (description: string, item: string, interfaceInner: string, required?: boolean) => string;
export declare const modelHeader = "\n/**\n * @description \u5171\u7528\u7684ts\u63A5\u53E3\u6587\u4EF6\n */\n";
