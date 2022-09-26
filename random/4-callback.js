const testCallback = (callback) => {
    setTimeout(()=>{
        callback('mock error',undefined)
        callback(undefined, 'mock success')
    },4000)
}

testCallback((error,res)=>{
    if(error) return console.log(error)
    console.log(res)
})