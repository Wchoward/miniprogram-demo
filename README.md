# 微信小程序自动化demo
## 使用

使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)打开该示例代码。

## 自动化

打开终端进入命令行，输入

```shell
bash CICDscript.sh
```
即可开始自动化流程。

具体分为四步：

1. 代码规范性检查，采用eslint
2. 单元测试，测试代码位于`miniprogram-demo-test/unit.test.js`
3. 功能测试，测试代码位于`miniprogram-demo-test/index.test.js`
4. 代码上传，上传脚本位于`ciscript.js`

