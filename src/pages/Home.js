import React from "react";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";

const Home = () => {
  return (
    <div>
      <h1>App Controle Financeiro</h1>
      <ClientForm />
      <ClientList />
    </div>
  );
};

export default Home;
