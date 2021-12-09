superbowlWin(record)

function superbowlWin(arr){
    const found = arr.find(el => el.result === 'W')
      if (found){
        return found.year
      }
}