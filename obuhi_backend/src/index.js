const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
  }))
const db = require('./Query');
  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
app.post('/user', db.AddNewUser);
app.get('/balance/:id', db.Get_balance);
app.get("/transactions/:id", db.Alltransaction);
app.put('/addfunds', db.Add_funds);
app.put('/spendfunds', db.Spend_funds);
app.get('/allwallet', db.AllWallete);

// create personal_wallet table
// create table personal_wallet (
//   user_id serial primary KeyboardEvent,
//   name varchar(30),
//   phone varchar(30),
//   amount int
// );
//create transactions table
//  create table transactions(
//    user_id int references personal_wallet(user_id),
//    transaction_type varchar(30),
//    trans_date timestamp default current_timestamp,
//    initial_balance int,
//    amount int,
//    final_balance int,
//    remarks varchar(50) default 'transaction');


app.listen(port, ()=>console.log(`connected to port ${port}`))