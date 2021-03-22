import { Card, Col, Row } from "antd";
import TopicTag from "../../components/topicTag";
import { Link } from "react-router-dom";
import FromNow from "../../components/fromNow";
import Replies from "./replies";
import CommentBox from "./comment";
import UserPage from "../user";
import SideBar from "../../components/sideBar";

export default function TopicDetails(props) {
    const { data, loading } = props;
    const { author, content, create_at, top, good, tab, title, visit_count } = data;
    const { replies, reply_count } = data;
    return (<Row justify="space-between">
        <Col xs={24} lg={16}>
            <Card
                bordered
                // type="inner"
                loading={loading}  //对title没有loading；在title中操作对象值，可能会报undefined错误
                title={<>
                    <h1>
                        <TopicTag tag={top ? "top" : (good ? "good" : tab)} />
                        {title}
                    </h1>
                    <p>
                        <span> - 创建时间 : <FromNow date={create_at} /></span>
                        <span> - 作者 : <Link to={`/user/${author.loginname}`}>{author.loginname}</Link></span>
                        <span> - 预览次数 : {visit_count}</span>
                    </p>
                </>}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}
                />
            </Card>

            {/* 评论列表 */}
            <Replies
                replies={replies}
                reply_count={reply_count}
                loading={loading}
            />
            {/* 评论框 */}
            <CommentBox loading={loading} />

        </Col>

        <Col xs={0} lg={6}>
            <SideBar loginname={author.loginname} />
        </Col>
    </Row >)
}