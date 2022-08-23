import mock from 'mockjs';
const vehicle = mock.mock(
    '/api/car', 'post', (req, res) => {
        return {
            code: 200,
            data: [{
                id: 1,
                name: 'byd',
            }, {
                id: 1,
                name: 'baojun',
            }],
            message: '查询成功'
        }
    })
const user = mock.mock(
    '/api/user', 'get', (req, res) => {
        return {
            code: 200,
            data: {
                id: 1,
                sex: 1,
                age: 25,
                createtime: '2017-04-01'
            },
            message: '查询成功'
        }
    })
export default {
    vehicle,
    user
}