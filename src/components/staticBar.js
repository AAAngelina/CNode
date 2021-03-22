import { Card, List } from "antd";


export default function StaticBar() {
    const imgs = [
        { href: "https://ruby-china.org", img: '//static2.cnodejs.org/public/images/ruby-china-20150529.png' },
        { href: "http://golangtc.com", img: '//static2.cnodejs.org/public/images/golangtc-logo.png' },
        { href: "http://phphub.org", img: '//static2.cnodejs.org/public/images/phphub-logo.png' }
    ]

    return (<div className="static_bar">
        <Card >
            CNode：Node.js专业中文社区
        </Card>

        <Card
            type="inner"
            title="友情社区"
        >
            <List
                dataSource={imgs}
                renderItem={item => <li className="static_img">
                    <a href={item.href} target="_blank" rel="noreferrer">
                        <img src={item.img} alt="" />
                    </a>
                </li>}
            />
        </Card>

        <Card
            type="inner"
            title="客户端二维码"
        >
            <div className="qr_code">
                <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="二维码" />
                <br />
                <a href="https://github.com/soliury/noder-react-native" target="_blank" rel="noreferrer" >
                    客户端源码地址
                </a>
            </div>
        </Card>
    </div>)
}