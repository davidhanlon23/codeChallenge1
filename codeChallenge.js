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
    5. Comments in code aren't required but should indicate intent; we frown on things like "import libs" or "set value to 1"

    Write a program that, using this file as input, produces an output file containing a list of pairs of artists which appear 
    TOGETHER in at least fifty different lists. It should be able to be run from the command line. For example, in the above sample,
     Radiohead and Morrissey appear together twice, but every other pair appears only once. Your solution should be a CSV, with 
     each row being a pair. For example:

     Morrissey,Radiohead

    Your solution MAY return a best guess, i.e. pairs which appear at least 50 times with high probability, as long as you explain 
    how your approach affects accuracy and why this tradeoff improves the performance of the algorithm. Please include, 
    either in comments or in a separate file, a brief one-paragraph description of any optimizations you made and how they 
    impact the run-time of the algorithm.
*/

// import fs which is a nodeJS file system module... could have used streams which is more efficient but not necessary in this case
const fs = require('fs');


// responsible for reading input file and storing it as .... ?
 function readTextFile(filePath){
     return fs.readFileSync(filePath).toString();
}

// responsible for filtering text file by ,
function filterTextFile(data){
    let filteredData = '';

    return filteredData;

}

// responsible for running the main processes
function main(){
    try{
        console.log('--------------------START------------------- \n');
        
        // read file
        const data = readTextFile('./test.txt');
        console.log(`READ-DATA: \n \n ${data}`);

        // filter file
        const filteredData = filterTextFile(data);
        console.log(`FILTERED-DATA: \n \n ${filteredData}`);

        // create csv file
        
        console.log('\n--------------------END---------------------');
    }
    catch(err){
        console.log('ERROR HAS OCCURRED:', err);
    }
    
    
}
main();

// export functions to be tested
module.exports = {
    main,
    readTextFile,

};