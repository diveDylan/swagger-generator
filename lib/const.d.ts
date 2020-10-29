export declare const moduleFileHeader: (description: string, headScript?: string) => string;
export declare const InterfaceFileHeader = "\nimport * as Types from '../index.d'\n\n";
export declare const javaTypesMap: {
    integer: string;
};
export declare const makeInter: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeInterTypes: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeInterArr: (description: string, item: string, name: string, required?: boolean) => string;
export declare const makeDepInter: (description: string, item: string, interfaceInner: string, required?: boolean) => string;
