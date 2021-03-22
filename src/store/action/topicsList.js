
/* 使用 hooks 处理异步请求：复用逻辑
    由于 hooks 只能在 函数最外层使用，所以包装为高阶函数；
        返回 一个函数，可在任意位置调用。
*/

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getTopicsList } from '../../network';

function useGetTopicList() {
    const d = useDispatch();

    /* 性能优化：使用 useCallBack 使每次返回的函数均为同一个地址，减少性能浪费 */
    const fn = useCallback((tab, page, limit, mdrender) => {
        d({
            type: 'topicsList_loading'
        });
        getTopicsList(tab, page, limit, mdrender).then(res => {
            d({
                type: 'topicsList_loaded',
                data: res.data.data
            })
        })
    }, [])

    return fn;
}

export { useGetTopicList }