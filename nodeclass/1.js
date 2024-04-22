// var fs = require('fs');
// try {
//     var data = fs.readFileSync('file.txt', 'utf-8');
//     console.log(data);
// } catch (e) {
//     console.error('Error:', e);
// }

// function square(n) {
//     return n * n;
// }

// var result = square(5);
// console.log(result);

// var fs = require('fs')
// fs.writeFile("file.txt","Writing in file ",(err)=>
// {
//     if(err){
//         console.error('error');
//     }
//     else{
//         console.log("Written Succesfully")
//     }
// }) 
// const fs = require('fs');

// const filePath = 'file.txt';

// // Checking if the file exists by .F and is readable by .R
// fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
//     if (err) {
//         console.error('Sorry file is not present');
//     } else {
//         console.log('File exists and is readable');
//     }
// });
const fs = require('fs');

const filePath = 'file';
const dataToAppend = 'This is some additional content.';

fs.appendFile(filePath, dataToAppend, 'utf-8', (err) => {
    if (err) {
        console.error('Sorry, File cannot append');
    } else {
        console.log('Data appended to file successfully.');
    }
});
// fs.unlink
// fs.rename
// fs.open
// fs.close
// fs.copyFile
// fs.stat
// write name and registration number and send to activity
//create a form in which you have to ask for user details ,fetch those details using javascript and display then in tabular format
