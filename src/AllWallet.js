import React from 'react';


const AllWallet = (props)=>{
    
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Balance (Rs)</th>
    </tr>
  </thead>
  <tbody>
  {
     props.allwallet.map((elem, index)=>{
          return (
            <tr key = {index}>
                 <th scope="row">{elem.user_id}</th>
                  <td>{elem.name}</td>
                  <td>{elem.phone}</td>
                  <td>{elem.amount}</td>
    </tr>
          )
      })
  }
  </tbody>
</table>
    )
}
export default AllWallet;