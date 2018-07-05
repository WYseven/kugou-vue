
// 格式化对象为&连接
export function formatObjectToString(obj){
  return Object.keys(obj).map((item) => {
    return item + '=' + obj[item]
  }).join('&')
}

// 格式化queryString为对象
export  function formatStringToObject(query){
  let index = query.indexOf('?') === -1 ? 0 : 1
  return query.slice(index).split('&').reduce((o,item) => {
    let arr = item.split('=')
    o[arr[0]] = arr[1]
    return o
  },{})
}
export function addZero(n) {
  return n < 10 ? '0' + n : n;
}
// 秒转成分钟
export function sToM(d) {
  var m = addZero(parseInt(d / 60));
  var s = addZero(parseInt(d % 60));
  return m + ":" + s;
}