import React, { useState } from 'react';


const NewWallet = ()=>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState();

     const IsEmpty = (val) => (val === null || val === undefined || val === "");
    const OnChangeName = (e)=>{
        setName(e.target.value);
    }
    const OnchangePhone = (e) =>{
        setPhone(e.target.value);
    }
    const OnchangeAmount = (e) =>{
        setAmount(e.target.value);
    }
     
    const OnSubmit = async ()=>{
          if(IsEmpty(name) || IsEmpty(phone) || IsEmpty(amount)){
              alert("please fill all fields");
          }
          else{
            await fetch('http://localhost:8080/user', {
                method: 'post',
                body: JSON.stringify({name, phone, amount}),
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            }).then(resp => resp.json().then(data=>{
                setName("");
                setPhone("");
                setAmount("");
            }));
          }
    }

    return <>
    <div className="form-group row mt-3">
      <label htmlFor="colFormLabelSm1" className="col-sm-2 col-form-label col-form-label-lg">Name</label>
      <div className="col-sm-5">
        <input type="text" value = {name} onChange = {OnChangeName}  className="form-control" id="colFormLabelSm1" placeholder="Enter your Name"/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="colFormLabel2" className="col-sm-2 col-form-label col-form-label-lg">Phone</label>
      <div className="col-sm-5">
        <input type="tel" value = {phone} onChange = {OnchangePhone} className="form-control" id="colFormLabel2" placeholder="Enter your phone number"/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="colFormLabelLg3" className="col-sm-2 col-form-label col-form-label-lg">Amount (Rs)</label>
      <div className="col-sm-5">
        <input type="number" value = {amount} onChange = {OnchangeAmount} className="form-control" id="colFormLabelLg3" placeholder="Enter Amount"/>
      </div>
      <div className = "col col-sm-3">
          <button className = "btn border bg-success" onClick = {OnSubmit}>SUBMIT</button>
      </div>
    </div>
  </>
}
export default NewWallet;