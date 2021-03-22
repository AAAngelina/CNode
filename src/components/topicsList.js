import { List, Avatar, Col } from "antd";
import { Link } from 'react-router-dom';
import TopicTag from "./topicTag";

import FromNow from './fromNow';

function TopicsList(props) {
    const { loading, data } = props;
    return (
        <List
            className="topics_list"
            loading={loading}
            dataSource={data}
            renderItem={item => {
                const { author, id, top, good, tab, title, last_reply_at } = item;
                return (<List.Item>
                    {/* 栅格的响应式布局：xs、md...,可实现显示和隐藏(分到0个格子就隐藏) */}
                    <Col xs={2}>
                        <Link to={`/user/${author.loginname}`} >
                            <Avatar
                                src={author.avatar_url}
                                alt="avatar"
                                title={author.loginname}
                            />
                        </Link>
                    </Col>

                    <Col xs={22} md={18}>
                        <TopicTag
                            tag={top ? "top" : (good ? "good" : tab)}
                        />
                        <Link to={`/topic/${id}`}>{title}</Link>
                    </Col>

                    <Col
                        xs={0} md={4}
                        style={{ textAlign: "right" }}
                    >
                        <FromNow  date={last_reply_at} />
                    </Col>
                </List.Item>)
            }}
        />
    )
}

export default TopicsList;