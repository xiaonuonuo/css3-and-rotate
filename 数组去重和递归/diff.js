/**
 * Created by cc on 17/8/10.
 */
var a = [];
var b = [1,2,3,2,6,77,23,1,7,8,3];

var c = diff(b,a)

console.log(c)

//递归方法
function diff(arr,em){
    for (var i = 0; i < arr.length; i++) {
        if(i>0 && arr[0] == arr[i]){
            arr.splice(i,1)
        }
    }
    em.push(arr[0]);
    arr.shift()
    arr.length>0 && diff(arr,em)
    return em
}

//一种简便的方法 indexOf
for (var i = 0; i < b.length; i++) {
    if(a.indexOf(b[i]) == -1){
        a.push(b[i])
    }
}

console.log(a)
