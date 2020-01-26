import React, {useState} from "react";
import { transactionBodies } from "../data";
import Customer from "./Customer";
import moment from "moment";

const RewardsProgram = () => {
  const [customerData, setCustomerData] = useState({})

  const getRewards = (transactionBody) => {
    let rewards
    if(transactionBody.purchaseAmount > 100){
      rewards = (transactionBody.purchaseAmount - 100)*2 + 50
    }
    else if(transactionBody.purchaseAmount <= 100 && transactionBody.purchaseAmount > 50){
      rewards = transactionBody.purchaseAmount - 50
    }
    else { rewards = 0 }
    
    return Math.floor(rewards)
  }
  
  const getTotalRewards = (rewardsHistory) => {
    let sum = 0
    for( var el in rewardsHistory ) {
      if( rewardsHistory.hasOwnProperty( el ) ) {
        sum += parseFloat( rewardsHistory[el] );
      }
    }
    return sum;
  }

  const addTransactionsToCustomerData = (transactionBodies) => {
    transactionBodies.map(transactionBody => {
      const rewards = getRewards(transactionBody)
      if(transactionBody.id in customerData) {
        //check if months match and if so add rewards
        const addReward = customerData[transactionBody.id].rewardsHistory[moment(transactionBody.date).format('MMM')] =rewards
        setCustomerData(addReward)

        //update total rewards
        const newTotalRewards = getTotalRewards(customerData[transactionBody.id].rewardsHistory)

        const updateTotalRewards = customerData[transactionBody.id].totalRewards = newTotalRewards
        setCustomerData(updateTotalRewards)
      }
      else {
        const newCustomerData = customerData[transactionBody.id] = {
          firstName: transactionBody.firstName,
          lastName: transactionBody.lastName,
          totalRewards: rewards,
          rewardsHistory: {
            [moment(transactionBody.date).format('MMM')] : rewards
          }
        }
        setCustomerData(newCustomerData)
      }

      console.log("customerData: ", customerData)
    })
    
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
