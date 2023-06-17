const express = require('express')

const app = express();

app.get('/',(req,res)=>{
      res.send("Hello");
})

const port = 4000
app.listen(port,()=>{
    console.log(`server created on http://localhost:${port}`)
}
)