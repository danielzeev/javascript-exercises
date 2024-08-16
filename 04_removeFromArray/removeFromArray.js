const removeFromArray = function(listToProcess, ...removeArgs) {
    removeArgs = removeArgs.flat(); // Flatten in case an array was inputted   
    let filteredList = listToProcess;
    for (const arg of removeArgs) {
        filteredList = filteredList.filter((listItem) => {return listItem !== arg});
        }
    return filteredList;
};


// Do not edit below this line
module.exports = removeFromArray;
