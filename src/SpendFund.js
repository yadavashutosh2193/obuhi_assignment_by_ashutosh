import React, {useState } from 'react';


const SpendFund = (props)=>{
  const [user_id, setusername] = useState("");
  const [amount, setAmount] = useState("");

  const IsEmpty = (val) => (val === null || val === undefined || val === "");
  const OnchangeUsername = (e)=>{
    setusername(e.target.value);
  }
 const onchangeAmount = (e)=>{
   setAmount(e.target.value);
 }
 const LessBalance = (amt)=>{
   const user = props.allwallet.find(elem=>elem.user_id = user_id)
   if(user.amount > amt)
   return false;
   else
   return true;
 }
  const Addbalance = () => {
        if(IsEmpty(user_id) || IsEmpty(amount)){
          alert("plaese fill all fields");
        }else if(LessBalance(amount)){
                 alert("your wallet has no enough amount");
        } 
        else{
          fetch('http://localhost:8080/spendfunds', {
            method: 'put',
            body: JSON.stringify({user_id, amount}),
            headers: {
              'content-type': 'application/json'
            },
            credentials: 'include'
          }).then(resp => resp.json()).then(data=>{
          
            console.log(data)});
            setAmount("");
            setusername("");
        }
  }
  
    return (<>
        <div className="form-group row mt-3">
      <label htmlFor="colFormLabelSm1" className="col-sm-2 col-form-label col-form-label-lg">User</label>
      <div className="col-sm-5">
        <input type="text" list = "username" value = {user_id} onChange = {OnchangeUsername} className="form-control" id="colFormLabelSm1" placeholder="Enter your Name"/>
      </div>
      <datalist id = "username">
      {
          props.allwallet.map((value, index)=>{
              return <option value = {value.user_id} key = {index}></option>
          })
      }
      </datalist>
    </div>
    <div className="form-group row">
      <label htmlFor="colFormLabelLg3" className="col-sm-2 col-form-label col-form-label-lg">Amount (Rs)</label>
      <div className="col-sm-5">
        <input type="number" value = {amount} onChange = {onchangeAmount} className="form-control" id="colFormLabelLg3" placeholder="Enter Amount"/>
      </div>
      <div className = "col col-sm-3">
      <button onClick = {Addbalance} className = "btn border bg-success">SUBMIT</button>
      </div>
    </div>
    </>)
}
export default SpendFund;