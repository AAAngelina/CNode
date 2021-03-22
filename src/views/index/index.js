/* 首页视图 */
import QueryString from 'qs';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import TopicsList from "../../components/topicsList";
import { useGetTopicList } from '../../store/action/topicsList';
import IndexNav from "./indexNav";
import IndexPagination from './pagination';

function IndexPage() {
    const { loading, data } = useSelector(state => state.topicsList);

    const { search } = useLocation();
    const { tab = "all", page = 1, limit = 10 } = QueryString.parse(search.substr(1));  // 截取?后的字符串，转为对象

    const getList = useGetTopicList(); // 调用高阶hook

    useEffect(() => {
        getList(tab, page, limit);
    }, [tab, page, limit])

    return (<>
        <IndexNav />
        <TopicsList
            loading={loading}
            data={data}
        />
        <IndexPagination tab={tab} currentPage={page} limit={limit} />
    </>)
}

export default IndexPage;