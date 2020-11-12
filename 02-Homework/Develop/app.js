const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
 engineer = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your Name?",
            type: "input",
        },
        {
            name: "id",
            message: "What is your Employee's ID Number?",
            type: "number",
        },
        {
            name: "email",
            message: "What is your Email Address?",
            type: "input"
        },
        {
            name: "github",
            message: "What is your github username?",
            type: "input",
        },
        ]) .then( data => {
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                teamMembers.push(engineer);
                console.log(teamMembers);
                // need to activate the array here
                selectTeamMember();
});
}


intern = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your Name?",
            type: "input",
        },
        {
            name: "id",
            message: "What is your Employee's ID Number (must be a Number Input)?",
            type: "number",
        },
        {
            name: "email",
            message: "What is your Email Address?",
            type: "input"
        },
        {
            name: "school",
            message: "What school are you from?",
             type: "input",
        },
        ]) .then( data => {
                let interns = new Intern(data.name, data.id, data.email, data.school);
                teamMembers.push(interns);
                console.log(teamMembers);
                // need to activate the array here
                selectTeamMember();
});
}

manager = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your Name?",
            type: "input",
        },
        {
            name: "id",
            message: "What is your Employee's ID Number (must be a Number Input)?",
            type: "number",
        },
        {
            name: "email",
            message: "What is your Email Address?",
            type: "input"
        },
        {
            name: "officeNumber",
            message: "What is your office number?",
            type: "number",
        },
        ]) .then( data => {
                let manager = new Manager(data.name, data.id, data.email,data.officeNumber);
                teamMembers.push(manager);
                console.log(teamMembers);
                // need to activate the array here
                selectTeamMember();
});
}
 let addMoreMembers = 
    {
        name: "moreMembers",
        message: "Are there any other members in your team?",
        type: "list",
        choices: ['Manager','Intern','Engineer','Finished']
    }

function selectTeamMember ()  {
    inquirer.prompt(addMoreMembers).then((answer)=>{
        //if the user choose Egineer from prompt
     if (answer.moreMembers === "Engineer"){
         //enginer() function will be called
                engineer();
            } else if (answer.moreMembers === "Intern") {
                intern();

            } else if (answer.moreMembers === "Manager") {
                manager();

            } else if (answer.moreMembers === "Finished") {
                console.log("Finished")
               /*  for writing the file */
                const OUTPUT_DIR = path.resolve(__dirname, "output");
                const outputPath = path.join(OUTPUT_DIR, "main.html");
                /* 
                writing the file */
                fs.writeFile(outputPath, render(teamMembers), function(err) {
                                if (err) {
                                console.log(err)
                                } else {
                                    console.log("Success! You can find main.html in the output directory/folder")
                                }
                            });

                         }
        })
     }
 
 

 selectTeamMember();  
/* engineer();
intern(); */



