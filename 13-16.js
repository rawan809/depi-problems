13
function basicOp(operation, value1, value2) {
    let ans = 0
    if (operation === '+')
        ans = value1 + value2
    else if (operation === '-')
        ans = value1 - value2
    else if (operation === '*')
        ans = value1 * value2
    else if (operation === '/')
        ans = value1 / value2
    return ans;
}
14
function squareOrSquareRoot(array) {
    for (let i = 0; i < array.length;i++){
        let sqroot=Math.sqrt([array[i]]);
        if(Number.isInteger(sqroot)){
            array[i]=sqroot;
        }
        else{
            array[i]=array[i]*array[i];
        }
    }
    return array;
}
15
function countBy(x, n) {
    let z = [];
    let j=0;
    for(let i=1;i<=n;i++){
        z[j]=x*i;
        j++;
    }
    return z;
}
16
function noSpace(x){
    let newx=x.replaceAll(" ","")
    return newx
}





