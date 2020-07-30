/*
first in last out
*/
function stack(value){
    var array =[]
    for(var i = 0 ; i<value.length ;i++){
        array.push(value[i])
    }
    console.log('array',array)
    var pop = array.pop()
    console.log('pop',pop)
    return array
    
}
var arr = [12,15,18,16,8,5,58,565,4,7]
stack(arr)