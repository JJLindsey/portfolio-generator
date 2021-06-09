const inquirer = require('inquirer');
//Need later
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
//End need later

//const profileDataArgs = process.argv.slice(2, process.argv.length);

//const [name, github] = profileDataArgs;
// console.log(name, github);
// console.log(generatePage(name, github));

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i+=1) {
//         console.log(profileDataArr[i]);
//     }
// };
// //this is same as above
//  profileDataArr.forEach((profileItem) => console.log(profileItem));
// //     console.log(profileItem)
// // });
// // };
// printProfileData(profileDataArgs);

//insert key return wherever eant a line break to occur

//NEED LATER
// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw err;

//     console.log('Portfolio complete! Check out the index.html to see the output!');
// });
//END NEED LATER
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};
//promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    console.log(`
=================
Add a New Project
=================
`);
    //if there's no 'projects array property, create one
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if  (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }   else {
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
