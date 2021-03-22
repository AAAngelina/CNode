import IndexPage from '../views/index';
import TopicPage from '../views/topic';
import AboutPage from '../views/about';
import GetStartPage from '../views/getstart';
import UserPage from '../views/user';
import Page404 from '../views/404';

import qs from 'qs';   // qs处理search值：qs.parse将字符串类型转为对象；qs.stringify将对象类型转为字符串


/* 建立路由表 */
const routes = [
    {
        path: '/',
        exact: true,
        render(props) {                            // 使用 render 方便传递路由信息 || 其他信息
            const { location } = props;
            const { search } = location;
            const { tab = "all", page = "1" } = qs.parse(search.substr(1))
            if (types.includes(tab) && Number(page) > 0)
                return <IndexPage {...props} />
            return <Page404 />
        }
    }, {
        path: '/topic/:id',   // 动态路由
        exact: true,
        render(props) {
            return <TopicPage {...props} />
        }
    }, {
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props} />
        }
    }, {
        path: '/getstart',
        exact: true,
        render(props) {
            return <GetStartPage {...props} />
        }
    }, {
        path: '/user/:loginname',
        exact: true,
        render(props) {
            return <UserPage {...props} />
        }
    }, {
        path: '',  // path为空，匹配所有路径
        exact: false,
        render(props) {
            return <Page404 {...props} />
        }
    }
]

/* header导航菜单 */
const navs = [
    {
        to: "/",
        txt: "首页"
    }, {
        to: "/getstart",
        txt: "新手入门"
    }, {
        to: "/about",
        txt: "关于"
    }
]

/* 首页导航菜单 */
const types = ["all", "good", "share", "ask", "job", "dev"];
const indexNavs = [
    {
        txt: "全部",
        to: "/?tab=all"
    }, {
        txt: "精华",
        to: "/?tab=good"
    }, {
        txt: "分享",
        to: "/?tab=share"
    }, {
        txt: "问答",
        to: "/?tab=ask"
    }, {
        txt: "招聘",
        to: "/?tab=job"
    }, {
        txt: "客户端测试",
        to: "/?tab=dev"
    }
]

export { routes, navs, indexNavs, types };