/*
lower to higher
it take n time 

*/
function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function selectionSort(arr){
    for(var j=0;j<arr.length;j++){
        for(var i = j; i<arr.length; i++){
            if(arr[i]<arr[j]){
              swap(arr,i,j)
            }
         }
    }
  
   console.log(arr)
  return arr
}
var arr = [12,15,18,16,8,5,58,565,4,7]
selectionSort(arr)