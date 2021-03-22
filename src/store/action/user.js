import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../network';

export default function useGetUser() {
    const d = useDispatch();

    const fn = useCallback((loginname) => {
        d({
            type: "user_loading"
        });
        getUser(loginname).then(res => {
            d({
                type: "user_loaded",
                data: res.data.data
            })
        })

    }, [])

    return fn;
}