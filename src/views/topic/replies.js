import { Card, List, Comment, Avatar, Tooltip } from "antd";
import { Link } from 'react-router-dom'
import FromNow from "../../components/fromNow";

export default function Replies(props) {
    const { replies=[], reply_count, loading } = props;

    replies.reverse(); //后发表的位于最前

    return (
        <Card
            style={{ marginTop: '10px' }}
            type="inner"
            bordered
            loading={loading}
            title={`${reply_count} 条回复`}
        >
            <List
                dataSource={replies}
                renderItem={item => {
                    const {author,content,create_at} = item;
                    return (
                        <List.Item>
                            <Comment
                                author={author.loginname}
                                avatar={<Link to={`/user/${author.loginname}`}>
                                    <Avatar src={author.avatar_url} title={item.author.loginname} />
                                </Link>}
                                content={<div
                                    dangerouslySetInnerHTML={{
                                        __html: content
                                    }}
                                />}
                                datetime={<div>发表于：<FromNow date={create_at} /></div>}
                            />
                        </List.Item>
                    )
                }}
                pagination={{
                    simple:true
                }}
            />
        </Card>
    )

}