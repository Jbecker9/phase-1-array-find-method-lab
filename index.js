const superbowlWin = function(record){
    for (const result of record){
        if (record.result === "W")
        return superbowlWin(record.year)
    }

};