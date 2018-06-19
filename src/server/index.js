import axios from 'axios'
import { Indicator } from 'mint-ui';
let oneLeve = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8081/' : 'http://kssr.wykiss.cn/',
  responseType: 'json',
  transformRequest(data){
    return data;
  },
  transformResponse(data){
    if(!data) return;
    if(typeof data === 'string') data = JSON.parse(data);
    let o = {}
    if(data.list) {
      o.data = data.list;
      o.origin = 'singer'
    }else if(data.banner){
      o.data = data.data;
      o.banner = data.banner
      o.origin = 'home'
    }else if(data.rank){
      o.data = data.rank.list;
      o.origin = 'rank'
    }else if(data.plist){
      o.data = data.plist.list.info;
      o.origin = 'plist'
    }else if(data.singers){
      o.data = data.singers.list.info;
      o.origin = 'singers-list'
    }else if(data.songs){
      o.data = data.songs.list;
      o.info = data.info;
      o.origin = 'singers-info'
    }
    return o;
  }
})


let request = (path) => {
  return oneLeve(path).catch((e) => {
    // 网络错误处理
    if(e){
      Indicator.open({
        text: '请检查网络...',
        spinnerType: 'fading-circle'
      });
      var mask = document.createElement('div');
      mask.style.cssText = 'z-index:999;opacity:.5;position:fixed;height:100%;top: 0;right: 0;left: 0;right:0;background: #000;'
      document.body.appendChild(mask);
    }
  })
}

// 获取banner和新歌
export const getNewSongs = () => {
  return request('/proxy/?json=true')
}

// 获取排行数据
export const getRankList = () => {
  return request('/proxy/rank/list&json=true')
}
// 获取歌单数据
export const getPlist = () => {
  return request('/proxy/plist/index&json=true')
}

// 获取歌手分类数据
export const getSingers = () => {
  return request('/proxy/singer/class&json=true')
}

// 根据歌手分类id，获取歌手分类歌手

export const getSingerList = (params={classid:''}) => {
  return request(`/proxy/singer/list/${params.classid}?json=true`)
}

// 根据歌手id，获取歌手歌曲

export const getSingerInfo = (params = { singerid: '' }) => {
  return request(`/proxy/singer/info/${params.singerid}?json=true`)
}