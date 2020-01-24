import React from "react";

const Customer = ({ customer }) => {
  return (
    <div>
        <div>
            Customer Name: {customer.firstName}
        </div>
        <div>
            Total Rewards:
        </div>
        <div>
            Rewards by Month:
        </div>
    </div>
  )
};

export default Customer;
