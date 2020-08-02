function pair(value){
    var count = 0;
    for(var i = 0;i < value.length;i ++) {
        if(value[i] == value[i + 1]) {
            count = count + 1 ;
            i  = i + 1 ;
        }
    }
    console.log(count);
    
}
pair([10 ,10 ,10 ,20 ,20 ,30 ,30 ,40 ,40,50,50]) // if array is not sorted first sort it