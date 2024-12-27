let steps =  [
    {
        id: "0",
        message: "Hello! Welcome to LSEG. I'm here to help you.",
        trigger: "1"
    },
    {
        id: "1",
        message: "Please select a Stock Exchange.",
        trigger: "2"
    }
];

/**
 * Function used to generate the stock name options
 *
 * @param {Array<object>} data Part of data from the JSON file
 * @param {Integer} counter Counter needed to generate the trigger value for the next step
 * @returns {Array<object>} A step of data in eligible format for react-simple-chatbot
 */

function generateStockNameOptions(data, counter) {
    let options = [];
    data.forEach((element, i) => {
        options = options.concat({ value: i+1, label: element.stockExchange ?? element.stockName, trigger: counter.toString()});
        counter++;  
    });
    return options;
}

/**
 * Function used to generate the messages for the stock price
 *
 * @param {Array<object>} data Part of data from the JSON file
 * @param {Integer} counter Counter needed to generate the id of the step
 * @param {Integer} trigger Value needed to trigger the next step
 * @returns {Array<object>} A step of data in eligible format for react-simple-chatbot
 */

function generateStockPriceMessages(data, counter, trigger) {
    let messages = [];
    data.forEach((element, i) => {
        messages = messages.concat({ id: counter.toString(), message: 'Stock Price of ' + element.stockName + ' is ' + element.price + '. Please select an option.', trigger: trigger.toString()})
        counter++;
    });
    return messages;
}

/**
 * Function used to transform the data from the JSON file into eligible format for react-simple-chatbot
 *
 * @param {Array<object>} data Data from the JSON file
 * @returns {Array<object>} Data in eligible format for react-simple-chatbot
 */

export function generateData(data) {
    let counter = 3;

    //generate first 3 options
    let options = generateStockNameOptions(data, counter);

    steps = steps.concat({
        id: "2",
        options }); 

    steps = steps.concat(
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
        }
    );

    counter = 9;
    //generate next 5 options for the first Stock Exchange
    options = generateStockNameOptions(data[0].topStocks, counter);

    steps = steps.concat({
        id: "6",
        options
    });

    counter = counter + options.length;
    //generate next 5 options for the second Stock Exchange
    options = generateStockNameOptions(data[1].topStocks, counter);

    steps = steps.concat({
        id: "7",
        options
    });

    counter = counter + options.length;
    //generate next 5 options for the third Stock Exchange
    options = generateStockNameOptions(data[2].topStocks, counter);

    steps = steps.concat({
        id: "8",
        options
    });

    counter = 9
    //generate price messages for the first set of data
    options = generateStockPriceMessages(data[0].topStocks, counter, 24);
    steps = steps.concat(options);

    counter = counter + options.length;
    //generate price messages for the second set of data
    options = generateStockPriceMessages(data[1].topStocks, counter, 25);
    steps = steps.concat(options);

    //generate price messages for the third set of data
    counter = counter + options.length;
    options = generateStockPriceMessages(data[2].topStocks, counter, 26);
    steps = steps.concat(options);

    //generate Go Back and Main menu steps
    steps = steps.concat([{
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
      }])

    return steps;
}

