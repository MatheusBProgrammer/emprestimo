import React from "react";
import { Link } from "react-router-dom";
import useBank from "../hooks/useBank";

const ClientList = () => {
  const { clients } = useBank();

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link to={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
