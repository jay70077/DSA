function flattern(value){
    var newValue = []
    function recursion(value){
        for(var i = 0 ; i<value.length ;i++){
            if(Array.isArray(value[i])){
                recursion(value[i])
                console.log(newValue)
            }
            else{
                newValue.push(value[i])
                console.log(newValue)
            }
        }
    }
    recursion(value)
    return newValue

}
var arr = [1,2,[3,4],[6,[7],8],10]
flattern(arr)