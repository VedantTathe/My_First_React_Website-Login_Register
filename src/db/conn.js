const mongoose = require("mongoose");
const DATABASE = "mongodb+srv://tathevedant70:madhav@cluster0.30s18ki.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect("mongodb://0.0.0.0:27017/vedantdb", {
    
mongoose.connect(`${DATABASE}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`Connection Error: ${e}`);
})


