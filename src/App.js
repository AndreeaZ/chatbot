import React from "react";
import Chatbot from "react-simple-chatbot";
import data from "./Chatbot - stock data.json";
import { generateData } from './TransformData';

const steps = generateData(data);

export default function App() {
  return <Chatbot steps={steps} />;
}
