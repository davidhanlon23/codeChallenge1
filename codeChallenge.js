/*
 David Hanlon
 Commands:
 npm run test
 npm run start

 Coding Challenge 

    1. Assume none of the artist names (see below) contain commas, newlines or malicious constructs
    2. We recommend that candidates use their strongest language
    3. We care more about readability (variable names, formatting, complexity, etc.), good practices and correctness than performance within reason
    4. Tests aren't required but submissions that come with unit tests are much more likely to be correct
    5.Comments in code aren't required but should indicate intent; we frown on things like "import libs" or "set value to 1"
*/

// import fs which is a nodeJS file system module
const fs = require('fs');
// use streams for bigger files when using nodeJS 

// responsible for reading input file and storing it as .... ?
 function readTextFile(filePath){
  return new Promise ( (resolve, reject) => {
    fs.readFile(filePath, 'utf-8', function (err, data) {
        // early return if there is an error
        if (err) {
           return err;
        }
        // else return data from file
        // console.log(data);
        return data;
        // Promise.resolve(data);

        // err ? Promise.reject('Error with File Path', err): Promise.resolve(data);
        });
    
  });
}

function rtf(filePath){
    fs.readFile(filePath, 'utf-8', function (err, data) {
        // return new Promise ((resolve, reject) => {
        //     // Reject promise if error å
        //     // else resolve promise with data from file
        //     // console.log(data);

        //     err ? reject('Error with File Path', err) : resolve(data);
        // });
        console.log(data);
        return data;
    });        
}


// filter file
function filterFile(){
    return 'yo';
}

// responsible for running the main processes
async function main(){
    try{
        console.log('--------------------START-------------------');
        const yolo = await rtf('./test.txt');
        console.log('yolo: ',yolo);
        console.log('--------------------END-------------------');
    }
    catch(err){
        console.log('ERROR HAS OCCURRED', err);
    }
    
    
}


main();
module.exports = {
    main,
    filterFile,
    readTextFile,

};