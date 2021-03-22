/* 新手入门视图 */
import { Card, Col, Row, Breadcrumb } from 'antd'
import {Link} from 'react-router-dom';
import StaticBar from '../../components/staticBar'
import data from '../../static/js/getStartData';  // 静态数据

function GetStartPage() {
    return (
        <Row justify="space-between">
            <Col xs={24} lg={16}>
                <Card
                    title={
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>新手入门</Breadcrumb.Item>
                        </Breadcrumb>  /* 面包屑导航：路由导航 */
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
        </Row>
    )
}

export default GetStartPage;