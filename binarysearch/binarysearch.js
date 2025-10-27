"use strict";

function binarySearch( searchFor, values ) {
    let min = 0;
    let max = values.length-1;
    let middle = -1;
    let found = false;
    let iterations = 0;

    while (values[middle] !== searchFor && iterations < Math.log2(values.length)) {
        //console.log(`Searching for ${searchFor} between index ${min} and ${max}.`);
        middle = min + Math.floor((max - min) / 2);
        iterations++;
        if (values[middle] === searchFor) {
            found = true;
            break;
        } else if (values[middle] < searchFor) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }

    }
    if (!found) {
        middle = -1;
    }
    return {"found": found, "index": middle, "iterations": iterations};
}