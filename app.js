const express = require ('express')
const app = express();
const element = require ('./entiity/element');
const sequelize = require ('./config/dataBase');
const router = require ('./router/router')
const cors = require ('cors');
require ('dotenv').config();
const bodyParser = require ('body-parser')
sequelize.sync({alter:true}).then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))   
app.use('/',router)
app.use(cors());


async function run(){
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(process.env.port,()=>{
        console.log(`server started on :${process.env.port}`)
    })
    
  } catch (error) {
    console.log(error.massage)
  }
}
run()