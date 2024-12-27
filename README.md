**Description**

Chatbot that enables user to select any of 3 Stock Exchanges (LSEG, NASDAQ, NYSE) and for the selected exchange provides 5 stocks that are traded in that exchange.
User can then select any one of those stocks to view the latest stock price.

**How to start the project**
- clone the project on your machine: ```git clone <https/ssh url>```
- install dependencies: ```npm i```
- start the project: ```npm run start```
- open localhost:3000 in your browser

Node version used: **16.20.0** 

**NOTE: Node versions higher than 17 will cause OpenSSL issues. If that happens, please install Node.js version 16+ or run run in your terminal export NODE_OPTIONS=--openssl-legacy-provider**

**Technical details**
- library used: react-simple-chatbot
- data is read from a JSON file and transformed into the compatible steps format from below:

```
const steps = [
  {
    id: "0",
    message: "Hello! Welcome to LSEG. I'm here to help you.",
    trigger: "1"
  },
  {
    id: "1",
    message: "Please select a Stock Exchange.",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "London Stock Exchange", trigger: "3" },
      { value: 2, label: "New York Stock Exchange", trigger: "4" },
      { value: 3, label: "Nasdaq", trigger: "5" },
    ] 
  },
  {
    id: "3",
    message: "Please select a stock.",
    trigger: "6"
  },
  {
    id: "4",
    message: "Please select a stock.",
    trigger: "7"
  },
  {
    id: "5",
    message: "Please select a stock.",
    trigger: "8"
  },
  {
    id: "6",
    options: [
        { value: 1, label: "CRODA INTERNATIONAL PLC", trigger: "9" },
        { value: 2, label: "GSK PLC", trigger: "10" },
        { value: 3, label: "ANTOFAGASTA PLC", trigger: "11" },
        { value: 4, label: "FLUTTER ENTERTAINMENT PLC", trigger: "12" },
        { value: 5, label: "BARRATT DEVELOPMENTS PLC", trigger: "13" },
      ]
  },
  {
    id: "7",
    options: [
        { value: 1, label: "Ashford Hospitality Trust", trigger: "14" },
        { value: 2, label: "Kuke Music Holding Ltd", trigger: "15" },
        { value: 3, label: "Ashland Inc.", trigger: "16" },
        { value: 4, label: "Nomura Holdings Inc.", trigger: "17" },
        { value: 5, label: "LendingClub Corp", trigger: "18" },
      ]
  },
  {
    id: "8",
    options: [
        { value: 1, label: "Advanced Micro Devices, Inc.", trigger: "19" },
        { value: 2, label: "Tesla, Inc.", trigger: "20" },
        { value: 3, label: "SoFi Technologies, Inc.", trigger: "21" },
        { value: 4, label: "Paramount Global", trigger: "22" },
        { value: 5, label: "Alphabet Inc", trigger: "23" },
      ]
  },
  {
    id: "9",
    message: "Stock Price of CRODA INTERNATIONAL PLC is 4807.00. Please select an option.",
    trigger: "24"
  },
  {
    id: "10",
    message: "Stock Price of GSK PLC is 1574.80. Please select an option.",
    trigger: "24"
  },
  {
    id: "11",
    message: "Stock Price of ANTOFAGASTA PLC is 1746.00. Please select an option.",
    trigger: "24"
  },
  {
    id: "12",
    message: "Stock Price of FLUTTER ENTERTAINMENT PLC is 16340.00. Please select an option.",
    trigger: "24"
  },
  {
    id: "13",
    message: "Stock Price of BARRATT DEVELOPMENTS PLC is 542.60. Please select an option.",
    trigger: "24"
  },
  {
    id: "14",
    message: "Stock Price of Ashford Hospitality Trust is 1.72. Please select an option.",
    trigger: "25"
  },
  {
    id: "15",
    message: "Stock Price of Kuke Music Holding Ltd is 1.20. Please select an option.",
    trigger: "25"
  },
  {
    id: "16",
    message: "Stock Price of Ashland Inc is 93.42. Please select an option.",
    trigger: "25"
  },
  {
    id: "17",
    message: "Stock Price of Nomura Holdings Inc. is 5.84. Please select an option.",
    trigger: "25"
  },
  {
    id: "18",
    message: "Stock Price of LendingClub Corp is 9.71. Please select an option.",
    trigger: "25"
  },
  {
    id: "19",
    message: "Stock Price of Advanced Micro Devices, Inc. is 164.21. Please select an option.",
    trigger: "26"
  },
  {
    id: "20",
    message: "Stock Price of Tesla, Inc. is 190.35. Please select an option.",
    trigger: "26"
  },
  {
    id: "21",
    message: "Stock Price of SoFi Technologies, Inc. is 8.24. Please select an option.",
    trigger: "26"
  },
  {
    id: "22",
    message: "Stock Price of Paramount Global is 14.92. Please select an option.",
    trigger: "26"
  },
  {
    id: "23",
    message: "Stock Price of Alphabet Inc. is 141.91. Please select an option.",
    trigger: "26"
  },
  {
    id: "24",
    options: [
        { value: 1, label: "Go Back", trigger: "3" },
        { value: 2, label: "Main menu", trigger: "1" },
      ]
  },
  {
    id: "25",
    options: [
        { value: 1, label: "Go Back", trigger: "4" },
        { value: 2, label: "Main menu", trigger: "1" },
      ]
  },
  {
    id: "26",
    options: [
        { value: 1, label: "Go Back", trigger: "5" },
        { value: 2, label: "Main menu", trigger: "1" },
      ]
  }
];
```