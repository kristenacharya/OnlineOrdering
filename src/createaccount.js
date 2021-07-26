import React from "react";
import Card from './context.js';

function CreateAccount(){
  return (
    <Card
      bgcolor="light"
      header="Products"
      body={
              <>
              <a href="#/products/SpryStepKafo/">SpryStep KAFO</a>
              </>
           }
    />
  )
}

export default CreateAccount;