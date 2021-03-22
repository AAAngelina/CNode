/* 关于页面 */
import { Link } from 'react-router-dom';
import { Card, Col, Row, Breadcrumb } from 'antd'
import StaticBar from '../../components/staticBar'
import data from '../../static/js/aboutData';  // 静态数据

function AboutPage() {
    // fetch("../../static/js/staticData.js").then(res=>console.log(res.body))
    return (<Row justify="space-between">
        <Col xs={24} lg={16}>
            <Card
                title={
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>关于</Breadcrumb.Item>
                    </Breadcrumb>  /* 面包屑导航：路由导航;href走a标签跳转；Link则在应用内跳转 */
                }
                type="inner"
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: data
                    }}
                />
            </Card>
        </Col>

        <Col xs={0} lg={6}>
            <StaticBar />
        </Col>
    </Row>)
}

export default AboutPage;