import React, { createContext, useState } from "react";

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  const updateClientLoan = (id, loanAmount, interestRate) => {
    setClients(
      clients.map((client) =>
        client.id === id ? { ...client, loanAmount, interestRate } : client
      )
    );
  };

  return (
    <BankContext.Provider value={{ clients, addClient, updateClientLoan }}>
      {children}
    </BankContext.Provider>
  );
};
