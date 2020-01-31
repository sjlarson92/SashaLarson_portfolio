import React, {useState} from "react";
import { transactions } from "../data";
import moment from "moment";
import _ from "lodash";
import Customer from './Customer'

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

    let updatedCustomerData = []
    for(let customer in groupedTransactions){
      let totalRewards = 0
      let rewardsByMonthAndYear = {}
      
      for(let transaction of groupedTransactions[customer]){
        const rewards = getRewards(transaction)
        totalRewards += rewards

        const date = moment(transaction.date).format('MMM-YYYY')
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

    const customerData1 = {
      id: groupedTransactions[customer][0].id,
      firstName: groupedTransactions[customer][0].firstName,
      lastName: groupedTransactions[customer][0].lastName,
      totalRewards,
      rewardsByMonthAndYear
    }
    updatedCustomerData = updatedCustomerData.concat(customerData1)
    }
    
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
        <Customer 
          key={customer.id}
          customer={customer}
        />
      )
      }

    </div>
  )
}

export default RewardsProgram;
