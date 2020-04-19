const automator = require('miniprogram-automator')

automator.launch({
  cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath: '/Users/howard/study/研究生/课程/软件工程与自动化/miniprogram-demo', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/page/component/index')
  await page.waitFor(500)
  const element = await page.$('.kind-list-item-hd')
  console.log(await element.attribute('class'))
  await element.tap()

  await miniProgram.close()
})