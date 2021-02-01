import React, { useEffect, useState } from 'react';


const AllTransaction = ()=>{
  const [alltransaction, setAlltransaction] = useState([]);
 

  useEffect(()=>{
    fetch(`http://localhost:8080/transactions`)
    .then(resp=>resp.json()).then(data=>{
      setAlltransaction(data);
      console.log(data);
    })
  })

    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Amount (Rs)</th>
      <th scope="col">Balance (Rs)</th>
    </tr>
  </thead>
  <tbody>
  {
    alltransaction.map((elem, index)=>{
      return (
        <tr key = {index}>
      <th scope="row">{elem.name}</th>
      <td>{elem.trans_date}</td>
      <td>{elem.amount}</td>
      <td>{elem.final_balance}</td>
    </tr>
      )
    })
  }
  </tbody>
</table>
    )
}
export default AllTransaction;