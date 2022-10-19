

function superbowlWin(array) {
    let obj = array.find(item => item.result === "W")
    if (obj) {
        return obj.year
    }
    else {
        return obj
    }
}