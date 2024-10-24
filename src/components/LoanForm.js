import React, { useState } from "react";
import useBank from "../hooks/useBank";

const LoanForm = ({ clientId }) => {
  const { updateClientLoan } = useBank();
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClientLoan(
      clientId,
      parseFloat(loanAmount),
      parseFloat(interestRate)
    );
    setLoanAmount("");
    setInterestRate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        required
      />
      <button type="submit">Update Loan</button>
    </form>
  );
};

export default LoanForm;
