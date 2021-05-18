# logcommit

根据commit快速输出changelog，支持按照人、action筛选输出md文档或html文档

## Installation & 安装

```bash
yarn add logcommit
```

or & 或

```bash
npm install logocmmit
```

## Usage & 使用

### 默认配置

```bash
logcommit
```

会输出文件`changlog`到根目录下

## 第一期计划
支持根据
* feat：新增业务功能
* fix：修复bug
* docs：文档修改
* style：代码格式化
* refactor：重构代码，对原有功能原则上无感。
* perf：性能优化
* test：增加测试
* build：构建相关
* ci：持续继承相关
* chore：源码文档无关修改
* revert：回退

字段解析成对应MD文件