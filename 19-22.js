// 19
function reverseWords(str){
    let arr=str.split(" ");
    str=arr.reverse().toString();
    str = str.replaceAll(','," ");
    return str
}
// 20
function litres(time) {
    let l = time * 0.5;
    return Math.floor(l);
}
// 21
function numberToString(num) {
    return num+""
}
// 22
function findAverage(array) {
    let sum=0;
    let avg=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    if(sum)
        avg=sum/array.length;
    return avg;
}