import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetUser from '../store/action/user';
import { useEffect } from 'react'

function SideBar(props) {
    const { loginname } = props;
    const getUser = useGetUser();

    const { loading, data } = useSelector(state => state.user);
    const { avatar_url, score } = data;

    useEffect(() => {
        getUser(loginname);
    }, [loginname]);

    return (
        <Card
            bordered
            type="inner"
            loading={loading}
            title={"作者"}
        >
            <Link to={`/user/${loginname}`}>
                <Avatar
                    src={avatar_url}
                    icon={<UserOutlined />}
                    alt="avatar"
                    shape="square"
                    size={35}
                />
                <i style={{ marginLeft: "10px" }}>{loginname}</i>
            </Link>
            <div style={{marginTop:"10px"}}>积分：{score}</div>
        </Card>
    )
}

export default SideBar;