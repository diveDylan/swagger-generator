### Document
swagger generator via swagger V2 

### Background
目前市场上有比较成熟的`swagger codegen`，主要针对的后端同学提供`Java`版本也是官方推荐的工具。对前端同学不够友好，`jar`、`jdk`、`.sh`三巨山让推广成了很大问题，而且使用`npm script ` window的兼容度还是很差，所以准备用`node`改写一波

### Output
为了更好的开发体验，我们统一约定以下几点： 
1、核心输出目录结构如下

```
swagger                 
├─ types         
│  ├─ nterfaceName.ts     
│  ... 
├─ controller  // 从项目上出发，为了保证前后端理解的一致性我们还是选取了controller作为目录名称         
│  ├─ controllerName.ts     
│  ... 

```
2、开发目录结构
```bash
src                  
├─ compiler   解析模块       
│  ├─ definition.ts  解析definition生成types目录interface
│  ├─ path.ts    paths生成请求方法   
│  └─ tag.ts     tags生成请求文件   
└─ template          模板目录
│  ├─ interface.ts   
│  └─ request.ts   
index.ts 入口文件
lib   build 文件                              

```
3、后端同学定义swagger的约定
  -  controllerName 不能使用中文
  -  controllerRequest 不能使用中文

### TODO
- [ ]  unit tests
- [ ]  interface & types file 
- [ ]  deno version
- [ ]  swagger v3 schema







