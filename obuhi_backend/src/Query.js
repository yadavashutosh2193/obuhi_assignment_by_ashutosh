const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'obuhi',
    host: 'localhost',
    database: 'obuhiapi',
    password: 'obuhi',
    port: 5432,
  })

  const AddNewUser =  (req, res)=>{
      const {name, phone, amount} = req.body;
      pool.query('INSERT INTO personal_wallet (name, phone, amount) VALUES ($1, $2, $3)', 
      [name, phone, amount], async (error, result)=>{
          if(error){
              throw error;
          }
         await res.status(201).json(result.rows);
      })
  }

  const Get_balance = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM personal_wallet WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const Alltransaction = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM transactions WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const Add_funds = (request, response) => {
    const {user_id, amount } = request.body;
    pool.query(
      'UPDATE personal_wallet SET amount = amount + $1 WHERE user_id = $2', [amount, user_id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`balance modified with user_id: ${user_id}`);
      }
    )
  }
  const Spend_funds = (request, response) => {
    const {user_id, amount, initial_balance } = request.body;
  const final_balance = initial_balance - amount;
    pool.query(
      'UPDATE personal_wallet SET amount = amount - $1 WHERE user_id = $2',
      [amount, user_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`balance modified with user_id: ${user_id}`);
      }
    )
  pool.query('INSERT INTO transactions (user_id, transaction_type, initial_balance, amount final_balance) VALUES ($1, debit, $2, $3, $4',
  [user_id, initial_balance, amount, final_balance]), (err, res)=>{
    if(err){
      throw err;
    }
    res.status(201).send("updated");
  }

  }

  const AllWallete = (request, response)=>{
      pool.query('SELECT * FROM personal_wallet ORDER BY user_id', (error, result)=>{
          if(error){
              throw error;
          }
          response.status(201).send(result.rows);
      })
  }

  module.exports = {
         AllWallete,
         Spend_funds,
         Add_funds,
         AddNewUser,
         Get_balance,
         Alltransaction
  }