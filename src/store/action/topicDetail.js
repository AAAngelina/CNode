import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getTopicDetail } from "../../network";

export default function useGetTopicDetail() {
    const d = useDispatch();

    /* 性能优化：使用 useCallBack 使每次返回的函数均为同一个地址，减少性能浪费 */
    const fn = useCallback((id) => {
        d({
            type: 'topicDetail_loading'
        });
        getTopicDetail(id).then(res => {
            d({
                type: 'topicDetail_loaded',
                data: res.data.data
            })
        }).catch(err => {
            /* console.dir(err); // 展开 err */
            const { response } = err;
            const { data } = response;
            //console.log(data.error_msg)
            d({
                type: "topicDetail_ERROR",
                err_msg: data.error_msg
            })
        })
    }, [])

    return fn;
}