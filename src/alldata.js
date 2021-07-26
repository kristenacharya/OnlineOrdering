import React from "react";
import Card from './context.js';
import { UserContext } from './context.js';

function AllData(){
    const ctx = React.useContext(UserContext);
    const rows = ctx.users.map((user) =>
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.account}</td>
            <td>{user.amount}</td>
            <td>{user.balance}</td>
          </tr> 
      );
    return (
      <>
      <Card
        bgcolor="light"
        header="Order History"
        body = {
          <>
          <table style={{width:"100%"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Account</th>
                <th>Billing</th>
                <th>Shipping</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>         
          </table>
          </>
        }
      />
      </>
    );
  }

  export default AllData;