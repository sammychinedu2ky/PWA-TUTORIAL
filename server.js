let express = require('express');
let app = express()
//this serves static files from the current directory
app.use(express.static(__dirname));

app.listen(3000,()=>{console.log('server running')})