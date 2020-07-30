/*
first in first out
*/
function queue(value){
    var array =[]
    for(var i = 0 ; i<value.length ;i++){
        //array.unshift(value[i]) // either u can use unshift or u can use push
        array.push(value[i])
    }
    console.log('array',array)
    //var pop = array.pop() 
    var pop = array.shift() // if you used push here u can use shift to last element
    console.log('pop',pop)
    return array
    
}
var arr = [12,15,18,16,8,5,58,565,4,7]
queue(arr)