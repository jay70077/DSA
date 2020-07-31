/*
Though sort() gives the result we want, problem lies with the way it sorts the array elements. 
Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome and Merge 
sort by Mozilla Firefox and Safari.

*/
function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function insertionSort(inputArr){
        let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let key = inputArr[i];
            let j = i - 1;
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j]; //replacing next value with current value
                j = j - 1;
            }
            inputArr[j + 1] = key; // else it will replace with key
        }
        console.log(inputArr)
        return inputArr;
    }
var arr = [15,12,18,16,8,5,58,565,4,7]
insertionSort(arr)