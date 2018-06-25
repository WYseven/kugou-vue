import NavBar from '@/components/nav-bar/'

let NewSong = () => import('@/views/new-song/new-song')
let Rank = () => import('@/views/rank/rank')
let Plist = () => import('@/views/plist/plist')
let Singer = () => import('@/views/singer/singer')
let SingerList = () => import('@/views/singer/singer-list/singer-list')
let SingerSong = () => import('@/views/singer/singer-song/singer-song')

import gotoBack from '@/components/gotoBack/gotoback'

export let routes = [
  {
    path: '/',
    title: '新歌',
    name: 'NewSong',
    components: {
      navBar: NavBar,
      default:NewSong
    },
    render: true
  },
  {
    path: '/rank',
    title: '排行',
    name: 'Rank',
    components: {
      navBar: NavBar,
      default: Rank
    },
    render: true
  },
  {
    path: '/plist',
    title: '歌单',
    name: 'Plist',
    components: {
      navBar: NavBar,
      default: Plist
    },
    render: true
  },
  {
    path: '/singer',
    title: '歌手',
    name: 'Singer',
    components: {
      navBar: NavBar,
      default: Singer
    },
    render: true
  },
  {
    path: '/singer/list/:id',
    name: 'singer_list',
    components: {
      navBar: gotoBack,
      default: SingerList
    },
    render: false
  },
  {
    path: '/singer/songs/:id',
    name: 'singer_songs',
    components: {
      navBar: {
        components: { gotoBack},
        template: '<gotoBack />'
      },
      default: SingerSong
    },
    render: false
  },
]