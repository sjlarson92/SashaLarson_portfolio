import React from "react";
import { transactionBodies } from "../data";
import Customer from "./Customer";

const RewardsProgram = () => {
  return (
    <div>
      <div>Rewards Program!</div>

      {transactionBodies.map(transactionBody => (
        <Customer customer={transactionBody} />
      ))}
    </div>
  );
};

export default RewardsProgram;
