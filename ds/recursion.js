// function repeat it self that is called recursiom
function recursion(value){
        if(value<10){
            console.log(value)
            recursion(value+1)
        }
   }
   recursion(0)