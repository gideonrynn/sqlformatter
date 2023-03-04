function handleCommas(direction) {

    // get original list submitted by user
    let originalStatement = document.querySelector('#input').value;

    // trim white space and separate into array so we can evaluate each item appropriately
    let selectList = originalStatement.substring(0, originalStatement.indexOf('FROM'));
    let remainingStatement = originalStatement.substring(originalStatement.indexOf('FROM'));

    //  this will break the array into 3, with from having it's own space let statementArray = originalStatement.trim().split(/(\bFROM\b)/);

    //break select list into an array
    let deconstructedStatement = selectList.split(",");
    // console.log("select list as array", deconstructedStatement);
    // console.log("remaining statement as array", remainingStatement);

    //this is variable that will contain the final product
    let finalList = "";

    deconstructedStatement.forEach((item, iteration) => {
        let updatedItem = item.trim();
        if(iteration != 0) {
            // console.log(item);
            updatedItem = direction === "leading" ? "\n\t," + item.trim() : "\n\t" + item.trim() + ",";
        }

        console.log(updatedItem);
        finalList = finalList + updatedItem;
    });

    console.log(finalList);
    console.log(finalList + "\n" + remainingStatement);
    document.querySelector('#input').value = finalList + "\n" + remainingStatement;
   
}

function clearInput() {
    document.querySelector('#input').value = "";
}

function trimInput() {
    let originalStatement = document.querySelector('#input').value;
    let finalList = originalStatement.includes(';') ? originalStatement.trim() : originalStatement.trim() + ';';
    document.querySelector('#input').value = finalList;
    console.log("Final list", finalList);
    console.log("if I break on whitespace, statement as array: ", finalList.split("\n"));
    console.log("if I break on comma, statement as array: ", finalList.split(","));
}

// (() => {
//     //initiation code for IIF
//   })();