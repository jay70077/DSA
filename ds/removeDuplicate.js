/*
first in last out
*/
function duplicate(value){
    var array =[]
    for(var i = 0 ; i<value.length ;i++){
        var include = array.includes(value[i])
        if(include === false){
            array.push(value[i])
        }
    }
    console.log(array)
   return array
      
}
var arr = [12,15,18,16,16,8,5,58,565,8,4,7]
duplicate(arr)