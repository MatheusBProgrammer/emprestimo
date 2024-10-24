import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useBank from "../hooks/useBank";
import LoanForm from "../components/LoanForm";

const DetalhesCliente = () => {
  const { id } = useParams();
  const { clients } = useBank();
  const client = clients.find((client) => client.id === id);

  const [numParcelas, setNumParcelas] = useState(12); // Número de parcelas inicial
  const [valorMensal, setValorMensal] = useState(0);

  if (!client) {
    return <div>Cliente não encontrado</div>;
  }

  // Função para calcular o valor final com base na taxa de juros e número de parcelas
  const calcularValorFinal = (loanAmount, interestRate, parcelas) => {
    const taxaDecimal = interestRate / 100;
    return loanAmount * Math.pow(1 + taxaDecimal, parcelas);
  };

  const valorFinal = calcularValorFinal(
    client.loanAmount,
    client.interestRate,
    numParcelas
  );
  const valorEsperado = valorFinal - client.loanAmount;
  const valorMensalAtualizado = valorFinal / numParcelas;

  // Atualiza o valor mensal quando o número de parcelas muda
  const handleParcelasChange = (e) => {
    const parcelas = parseInt(e.target.value);
    setNumParcelas(parcelas);
    setValorMensal(valorFinal / parcelas);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Detalhes do Cliente: {client.name}</h2>
      <p>
        <strong>Valor do Empréstimo:</strong> R$ {client.loanAmount.toFixed(2)}
      </p>
      <p>
        <strong>Taxa de Juros:</strong> {client.interestRate}%
      </p>
      <div>
        <label htmlFor="parcelas">
          <strong>Número de Parcelas:</strong>
        </label>
        <input
          type="number"
          id="parcelas"
          min="1"
          max="120"
          value={numParcelas}
          onChange={handleParcelasChange}
          style={{ marginLeft: "10px", padding: "5px", width: "60px" }}
        />
      </div>
      <p>
        <strong>Valor Esperado de Juros:</strong> R$ {valorEsperado.toFixed(2)}
      </p>
      <p>
        <strong>Valor Final com Juros:</strong> R$ {valorFinal.toFixed(2)}
      </p>
      <p>
        <strong>Valor Recebido por Mês:</strong> R${" "}
        {valorMensalAtualizado.toFixed(2)}
      </p>

      <div style={{ marginTop: "20px" }}>
        <LoanForm clientId={client.id} />
      </div>
    </div>
  );
};

export default DetalhesCliente;
