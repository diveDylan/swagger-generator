import { SwaggerMethod, CommonObject } from '../../index.d';
interface RequestTemplateProps {
    url: string;
    method: SwaggerMethod;
    name: string;
    params?: CommonObject;
    paramsInterface?: string;
    data?: CommonObject;
    dataInterface?: string;
    headers?: Headers;
    responseInterface: string;
    summary: string;
    description: string;
}
export declare const makeRequestFunction: (props: RequestTemplateProps) => string;
export {};
