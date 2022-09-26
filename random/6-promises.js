const testPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1)
        //resolve('mock success')
        console.log(2)
        reject('mock fail')
        console.log(3)
    },4000)
})

testPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})