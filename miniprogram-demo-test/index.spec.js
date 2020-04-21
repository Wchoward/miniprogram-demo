const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  let page
  let test
  beforeAll(async () => {
    miniProgram = await automator.launch({
      projectPath: './'
    })
    page = await miniProgram.reLaunch('/page/component/index')
    await page.waitFor(500)
  }, 30000)
  it('desc', async (done) => {
    const desc = await page.$('.index-desc')
    expect(desc.tagName).toBe('view')
    expect(await desc.text()).toContain('以下将展示小程序官方组件能力')
    done()
  })
  it('list', async () => {
    const lists = await page.$$('.kind-list-item')
    expect(lists.length).toBe(8)
    const list = await lists[0].$('.kind-list-item-hd')
    expect(await list.text()).toBe('视图容器')
  })
  it('list action', async () => {
    const listHead = await page.$('.kind-list-item-hd')
    expect(await listHead.attribute('class')).toBe('kind-list-item-hd')
    await listHead.tap()
    await page.waitFor(200)
    expect(await listHead.attribute('class')).toBe(
      'kind-list-item-hd kind-list-item-hd-show',
    )
    await listHead.tap()
    await page.waitFor(200)
    expect(await listHead.attribute('class')).toBe('kind-list-item-hd')
    await listHead.tap()
    await page.waitFor(200)
    const item = await page.$('.index-bd navigator')
    await item.tap()
    await page.waitFor(500)
    expect((await miniProgram.currentPage()).path).toBe('page/component/pages/view/view')
  })
  afterAll(async () => {
    await miniProgram.close()
  })
})
