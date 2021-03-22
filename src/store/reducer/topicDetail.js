export default function topicDetail(topicDetail = {
    loading: true,
    data: {
        author: {},  //防止属性未加载时使用，报undefined的错误
        replies:[]
    },
    isError: false,
    err_msg: ""
}, action) {
    switch (action.type) {
        case "topicDetail_loading":
            return {
                loading: true,
                data: {author: {},replies:[] },
                isError: false,
                err_msg: ""
            }
        case "topicDetail_loaded":
            return {
                loading: false,
                data: action.data,
                isError: false,
                err_msg: ""
            }
        case "topicDetail_ERROR":
            return {
                loading: false,
                data: {},
                isError: true,
                err_msg: action.err_msg
            }
        default:
            break;
    }
    return topicDetail;
}
