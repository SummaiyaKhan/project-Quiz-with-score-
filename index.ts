#! /usr/bin/env node

import inquirer from 'inquirer';

async function promptUser() {
  const questions = [
    {
      message: "Which of the following is a correct way to declare a variable in TypeScript?",
      type: "list",
      name: "answer1",
      choices: [
        "a) let variableName: Type",
        "b) var variableName = Type",
        "c) const variableName = new Type()",
        "d) function variableName(Type)",
      ],
    },
    {
      message: "What is the correct syntax to define an interface in TypeScript?",
      type: "list",
      name: "answer2",
      choices: [
        "a) interface InterfaceName {}",
        "b) type InterfaceName {}",
        "c) var InterfaceName {}",
        "d) function InterfaceName {}",
      ],
    },
    {
      message: "How do you specify a function parameter as optional in TypeScript?",
      type: "list",
      name: "answer3",
      choices: [
        "a) function func(param: Type?) {}",
        "b) function func(param?: Type) {}",
        "c) function func(param: Type = optional) {}",
        "d) function func(param: Type?) {}",
      ],
    },
    {
      message: "Which keyword is used to explicitly specify the type of a variable in TypeScript?",
      type: "list",
      name: "answer4",
      choices: [
        "a) var",
        "b) let",
        "c) const",
        "d) type",
      ],
    },
    {
      message: "How do you create a union type in TypeScript?",
      type: "list",
      name: "answer5",
      choices: [
        "a) type Name = Type1 & Type2",
        "b) type Name = Type1 | Type2",
        "c) type Name = Type1 || Type2",
        "d) type Name = Type1 Type2",
      ],
    },
    {
      message: "What is the TypeScript type used to represent a value that can be either a string or a number?",
      type: "list",
      name: "answer6",
      choices: [
        "a) stringOrNumber",
        "b) string | number",
        "c) StringNumber",
        "d) strNumber",
      ],
    },
    {
      message: "Which of the following is a correct way to create an array of numbers in TypeScript?",
      type: "list",
      name: "answer7",
      choices: [
        "a) let numbers: number[] = [1, 2, 3]",
        "b) let numbers: [number] = [1, 2, 3]",
        "c) let numbers: Array = [1, 2, 3]",
        "d) let numbers: Array<number> = [1, 2, 3]",
      ],
    },
    {
      message: "How do you specify a default value for a function parameter in TypeScript?",
      type: "list",
      name: "answer8",
      choices: [
        "a) function func(param: Type = defaultValue) {}",
        "b) function func(param = defaultValue: Type) {}",
        "c) function func(param: Type defaultValue) {}",
        "d) function func(defaultValue: Type = param) {}",
      ],
    },
    {
      message: "Which of the following TypeScript features provides static type-checking for JavaScript code?",
      type: "list",
      name: "answer9",
      choices: [
        "a) Type annotations",
        "b) Type inference",
        "c) Type guards",
        "d) Type assertions",
      ],
    },
    {
      message: "How do you define a readonly property in a TypeScript interface?",
      type: "list",
      name: "answer10",
      choices: [
        "a) propertyName: Type readonly",
        "b) readonly propertyName: Type",
        "c) const propertyName: Type",
        "d) var propertyName: readonly Type",
      ],
    },
  ];

  const answers = await inquirer.prompt(questions);
  
 const correctAnswers: { [key: string]: string } = {
  answer1: "a) let variableName: Type",
  answer2: "a) interface InterfaceName {}",
  answer3: "b) function func(param?: Type) {}",
  answer4: "d) type",
  answer5: "b) type Name = Type1 | Type2",
  answer6: "b) string | number",
  answer7: "a) let numbers: number[] = [1, 2, 3]",
  answer8: "a) function func(param: Type = defaultValue) {}",
  answer9: "a) Type annotations",
   answer10: "b) readonly propertyName: Type",
 };



 let score = 0;

 const keys = Object.keys(correctAnswers);

 for (let i = 0; i < keys.length; i++) {
 const key = keys[i];

 if (answers[key] === correctAnswers[key]) {
  score++;
 }
 }

 console.log(`Your score is: ${score} out of 10`);
   
  if (score >= 8) {
    console.log("You passed! Your work is great.");
  } else {
    console.log("You failed! You need to study harder.");
  }


    

}

 promptUser();
