import React from "react";
import { createContext } from "react/cjs/react.development";
import { useContext, useState } from "react/cjs/react.production.min";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
};
