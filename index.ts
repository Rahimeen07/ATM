#! /usr/bin/env node 
import inquirer from "inquirer";

interface ansType {
    userId : string,
    userPin: number,
    accountType : string,
    transactionType : string,
    amount : number,
};

const answers: ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your Id: "
    },
    {
    
            type: "number",
            name: "userPin",
            message: "Kindly Enter Your PIN: "
    },
    {
     type:"list",
     name: "accountType",
     choices : ["Current ", "Saving"],
     message: "select your account type:",


  },
  {
      type: "list",
      name: "transactionType",
      choices : ["Fast Cash", "WithDraw"],
      message: "select your transaction",
      when(answers){
        return answers.accountType
    },

},
{
    type: "list",
    name: "amount",
    choices : [1000,2000,10000,20000 ],
    message: "select your amount",
    when(answers){
      return answers.transactionType == "Fast Cash"
    },
},
{
    type: "number",
    name: "amount",
    message: "Enter your amount",
    when(answers) {
      return answers.transactionType == "WithDraw"
    },
  }
])
console.log(answers)


