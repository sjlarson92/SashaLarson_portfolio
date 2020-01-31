import React from "react";

const Customer = ({ customer }) => {

  const getRewardsByMonthAndYear = () => {
    let rewardsByMonthAndYear = []
    for (let key of Object.keys(customer.rewardsByMonthAndYear)) {
       rewardsByMonthAndYear.push(
       <div key={key}>
         {(key + " : " + customer.rewardsByMonthAndYear[key])}
       </div>)
    }
    return rewardsByMonthAndYear
  }
  return (
    <div className="customer-body">
        <div>
            Customer Name: {customer.firstName} {customer.lastName}
        </div>
        <div>
            Total Rewards: {customer.totalRewards}
        </div>
        <div>
            Rewards by Month: 
            <div>
              {getRewardsByMonthAndYear()}
            </div>
        </div>
    </div>
  )
};

export default Customer;
