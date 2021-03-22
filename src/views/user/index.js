import { useEffect } from 'react';
import { Card, Row, Col } from 'antd'
import { useParams } from 'react-router';
import SideBar from '../../components/sideBar';
import useGetUser from '../../store/action/user';
import { useSelector } from 'react-redux';
import TopicsList from '../../components/topicsList';
import Avatar from 'antd/lib/avatar/avatar';
import { UndoOutlined } from '@ant-design/icons';
import FromNow from '../../components/fromNow';

function UserPage() {

    const { loginname } = useParams();

    const getUser = useGetUser();

    const { loading, data } = useSelector(state => state.user);
    const { avatar_url, create_at, githubUsername, recent_replies, recent_topics } = data;

    useEffect(() => {
        getUser(loginname);
    }, [loginname]);

    // console.log(data);

    return (<Row justify="space-between" id="user_page">
        <Col xs={24} lg={16}>
            <Card
                className="user_detail"
                type="inner"
                loading={loading}
                title="主页"
            >
                <Avatar
                    src={avatar_url}
                    size={80}
                    icon={<UndoOutlined />}
                />
                <p style={{ marginTop: "20px" }}>
                    <span>用户名：{loginname}</span>      
                    <span>注册时间：{<FromNow date={create_at} />}</span>
                </p>
                <p style={{ marginTop: "20px" }}>
                    github地址： 
                    <a target="_blank" rel="noreferrer" href={`https://github.com/${githubUsername}`}>{`https://github.com/${githubUsername}`}</a>
                </p>
            </Card>

            <Card
                type="inner"
                loading={loading}
                title="最近创建的话题"
            >
                <TopicsList loading={loading} data={recent_topics} />
            </Card>

            <Card
                type="inner"
                loading={loading}
                title="最近参与的话题"
            >
                <TopicsList loading={loading} data={recent_replies} />
            </Card>

        </Col>

        <Col xs={0} lg={6}>
            <SideBar loginname={loginname} />
        </Col>
    </Row>)
}

export default UserPage;