const ci = require('miniprogram-ci')
var versionNo = process.argv[2] ? process.argv[2] : '1.1.1'
;(async () => {
  const project = new ci.Project({
    appid: 'wx9f88a76ebd756792',
    type: 'miniProgram',
    projectPath: '/Users/howard/study/研究生/课程/软件工程与自动化/miniprogram-demo',
    privateKeyPath: '/Users/howard/study/研究生/课程/软件工程与自动化/miniprogram-demo/private.wx9f88a76ebd756792.key',
    ignores: ['node_modules/**/*'],
  })
  await ci.upload({
    project,
    version: versionNo,
    desc: 'hello',
    setting: {
      es6: true,
    },
    onProgressUpdate: console.log,
  })
})()