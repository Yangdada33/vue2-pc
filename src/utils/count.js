export function Count(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        //判断obj这个对象有没有字母
        let key = arr[i] // 每个字母
        if (obj[key]) { //判断obj中有没有键
            //对象中有这个字母
            obj[key]++
                // console.log(obj[key]++);
        } else {
            //对象中没有这个字母,把字母加到对象中
            obj[key] = 1
        }
    }

    return obj
}