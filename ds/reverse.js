function reverse(value){
    var newValue = ""
    for(let i = 0 ; i<value.length ;i++){
       newValue = value[i] + newValue
    }
    console.log('reverse' , newValue)
    if(newValue === value){
        console.log('string conytain palindrom')
        return newValue
    }
    return newValue
}
reverse("madam")