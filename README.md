# logcommit

# 背景
根据commit快速输出changelog，支持按照人、action筛选输出md文档或html文档

[Github地址：https://github.com/CapDuan/logcommit](https://github.com/CapDuan/logcommit) 
# ✨注意
提交信息需要按照 [Git angular提交规范](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)提交，缺少规范条件，会将所有commit信息归类到`其他`
## Installation & 安装

```bash
yarn add logcommit
```

or & 或

```bash
npm install logocmmit
```

## Usage & 使用

### 默认查看

```bash
yarn run logcommit 
or
npm run logcommit
```
### 默认输出

```bash
yarn run logcommit > changelog.md
```
### 指定「作者>「开始统计时间>「结束统计时间>输出到「changelog.md」
```shell
logcommit -at <author> -sd <startDate> -ed <endDate>  > changelog.md

```

### 参数

```shell
Usage: logcommit [options]

Options:
  -at, --author <author> 筛选作者
  -sd, --startDate <startDate> 起始时间
  -ed, --endDate <endDate> 结束时间
  -h, --help                    

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
* chore：源码文档无关修改

* build：构建相关
* ci：持续继承相关

* revert：回退

字段解析成对应MD文件