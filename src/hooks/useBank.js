import { useContext } from "react";
import { BankContext } from "../contexts/BankContext";

const useBank = () => useContext(BankContext);

export default useBank;
