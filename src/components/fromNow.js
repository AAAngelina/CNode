/* import moment from "moment";   // 处理时间库
import 'moment/locale/zh-cn';  // 引入中文语言包
moment.locale('zh-cn');  // 设置全局语言为中文
 */

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime')  //引入相对时间插件
dayjs.extend(relativeTime)

require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn')


export default function FromNow(props) {
    const { date } = props

    return dayjs(date).fromNow();
}