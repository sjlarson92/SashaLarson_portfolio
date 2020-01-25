import React, {useState} from "react";
import { transactionBodies } from "../data";
import Customer from "./Customer";

const RewardsProgram = () => {
  const [customerData, setCustomerData] = useState({ 1: "customer"})
  
  const addTransactionsToCustomerData = (transactionBodies) => {
    console.log("addTransactions method")
    {transactionBodies.map(transactionBody => {
      console.log("id: ", transactionBody.id)
      if(transactionBody.id in customerData) {
        console.log("customer exists")
      }
      else {
        customerData[transactionBody.id] = {value: "some value"}
        console.log("new customer: ", customerData)
      }
    })}
    
  }
  return (
    <div className="app">
      <div>Rewards Program!</div>

      <button
        onClick={() => addTransactionsToCustomerData(transactionBodies)}
      >
        Calculate Rewards
      </button>  

      {/* {transactionBodies.map(transactionBody => (
        //if customerData includes transactionBody add transaction to customer else create new customer reward
        <Customer customer={transactionBody} />
      ))} */}
    </div>
  );
};

export default RewardsProgram;
