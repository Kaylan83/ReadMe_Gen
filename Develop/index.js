
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GITHUB username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your Email address?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "describtion",
        message: "Describe shortly what does your project do?"
    },
    {
        type: "list",
        name: "license",
        message: "What license the project should have?",
        choices: ["MIT","GPL 3.0","APACHE","BSD", "None"]
    },
    {
        type: "input",
        name: "installing",
        message: "Please describe shortly if there is anything required to be installed for your application: "
    },
    {
        type: "input",
        name: "use",
        message: "provide a short instruction of use: "
    },
    {
        type: "input",
        name: "testing",
        message: "what type of test needs to be run?",
        default:"npm test"
    },
    {
        type: "input",
        name: "contribute",
        message: "Is there anything the user need to know about contributing in this repo: "
    },

];

//path.join(process.cwd(),fileName) // in case we need this can be used to specify the path wher the readme file to be written, but if we use it we need  to require("path").

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName ,data)
}

// function to initialize program
function init() {
    try {     
        inquirer.prompt(questions).then((answers)=>{
        console.log("Readme has been generated.....");
        writeToFile("README.md", generateMarkdown({...answers})); 
    })}

    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
