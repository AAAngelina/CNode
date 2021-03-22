import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { indexNavs } from "../../router";
import QueryString from "qs";

export default function IndexNav(props) {
    const { search } = useLocation();
    const { tab = "all" } = QueryString.parse(search.substr(1));
    const activeIndex = search ? String(indexNavs.findIndex(nav => QueryString.parse(nav.to.substr(2)).tab === tab)) : "0";

    return (
        <Menu
            mode="horizontal"
            // defaultSelectedKeys={[activeIndex]} // 只在挂载时设置
            selectedKeys={[activeIndex]} 
        >
            {
                indexNavs.map((nav, index) => {
                    return (<Menu.Item key={index}>
                        <Link to={nav.to}>{nav.txt}</Link>
                    </Menu.Item>)
                })
            }
        </Menu>
    )
}