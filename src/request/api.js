import request from './request'


// 获取搜索内容信息
export const getMusicInfoApi = (params) => request.get(`cloudsearch?keywords=${params.keywords}&limit=${params.limit}&offset=${params.offset}&type=${params.type}`);
//获取音乐连接
export const playMusicApi = (params) => request.get(`song/url?id=${params.id}`);
