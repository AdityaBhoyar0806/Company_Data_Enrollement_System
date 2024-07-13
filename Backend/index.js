
// const express = require('express');
// const app = express();
// const cors = require('cors');

// const mongoose = require('mongoose');
// // const CompanyModel = require('./model/company')
// const UserModel = require('./model/user');
// const CompanyModel = require ('./model/company')

// app.use(express.json());
// app.use(cors())
// mongoose.connect('mongodb://127.0.0.1:27017/companydata', { useNewUrlParser: true, useUnifiedTopology: true });

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./model/user');
const CompanyModel = require('./model/company');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL, {});
//useNewUrlParser: true, useUnifiedTopology: true

app.post('/', async (req, res) => {
  try {
      const user = await UserModel.create(req.body);
      res.status(201).json(user); // HTTP 201 Created
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});


// Login route
app.post('/Login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user =>{
      console.log(user)
  if(user){
            if(user.password === password){
                if(user.role === "Admin"){
                                  res.json("Admin")
                                          }
  else{
        res.json("User")
      }
                      }
          else{
                res.json("incorrect password")
                }
      }
else{
        res.json("no user found")
      }
      
    }
)
    .catch(error => {
      console.error("Login Error:", error);
      res.status(500).json({ success: false, error: 'Internal Server Error', details: error.message });
    });
});

// Company creation route
app.post('/CompanyForm',async (req, res) => {
  CompanyModel.create(req.body)
    .then(company => {
      res.json({ success: true, company }); // Return success message and company details
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ success: false, error: 'Internal Server Error', details: err.message });
    });
});



app.get('/CompanyList',async(req,res)=>{
  try{
    const data= await CompanyModel.find();
    res.json(data)
  }
  catch(err){
    console.log(err)
  }
})

// Route to update company details
app.put('/UpdateCompany/:id', async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedCompanyData = req.body;
    const updatedCompany = await CompanyModel.findByIdAndUpdate(companyId, updatedCompanyData, { new: true });
    if (!updatedCompany) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(updatedCompany);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

app.listen(6003,()=>{
  console.log("server is running on 6003")
})

// require('dotenv').config(); // Load environment variables from .env file

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoose = require('mongoose');
// const UserModel = require('./model/user');
// const CompanyModel = require('./model/company');

// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


