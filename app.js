const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i+=1) {
        console.log(profileDataArr[i]);
    }
};
//this is same as above
 rofileDataArr.forEach((profileItem) => console.log(profileItem));
//     console.log(profileItem)
// });
// };
printProfileData(profileDataArgs);