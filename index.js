// Code your solutions in this file
const writeCards = (arr, event) =>{
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
} 

const countDown = (positiveInt) => {
    while(positiveInt > -1){
        console.log(positiveInt)
        positiveInt--
    }
}