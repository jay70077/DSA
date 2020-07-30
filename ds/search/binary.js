/*
binary search 
1. first count array
2.divide array in three parts
  left mid, right
3. whatever value you search its check 
 with mid value and accroding to that it search either in first half or 2nd haf
*/

function binary(arr,value){
     var left = 0 , right = arr.length-1 
     for(let i = 0 ; i<arr.length ;i++){
        var mid = Math.floor((left+right)/2) 
         if(value === arr[mid]){
            console.log('mid',value)
            return value
          }
        else if(value < arr[mid]){
          right  = (mid - 1)
          
       }
       else if(value>arr[mid]){
        left =   (mid + 1)

       }
     
   }
   console.log('not found')
   return -1
  
}
var arr = [9,10,11,12,13,14,15,17,21,28,76]
binary(arr,82)