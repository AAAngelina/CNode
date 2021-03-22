import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import useGetTopicDetail from "../../store/action/topicDetail";
import { Alert } from "antd";
import TopicDetails from "./topicDetail";

function TopicPage() {
    const { goBack } = useHistory()
    const { id } = useParams();
    const getDetail = useGetTopicDetail();
    const { data, isError, err_msg, loading } = useSelector(state => state.topicDetail);

    useEffect(() => {
        getDetail(id);
    }, [id])


    return (<>
        {
            isError ? <Alert
                type="error"
                message="请求出错"
                description={err_msg}
                closable
                afterClose={() => {   // 关闭动画结束返回上一页面
                    goBack()
                }}
            /> : <TopicDetails data={data} loading={loading} />
        }
    </>)
}

export default TopicPage;