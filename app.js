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
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));