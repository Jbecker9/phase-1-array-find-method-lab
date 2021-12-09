// const superbowlWin = function(record){
//     for (const result of record){
//         if (record.result === "W")
//         return superbowlWin(record.year)
//     }

// };


const superbowlWin = function(record){
    if (record.result === 'W'){
        return true;
    };
};

record.year.find(superbowlWin)