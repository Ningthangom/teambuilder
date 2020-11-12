
var inquirer = require("inquirer")



questions = [{
    type: 'list',
    name: 'databasetype',
    message: 'Choose database :',
    choices: ['mongoDB', 'mysql [alpha]', 'firebase [alpha]', 'url [alpha]'],
    default: 'mongoDB'
}, {

   type: 'input',
   name: 'url',
   message: 'Enter the URL',
   when: (answers) => answers.databasetype === 'mongoDB'
},
{
    addMember()
  
    when: (answers) => answers.databasetype === 'mysql [alpha]'
}]

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });


  function addMember(){
    inquirer 
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "Do you want to add another team member?",
                choices: [
                    "yes",
                    "no",
                    
                ]
            },
       /*      {

                when: (answers) => answers.choice === 'yes'
            }
             */

            
           
        ])


    
}