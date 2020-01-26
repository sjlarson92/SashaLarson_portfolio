import React from "react";

const Customer = ({ customer }) => {

  return (
    <div className="customer-body">
        <div>
            Customer Name: {customer.firstName} {customer.lastName}
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
