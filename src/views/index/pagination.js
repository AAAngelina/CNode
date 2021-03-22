import { Pagination } from 'antd';
import { Link, useHistory } from "react-router-dom";

export default function IndexPagination(props) {

    const { push } = useHistory()
    let { tab, currentPage, limit = 10 } = props;

    return (<Pagination
        className="index_pagination"
        current={Number(currentPage)}  
        showSizeChanger={true}
        pageSize={limit}
        pageSizeOptions={["10", "20"]}
        total={150}  // 不知一共多少条，写死！！
        onChange={(page, pageSize) => {
            limit = pageSize;
            push(`/?tab=${tab}&page=${page}&limit=${limit}`)
        }}
        itemRender={(page, type) => {
            switch (type) {
                case "page":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                case "prev":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                case "next":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                case "jump-prev":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{"上一组"}</Link>
                case "jump-next":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{"下一组"}</Link>
                default:
                    break;
            }
        }}
    />)
}