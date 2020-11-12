// Dependencies 
// ===================================================

var fs = require('fs')
var inquirer = require("inquirer");
const { type } = require('os');

// SETS up the express app to handle data parsing 



var profile = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your title?"
        },
        {
            type: "input",
            name: "age",
            message: "How old are you?"
        },
        {
            type: "input",
            name: "phoneNumber",
            message: "What is your phone number? : "
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your gitHub name?: "
        },
        {
            type: "list",
            name: "mastery",
            message: "what would you say is your mastery level of this material?",
            choices: [
                "no clue what I am doing",
                "some of it looks familiar",
                "I understand the concepts",
                "I can apply the concepts to build a functioning program",
                "I can fully design and build applications from scratch"
            ]
        }
    ])
    )
});

profile.then(function(data){ 
    console.log(data);
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
    <div class="team">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h1>${data.name}</h1>
                <p>position: ${data.title}</p>
            </div>
          
            <div class="card-body">
                <div class="profile">age: ${data.age}</div>
                <div class="profile">phone number: ${data.phoneNumber}</div>
                <div class = "profile"> gitHub name: ${data.gitHub}</div>

            </div>
        </div>
    </div>
 
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"></script>
    </body>
    </html>  

`;
    fs.writeFile('index.html', html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
})

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


            
           
        ])


    
}
// do you want to add more 
    // if yes, go to a function 
        // ask the name name: 
        // ask the position (choices: engineer, intern)
        // ask the phone number: 
        // ask git hub profile: 
            
    // else exit 
        // console log success 



        
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
 // for the provided `render` function to work!   