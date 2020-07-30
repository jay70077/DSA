/*
In javascript all in build searching function use lineaer search 
find(),include(),indexOf()

*/

function linear(arr,value){
     var values
    for(let i = 0 ; i<arr.length ;i++){
        if(value === arr[i]){
            values=arr[i]
        }
    }
    if(values){
        console.log('value found')
    }else{
        console.log('value not found')
    }
   
}
var arr = ['12','15','18','16','8']
linear(arr,'6')