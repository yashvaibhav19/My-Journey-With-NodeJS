const delayedAdd = (a, b, callback) => {
    setTimeout(()=>{
        sum = a+b;
        callback(sum);
    },5000);
}

delayedAdd(12,5,(ans)=>{
    console.log(ans);
})