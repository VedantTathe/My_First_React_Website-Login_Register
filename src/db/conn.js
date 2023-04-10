const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/vedantdb", {
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`Connection Error: ${e}`);
})


