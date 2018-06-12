
export let routes = [
  {
    path: '/',
    title: '新歌',
    render: true,
    component: {
      template: `<div>首页</div>`
    }
  },
  {
    path: '/rank',
    title: '排行',
    render: true,
    component: {
      template: `<div>排行</div>`
    }
  },
  {
    path: '/plist',
    title: '歌单',
    render: true,
    component: {
      template: `<div>歌单</div>`
    }
  },
  {
    path: '/singer',
    title: '歌手',
    render: true,
    component: {
      template: `<div>歌手</div>`
    }
  }
]