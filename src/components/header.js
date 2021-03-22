import { Affix, Layout, Row, Col, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { navs } from '../router'


export default function Header() {

    /* 获取当前路由对应的导航index值 */
    const { pathname } = useLocation();
    const activeIndex = String(navs.findIndex(nav => nav.to === pathname));

    return (<Affix offsetTop={0}>
        <Layout.Header id="header">
            <div className="wrap">
                <Row justify="space-between">
                    <Col xs={8} sm={4} xl={2}>
                        <h1 id="logo">
                            <Link to="/">CNode</Link>
                        </h1>
                    </Col>
                    <Col xs={14} sm={10} xl={6}>
                        <Menu
                            mode="horizontal"
                            theme='dark'
                            // defaultSelectedKeys={["0"]} 根据item绑定的key值，来确定选中项
                            // defaultSelectedKeys={[activeIndex]}  挂载时生效
                            selectedKeys={[activeIndex]}
                        >
                            {
                                navs.map((nav, index) => {
                                    return (<Menu.Item key={index}>
                                        <Link to={nav.to}>{nav.txt}</Link>
                                    </Menu.Item>)
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Layout.Header>
    </Affix>)
}
