require('./db/mongoose-redundant')
const Task = require('./models/task')

const updateTruthValue = async (id,bool) => {
    const tsk = await Task.findByIdAndUpdate(id, { completed : bool})
    return tsk //captures state at the time of calling not after
}

updateTruthValue('6337a871cadaafcc35b0eb53',true).then((result)=>{
    console.log(result)
    
}).catch((error)=>{
    console.log(error)
    
})