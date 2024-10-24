import React, { useState } from "react";
import useBank from "../hooks/useBank";

const ClientForm = () => {
  const { addClient } = useBank();
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({ id, name, loanAmount: 0, interestRate: 0 });
    setName("");
    setId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Client ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default ClientForm;
