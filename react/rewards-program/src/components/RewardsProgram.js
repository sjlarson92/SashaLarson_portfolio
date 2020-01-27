import React, {useState} from "react";
import { transactions } from "../data";
import moment from "moment";
import _ from "lodash";


const RewardsProgram = () => {
  const [customerData, setCustomerData] = useState([])

  const getRewards = (transaction) => {
    let rewards
    if(transaction.purchaseAmount > 100){
      rewards = (transaction.purchaseAmount - 100)*2 + 50
    }
    else if(transaction.purchaseAmount <= 100 && transaction.purchaseAmount > 50){
      rewards = transaction.purchaseAmount - 50
    }
    else { rewards = 0 }
    
    return Math.floor(rewards)
  }

  const provideTransactions = () => {
    const groupedTransactions = _.groupBy(transactions, 'id')
    // TODO: do this for all customers
    console.log("groupedTransactions[1]: ", groupedTransactions[1])
    let totalRewards = 0
    let rewardsByMonthAndYear = {}
    
    for(let transaction of groupedTransactions["2"]){
      console.log('transaction: ', transaction)
      const rewards = getRewards(transaction)
      console.log("rewards: ", rewards)
      totalRewards += rewards


      const date = moment(transaction.date).format('MMM-YYYY')
      console.log('date: ', date)
     if(date in rewardsByMonthAndYear){
       const updatedTotalRewardsByMonthAndYear = rewardsByMonthAndYear[date] + rewards
       rewardsByMonthAndYear = {
         ...rewardsByMonthAndYear,
         [date]: updatedTotalRewardsByMonthAndYear
       }
     }
     else {
        rewardsByMonthAndYear = {
          ...rewardsByMonthAndYear,
          [date]: rewards
        }
      }
    }
    console.log('totalRewards: ', totalRewards)
    console.log('rewardsByMonthAndYear: ', rewardsByMonthAndYear)
    const customerData1 = {
      id: groupedTransactions["2"][0].id,
      firstName: groupedTransactions["2"][0].firstName,
      lastName: groupedTransactions["2"][0].lastName,
      totalRewards,
      rewardsByMonthAndYear
    }
    console.log("customerData1: ", customerData1)
    const updatedCustomerData = customerData.concat(customerData1)
    console.log("updatedCustomerData: ", updatedCustomerData)
    setCustomerData(updatedCustomerData)
  }
   
  return (
    <div className="app">
      <div>Rewards Program!</div>

      <button
        onClick={() => provideTransactions()}
      >
        Calculate Rewards
      </button> 

      {customerData.length > 0 && customerData.map(customer =>
        <div key={customer.id}>
          <div>{customer.firstName}</div>
        </div>
      )
      }

    </div>
  )
}

export default RewardsProgram;
