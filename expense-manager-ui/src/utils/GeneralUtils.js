export function cloneArray(arr) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        let arrItem = Object.assign({}, arr[i]);
        resArr.push(arrItem);
    }
    return resArr;
}
