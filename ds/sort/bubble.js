/*
lower to higher
it takes n*(n-1) time

*/
function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function bubbleSort(arr){
    for(var j=0;j<arr.length;j++){
        for(var i = 0 ;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
              swap(arr,i,i+1)
            }
         }
    }
  
   console.log(arr)
  return arr
}
var arr = [12,15,18,16,8]
bubbleSort(arr)