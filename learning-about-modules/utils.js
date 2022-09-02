let i=0;
const parity = function () {
    i++;
    if(i%2==0) return "even";
    return "odd";
}
const name = 'Yash Vaibhav';
const add = function(x,y){
    return x+y;
}
module.exports = {
    parity,
    name,
    add
}