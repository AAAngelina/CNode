import axios from 'axios';

const instance = axios.create({
    baseURL: " https://cnodejs.org/api/v1",
    timeout: 3000
});

async function getTopicsList(tab = "all", page = 1, limit = 10, mdrender = true) {
    return await instance.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`) // 路由参数
};

async function getTopicDetail(id) {
    return await instance.get(`/topic/${id}`)  // 动态路由
};

async function getUser(loginname) {
    return await instance.get(`/user/${loginname}`)  // 动态路由
};


export { getTopicsList, getTopicDetail,getUser }