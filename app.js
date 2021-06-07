const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;
// console.log(name, github);
// console.log(generatePage(name, github));

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i+=1) {
//         console.log(profileDataArr[i]);
//     }
// };
// //this is same as above
//  rofileDataArr.forEach((profileItem) => console.log(profileItem));
// //     console.log(profileItem)
// // });
// // };
// printProfileData(profileDataArgs);

//insert key return wherever eant a line break to occur

fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw err;

    console.log('Portfolio complete! Check out the index.html to see the output!');
});
