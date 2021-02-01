import React, { useState } from 'react';


const ChechBalance = (props)=>{
    const [username, setusername] = useState("");
    const [balance, setbalance] = useState(null);
    const IsEmpty = (val) => (val === null || val === undefined || val === "");
    const GetBalance = ()=>{
        if(IsEmpty(username)){
            alert("plaease fill username field");
        }else{
            fetch(`http://localhost:8080/balance/${username}`).then(resp=>resp.json())
            .then(data => {
                console.log(data);
                setbalance(data[0].amount);
            })
        }
    }
    const onchangeName = (e)=>{
        setusername(e.target.value);
        setbalance(null);
    }
    return (<>
        <div className="form-group row mt-3">
      <label htmlFor="colFormLabelSm1" className="col-sm-2 col-form-label col-form-label-lg">User</label>
      <div className="col-sm-5">
        <input type="text" list = "username" value = {username} onChange = {onchangeName} className="form-control" id="colFormLabelSm1" placeholder="Enter your Name"/>
      </div>
      <datalist id = "username">
      {
          props.allwallet.map((value, index)=>{
              return <option value = {value.user_id} key = {index}></option>
          })
      }
      </datalist>
    </div>
    <div className = "row justify-content-right">
    <div className = "col col-sm-8"></div>
        <div className = "col col-sm-2">
            <button onClick = {GetBalance} className = "btn border bg-success">Get Balance</button>
        </div>
    </div>
    
    {balance !== null ? <p>Current balance in your Wallet : {balance} (Rs)</p> : null}
    </>)
}
export default ChechBalance;